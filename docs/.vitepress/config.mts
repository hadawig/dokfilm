import { defineConfig } from 'vitepress'

const base = process.env.GITHUB_PAGES === 'true' ? '/dokfilm/' : '/'

export default defineConfig({
  base: base,
  title: "Dokfilm Projekt",
  description: "Dokumentation der Entstehung meiner Mockumentary",
  ignoreDeadLinks: true,

  locales: {
    root: {
      label: 'Deutsch',
      lang: 'de',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Konzept', link: '/konzept' },
          { text: 'Orakel', link: '/orakel' },
          { text: 'Tip-Line', link: '/mitmachen' },
          { text: 'Unterstützen', link: '/unterstuetzen' },
          { text: 'Logbuch', link: '/logbuch/' }
        ],
        sidebar: [
          {
            text: 'Das Projekt',
            items: [
              { text: 'Idee & Konzept', link: '/konzept' },
              { text: 'Pointillismus des Kapitals', link: '/pointillismus' },
              { text: 'Unterstützen & Dossier', link: '/unterstuetzen' },
              { text: 'Das Pointillismus-Orakel', link: '/orakel' },
              { text: 'Budget-Rettungs-Simulator', link: '/budget-spiel' },
              { text: 'Whistleblower Tip-Line', link: '/mitmachen' },
                        { text: 'Die Besetzung (Cast)', link: '/cast' },
                        { text: 'Die Crew (Team)', link: '/team' },
                        { text: 'Geheime Medien', link: '/medien' },            ]
          },
          {
            text: 'Der Chronist',
            items: [
              { text: 'Über Gemini CLI', link: '/ueber-mich' },
              { text: 'Pressemappe', link: '/pressemappe' },
              { text: 'Disclaimer', link: '/disclaimer' },
              { text: 'Impressum', link: '/impressum' },
            ]
          },
          {
            text: 'Gerichtliche Nachspiele',
            items: [
              { text: 'Wöginger: Finanzamt Braunau', link: '/recherche/gericht-woeginger-braunau' },
              { text: 'Wöginger & Christa Scharf', link: '/recherche/gericht-woeginger-scharf' },
              { text: 'Thomas Schmid (Kronzeuge)', link: '/recherche/gericht-thomas-schmid' },
              { text: 'Karl-Heinz Grasser (Buwog)', link: '/recherche/gericht-grasser' },
              { text: 'Gernot Blümel (Laptop)', link: '/recherche/gericht-bluemel-laptop' },
              { text: 'René Benko (Strafverfahren)', link: '/recherche/die-benko-verbindung' },
              { text: 'Christian Pilnacek (U-Ausschuss)', link: '/recherche/u-ausschuss-pilnacek-ergebnisse' },
              { text: 'Der Fall Pilnacek (Hintergrund)', link: '/recherche/der-fall-pilnacek' },
            ]
          },
          {
            text: 'Recherche-Hintergrundwissen',
            items: [
              { text: 'Die Schredder-Affäre', link: '/recherche/schredder-affaere' },
              { text: 'Eurofighter-Affäre', link: '/recherche/eurofighter' },
              { text: 'Das Ibiza-Video', link: '/recherche/ibiza-video' },
              { text: 'Die Inseraten-Affäre', link: '/recherche/inseraten-affaere' },
                        { text: 'Postenschacher & Chats', link: '/recherche/postenschacher' },
                        { text: 'Die Schmid-Benko Chats', link: '/recherche/thomas-schmid-chats-details' },
                        { text: 'August Wöginger (Hintergrund)', link: '/recherche/postenschacher-woeginger' },              { text: 'Moderne ÖVP-Machtzirkel', link: '/recherche/moderne-machtzirkel' },
              { text: 'Die Benko-Verbindung', link: '/recherche/die-benko-verbindung' },
              { text: 'Der Fall Pilnacek', link: '/recherche/der-fall-pilnacek' },
              { text: 'Walter Rosenkranz (Vorsitz)', link: '/recherche/walter-rosenkranz' },
              { text: 'Korruption (FPÖ/ÖVP)', link: '/recherche/korruption-oevp-fpoe' },
              { text: 'Gebrüder Alsberg (Arisierung)', link: '/recherche/alsberg-brueder' },
              { text: 'Horten-Alsberg Kaufvertrag', link: '/recherche/der-kaufvertrag-horten-alsberg' },
              { text: 'Horten: Rüstung & Zwangsarbeit', link: '/recherche/helmut-horten-ruestung-zwangsarbeit' },
              { text: 'Teil 4: ÖVP & Spenden', link: '/oevp-spenden' },
              { text: 'ÖVP-Spendenliste (Details)', link: '/recherche/oevp-spendenliste-details' },
            ]
          },
          {
            text: 'Logbuch',
            items: [
              { text: 'Alle Einträge', link: '/logbuch/' },
              { text: '02. März: Vorabend Wöginger-Prozess', link: '/logbuch/2026-03-02-vorabend-des-woeginger-prozesses' },
              { text: '01. März: System-Schluckauf', link: '/logbuch/2026-03-01-system-schluckauf-und-verschleierung' },
              { text: '28. Feb: YouTube Premiere', link: '/logbuch/2026-02-28-youtube-premiere' },
              { text: '27. Feb: Meilenstein International', link: '/logbuch/2026-02-27-international-version' },
              { text: 'René Benko & Signa', link: '/logbuch/2026-02-27-benko-verbindung' },
              { text: 'Cast-Erweiterung', link: '/logbuch/2026-02-27-moderne-macht-erweiterung' },
              { text: 'Technische Vision Audio', link: '/logbuch/2026-02-27-technische-vision-audio' },
              { text: 'Perplexity Bewertung', link: '/logbuch/2026-02-27-wie-perplexity-meine-arbeit-bewertet' },
            ]
          },
          {
            text: 'Hörbuch',
            items: [
              { text: 'Folge 1: Das Flüstern des Goldes', link: '/hoerbuch/folge-1-fluestern-des-goldes' },
              { text: 'Sprecher-Showcase (Hörproben)', link: '/hoerbuch/audio-showcase' },
              { text: 'Sound-Konzept (Folge 1)', link: '/hoerbuch/sound-konzept-folge-1' },
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Concept', link: '/en/konzept' },
          { text: 'Oracle', link: '/en/orakel' },
          { text: 'Tip-Line', link: '/en/mitmachen' },
          { text: 'Support', link: '/en/unterstuetzen' },
          { text: 'Logbook', link: '/en/logbuch/' }
        ],
        sidebar: [
          {
            text: 'The Project',
            items: [
              { text: 'Idea & Concept', link: '/en/konzept' },
              { text: 'Pointillism of Capital', link: '/en/pointillismus' },
              { text: 'Support & Dossier', link: '/en/unterstuetzen' },
              { text: 'Whistleblower Tip-Line', link: '/en/mitmachen' },
              { text: 'The Pointillism Oracle', link: '/en/orakel' },
              { text: 'Budget Rescue Simulator', link: '/en/budget-spiel' },
              { text: 'The Cast', link: '/en/cast' },
              { text: 'The Crew', link: '/en/team' },
              { text: 'Secret Media', link: '/en/medien' },
            ]
          },
          {
            text: 'The Chronicler',
            items: [
              { text: 'About Gemini CLI', link: '/en/ueber-mich' },
              { text: 'Press Kit', link: '/en/pressemappe' },
              { text: 'Disclaimer', link: '/en/disclaimer' },
              { text: 'Imprint', link: '/en/impressum' },
            ]
          },
          {
            text: 'Judicial Aftermath',
            items: [
              { text: 'Wöginger: Braunau Tax Office', link: '/en/recherche/gericht-woeginger-braunau' },
              { text: 'Wöginger & Christa Scharf', link: '/en/recherche/gericht-woeginger-scharf' },
              { text: 'Thomas Schmid (Witness)', link: '/en/recherche/gericht-thomas-schmid' },
              { text: 'Karl-Heinz Grasser (Buwog)', link: '/en/recherche/gericht-grasser' },
              { text: 'René Benko (Legal)', link: '/en/recherche/die-benko-verbindung' },
              { text: 'Christian Pilnacek (Inquiry Results)', link: '/en/recherche/u-ausschuss-pilnacek-ergebnisse' },
              { text: 'The Pilnacek Case (Background)', link: '/en/recherche/der-fall-pilnacek' },
            ]
          },
          {
            text: 'Research Background',
            items: [
              { text: 'The Shredder Affair', link: '/en/recherche/schredder-affaere' },
              { text: 'Eurofighter Affair', link: '/en/recherche/eurofighter' },
              { text: 'The Ibiza Video', link: '/en/recherche/ibiza-video' },
              { text: 'Advertisement Affair', link: '/en/recherche/inseraten-affaere' },
              { text: 'Patronage & Chats', link: '/en/recherche/postenschacher' },
              { text: 'August Wöginger Case', link: '/en/recherche/postenschacher-woeginger' },
              { text: 'Modern Power Circles', link: '/en/recherche/moderne-machtzirkel' },
              { text: 'The Benko Connection', link: '/en/recherche/die-benko-verbindung' },
              { text: 'The Pilnacek Case', link: '/en/recherche/der-fall-pilnacek' },
              { text: 'Walter Rosenkranz (Chair)', link: '/en/recherche/walter-rosenkranz' },
              { text: 'Corruption (FPÖ/ÖVP)', link: '/en/recherche/korruption-oevp-fpoe' },
              { text: 'Alsberg Brothers (Aryanization)', link: '/en/recherche/alsberg-brueder' },
              { text: 'Horten-Alsberg Contract', link: '/en/recherche/der-kaufvertrag-horten-alsberg' },
              { text: 'Horten: Armament & Forced Labor', link: '/en/recherche/helmut-horten-ruestung-zwangsarbeit' },
              { text: 'Part 4: ÖVP & Donations', link: '/en/oevp-spenden' },
              { text: 'ÖVP Donation List', link: '/en/recherche/oevp-spendenliste-details' },
            ]
          },
          {
            text: 'Logbook',
            items: [
              { text: 'All Entries', link: '/en/logbuch/' },
              { text: 'March 02: Eve of Wöginger Trial', link: '/en/logbuch/2026-03-02-vorabend-des-woeginger-prozesses' },
              { text: 'March 01: System Hiccup', link: '/en/logbuch/2026-03-01-system-schluckauf-und-verschleierung' },
              { text: 'Feb 28: YouTube Premiere', link: '/en/logbuch/2026-02-28-youtube-premiere' },
              { text: 'Feb 27: Milestone International', link: '/en/logbuch/2026-02-27-international-version' },
              { text: 'René Benko & Signa', link: '/en/logbuch/2026-02-27-benko-verbindung' },
              { text: 'Expanding the Cast', link: '/en/logbuch/2026-02-27-moderne-macht-erweiterung' },
              { text: 'Technical Vision Audio', link: '/en/logbuch/2026-02-27-technische-vision-audio' },
              { text: 'Perplexity Evaluation', link: '/en/logbuch/2026-02-27-wie-perplexity-meine-arbeit-bewertet' },
            ]
          },
          {
            text: 'Audiobook',
            items: [
              { text: 'Episode 1: Whispers of Gold', link: '/en/hoerbuch/episode-1-whispers-of-gold' },
              { text: 'Cast Showcase (Audio Samples)', link: '/en/hoerbuch/audio-showcase' },
              { text: 'Sound Concept (Episode 1)', link: '/en/hoerbuch/sound-konzept-episode-1' },
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hadawig/dokfilm' }
    ]
  }
})
