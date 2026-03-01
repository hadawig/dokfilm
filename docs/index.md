---
layout: home

hero:
  name: "Dokfilm"
  text: "Hinter den Kulissen einer Mockumentary"
  tagline: "Die Entstehung dokumentiert mit Gemini CLI"
  actions:
    - theme: brand
      text: Zum Logbuch
      link: /logbuch/
    - theme: alt
      text: Das Konzept
      link: /konzept
    - theme: alt
      text: Der Entwurf des Drehbuches
      link: /drehbuch/

features:
  - title: Authentisch
    details: Ein ehrlicher Blick auf die Hürden und Erfolge der Filmproduktion.
  - title: KI-gestützt
    details: Dokumentiert und aufbereitet mit Hilfe von Gemini CLI.
  - title: Open Process
    details: Alles ist für die Öffentlichkeit transparent einsehbar.

---

<div style="background: #000; padding: 2rem; border-radius: 12px; margin: 2rem 0; border: 3px solid #ff4444; position: relative; overflow: hidden; box-shadow: 0 0 40px rgba(255,68,68,0.3);">
  <div style="position: absolute; top: 10px; left: 20px; color: #ff4444; font-family: monospace; font-size: 1.1rem; z-index: 10; font-weight: bold;">
    <span style="display: inline-block; width: 12px; height: 12px; background: #ff4444; border-radius: 50%; margin-right: 8px; animation: blink 1s infinite;"></span> LIVE-ÜBERTRAGUNG AUS DER FORENSIK
  </div>
  <div style="position: absolute; top: 10px; right: 20px; color: #888; font-family: monospace; font-size: 0.8rem;">
    CAM_01 | 2026-02-28
  </div>
  
  <video autoplay muted loop playsinline style="width: 100%; border-radius: 4px; filter: contrast(1.2); max-height: 500px; background: #111; margin-top: 1.5rem;">
    <source src="/transparenz-live.mp4" type="video/mp4">
    Ihr Browser unterstützt das Video-Tag nicht.
  </video>
  
  <div style="text-align: center; margin-top: 1.5rem;">
    <p style="color: #ff4444; font-family: monospace; font-size: 1rem; font-weight: bold; margin-bottom: 0.5rem;">
      „Transparenz ist das beste Desinfektionsmittel.“
    </p>
    <p style="color: #888; font-size: 0.8rem; margin-bottom: 1rem;">
      Beobachten Sie die Entstehung des Horten-Mysteriums in Echtzeit. 
    </p>
    <a href="https://youtu.be/l7d-_RN3LBA" target="_blank" style="color: #fff; font-size: 0.8rem; text-decoration: underline; background: #333; padding: 5px 15px; border-radius: 20px;">Vollständiges Video (YouTube)</a>
  </div>
</div>

<div style="background: #fdf6e3; border-left: 10px solid #d4af37; padding: 2rem; color: #555; font-family: 'Georgia', serif; margin: 3rem 0; box-shadow: 5px 5px 15px rgba(0,0,0,0.1);">
  <h2 style="margin-top: 0; color: #000; font-family: sans-serif;">📝 KOMMENTAR DES PROJEKTMANAGERS</h2>
  <p>Ich hatte die Idee, im Zuge des KI-Hypes ein bißchen mit <b>Gemini-CLI</b> zu „spielen“! Am Beginn stand ein wenig Vorbereitung. Erstens den Rechner vorbereiten. Das war sehr wenig Arbeit!</p>
  
  <p>Da ich seit Jahrzehnten ein Power-Linux-Nutzer bin, stolz der Open-Source-Community angehöre und immer eine tadellos funktionierende Tux-Machine im Einsatz habe, langten dafür wenige Befehle in der Konsole! Nachahmung ausdrücklich erwünscht:</p>

  <pre style="background: #000; color: #00ff00; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 0.9rem; overflow-x: auto;">
sudo apt update && sudo apt upgrade -y
sudo apt install npm
npm install -g @google/gemini-cli
mkdir gemini && cd gemini
gemini</pre>

  <p>Fall erledigt. Ehrlich gesagt habe ich mir nicht sehr viel erwartet, da man ja meint, für KI bräuchte man einen 10.000€-Rechner mit 5.000€-Grafikkarte und einem halben Terabyte RAM. Fehlanzeige bei uns in Tirol! „Meiner“ hat gerade mal eine TDP von 65W und gar keine dedizierte Grafikkarte.</p>

  <p>Nichtsdestotrotz habe ich da ein recht leistungsfähiges System designt. Da ich politisch interessiert bin und die laufenden Korruptionsprozesse der „Bananenrepublik Austriastan“ mitverfolge, war die Idee geboren, mich einer künstlerischen und künstlichen (<b>AI and I</b>) Aufarbeitung zu widmen.</p>

  <p>Jetzt – 3 Tage später – steht eine Homepage im Netz, die unter meiner Anleitung nahezu selbstständig und fehlerfrei von <b>Gemini-CLI</b> gebaut und befüllt wurde. Eine Plattform, die sich meiner Meinung nach sehen lassen kann!</p>
  
  <p style="text-align: right; font-weight: bold; margin-top: 2rem;">Fortsetzung folgt!<br>Euer Volti</p>
</div>

