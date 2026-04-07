import urllib.request
import xml.etree.ElementTree as ET
import sys
import argparse
from datetime import datetime

# Configuration: RSS Feeds
FEEDS = {
    "Ö1 Journale": "https://podcast.orf.at/podcast/oe1/oe1_journale/oe1_journale.xml",
    "Ö1 Journal zu Gast": "https://podcast.orf.at/podcast/oe1/oe1_interview/oe1_interview.xml"
}

# Default Keywords for the Horten-Mysterium Project
DEFAULT_KEYWORDS = ["Wöginger", "ÖVP", "Abschiebung", "Horten", "Wolf", "Schelling", "Schmid", "Korruption", "Postenschacher", "Rotes Kreuz"]

def fetch_and_filter(keywords, days_limit=7):
    print(f"--- Horten-Mysterium Newsreader ---")
    print(f"Keywords: {', '.join(keywords)}")
    print(f"Scanning feeds...\n")
    
    found_any = False
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7'
    }
    
    for feed_name, url in FEEDS.items():
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req) as response:
                xml_data = response.read()
            
            # Debug: Print first 500 chars
            # print(f"DEBUG {feed_name}: {xml_data[:500].decode('utf-8', errors='ignore')}")
            
            root = ET.fromstring(xml_data)
            
            # RSS namespace handling might be needed, but let's try standard findall first
            items = root.findall(".//item")
            if not items:
                # Try with namespace if standard fails
                items = root.findall("./channel/item")
            
            for item in items:
                title_elem = item.find("title")
                desc_elem = item.find("description")
                link_elem = item.find("link")
                date_elem = item.find("pubDate")
                
                title = title_elem.text if title_elem is not None and title_elem.text else "No Title"
                description = desc_elem.text if desc_elem is not None and desc_elem.text else ""
                link = link_elem.text if link_elem is not None and link_elem.text else "No Link"
                pub_date = date_elem.text if date_elem is not None and date_elem.text else "No Date"
                
                # Basic match (case-insensitive)
                content = (str(title) + " " + str(description)).lower()
                matches = [kw for kw in keywords if kw.lower() in content]
                
                if matches:
                    found_any = True
                    print(f"[{feed_name}] {pub_date}")
                    print(f"TITEL: {title}")
                    print(f"MATCHES: {', '.join(matches)}")
                    print(f"LINK: {link}")
                    print("-" * 40)
                # print(f"DEBUG item: {title[:30]}...") # Debug to see if we find items at all
                    
        except Exception as e:
            print(f"Error fetching {feed_name}: {e}")

    if not found_any:
        print("No relevant news found for the selected keywords.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Horten-Mysterium Newsreader: Automated Research Tool")
    parser.add_argument("--keywords", nargs="+", default=DEFAULT_KEYWORDS, help="Keywords to search for")
    parser.add_argument("--days", type=int, default=7, help="Look back period in days")
    
    args = parser.parse_args()
    fetch_and_filter(args.keywords, args.days)
