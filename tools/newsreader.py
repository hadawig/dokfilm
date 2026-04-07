import urllib.request
import sys
import argparse
import re
from datetime import datetime

# Wir nutzen die ORF-Suche direkt – das ist das Einzige, was zuverlässig ist.
SEARCH_URL = "https://orf.at/suche/?q="

DEFAULT_KEYWORDS = ["Doskozil", "Wöginger", "ÖVP", "Abschiebung", "Horten", "Wolf", "Schelling"]

def get_html(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        return f"Error: {e}"

def search_news(keywords):
    print(f"--- Horten-Mysterium Newsreader v1.5 (ORF-Suche) ---")
    
    found_any = False
    
    for kw in keywords:
        print(f"Suche nach '{kw}'...")
        url = SEARCH_URL + urllib.parse.quote(kw)
        html = get_html(url)
        
        # Auf der ORF-Suchseite liegen die Ergebnisse meist in <h3 class="orf-search-result-title">
        # Wir suchen einfach nach allen Titeln und Links
        results = re.findall(r'<a[^>]+href="([^"]+)"[^>]*>(.*?' + re.escape(kw) + '.*?)</a>', html, re.IGNORECASE | re.DOTALL)
        
        # Falls die Suche oben nichts findet, versuchen wir es allgemeiner im Text
        if not results:
             # Suche nach Schlagzeilen im Umkreis des Keywords
             results = re.findall(r'href="([^"]+)"[^>]*>([^<]*' + re.escape(kw) + '[^<]*)</a>', html, re.IGNORECASE)

        for link, title_html in results[:5]: # Top 5 Ergebnisse pro Keyword
            title = re.sub(r'<[^>]+>', '', title_html).strip()
            if len(title) < 10: continue
            
            found_any = True
            full_link = link if link.startswith('http') else f"https:{link}"
            print(f"✅ TREFFER")
            print(f"   TITEL: {title}")
            print(f"   LINK: {full_link}")
            print("-" * 50)

    if not found_any:
        print("\nKeine Treffer über die ORF-Suche gefunden.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--keywords", nargs="+", default=DEFAULT_KEYWORDS)
    args = parser.parse_args()
    search_news(args.keywords)