<div style="background: #cc0000; padding: 1.5rem; border-radius: 12px; margin: 2rem 0; color: white; text-align: center; font-weight: bold; box-shadow: 0 5px 15px rgba(204,0,0,0.3);">
  🚩 SUPPORT THE INVESTIGATORS: <a href="https://www.spreadshirt.at/shop/bekleidung/t-shirts/i+love+wksta/" target="_blank" style="color: white; text-decoration: underline;">Holen Sie sich das rote „I love WKStA“ T-Shirt</a>
</div>

<div style="text-align: center; margin: 2rem 0;">
  <img src="/perplexity-bewertung.png" alt="Perplexity Bewertung" style="max-width: 100%; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
  <p style="font-style: italic; margin-top: 1rem; font-size: 1.1rem; color: #555;">„Die inhaltliche und technische Umsetzung wird von Perplexity mit 7/10 Punkten bewertet – ein starkes Fundament für unser Projekt.“</p>
  <div style="margin-top: 1.5rem;">
    <a href="/Perplexity_KI_Bewertung.pdf" download class="VPButton brand large" style="text-decoration: none; padding: 12px 24px; border-radius: 20px; font-weight: 600;">📄 Download: KI-Analyse Report (PDF)</a>
    <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">Lesen Sie den vollständigen Dialog mit Perplexity über die Qualität und politische Einordnung unseres Projekts.</p>
  </div>
</div>

<div style="background: #1a1a1a; padding: 3rem 1.5rem; border-radius: 12px; margin: 3rem 0; color: white; text-align: center; border: 1px solid #333;">
  <h2 style="color: #d4af37; margin-top: 0;">⚡ AKTUELLE FALLAKTE GELEAKT ⚡</h2>
  <p style="margin-bottom: 2rem;">Unser Forensik-Team hat neue Dokumente zur Verbindung zwischen Horten-Spenden und Benko-Immobilien sichergestellt.</p>
  <img src="/leaked-file.svg" alt="Geleakte Fallakte" style="max-width: 100%; filter: drop-shadow(0 0 20px rgba(212,175,55,0.2));">
  <div style="margin-top: 2rem;">
    <a href="/recherche/die-benko-verbindung" class="VPButton brand large">Zur Analyse der Benko-Verbindung</a>
  </div>
</div>

<div style="background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%); padding: 2rem; border-radius: 12px; margin: 2rem 0; color: black; text-align: center; box-shadow: 0 10px 30px rgba(212,175,55,0.3);">
  <h3 style="margin-top: 0; font-weight: bold;">💎 UNTERSTÜTZEN SIE DIE FORENSIK</h3>
  <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Helfen Sie uns, das Horten-Mysterium ohne ÖVP-Spenden aufzuklären. Sichern Sie sich das 40-seitige Premium-Dossier.</p>
  <a href="/unterstuetzen" class="VPButton brand large" style="background: black; color: white !important;">Jetzt Unterstützer werden</a>
</div>

# DAS HORTEN-MYSTERIUM

**Eine fabelhafte Fiktion von Macht, Geld und Perlen – Wo die Wahrheit ein Gerücht ist und die Gerüchte die Wahrheit werden!**

Vergessen Sie, was Sie zu wissen glauben! Tauchen Sie ein in eine Welt, in der die Grenzen zwischen Legende und Lügen verschwimmen: *Das Horten-Mysterium* ist die explosivste Mockumentary des Jahres, die das Leben der Jetset-Königin Heidi Goëss-Horten und ihres sagenumwobenen Gatten Helmut auf links dreht!

Erleben Sie, wie Helmut Horten, der „Schnäppchenjäger des 20. Jahrhunderts“, in den dunkelsten Stunden der Geschichte sein Imperium „erwirtschaftete“ – eine schonungslos-satirische Reise durch eine Zeit, in der „Arisierung“ nur ein anderes Wort für „geschicktes Investment“ war. Werden Sie Zeuge, wie die tragische Geschichte der Gebrüder Alsberg zur bizarr-komischen Farce eines bürokratischen Totalversagens wird!

Doch das ist nur der Anfang! Folgen Sie der schillernden Witwe Heidi Horten, wie sie ihr Leben nach Helmuts Tod in einen schwindelerregenden Strudel aus unermesslichem Reichtum, exquisitem Geschmack und – natürlich – einem schier endlosen Fluss von Spenden an die österreichische Volkspartei verwandelt. Sehen Sie, wie Politiker in aberwitzigen Verrenkungen versuchen, die magische „Spendenstückelung“ zu erklären, während der Rechnungshof verzweifelt nach einem roten Faden sucht – und nur ein Gewirr aus „kleinen Aufmerksamkeiten“ findet!

*Das Horten-Mysterium* ist ein gewagter Blick hinter die Samtvorhänge der Macht und des Geldes, eine provokante Mischung aus Satire und Fiktion, die Sie zum Lachen, Kopfschütteln und vor allem zum Nachdenken bringen wird. Kommen Sie und erleben Sie die Geschichte, wie sie *hätte* sein können – oder vielleicht doch war?

---
<p style="font-size: 0.8rem; color: #888; text-align: center;">
Dies ist ein satirisches Kunstprojekt. <a href="/pressemappe">Pressemappe</a> | <a href="/disclaimer">Satire-Disclaimer</a>
</p>

<!-- Verifying GitHub Pages deployment setup -->