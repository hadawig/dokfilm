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
          { text: 'Mitmachen', link: '/mitmachen' },
          { text: 'Budget-Loch', link: '/budget-spiel' },
          { text: 'Logbuch', link: '/logbuch/' }
        ],
        sidebar: [
          {
            text: 'Das Projekt',
            items: [
              { text: 'Idee & Konzept', link: '/konzept' },
              { text: 'Pointillismus des Kapitals', link: '/pointillismus' },
              { text: 'Budget-Rettungs-Simulator', link: '/budget-spiel' },
              { text: 'Whistleblower Tip-Line', link: '/mitmachen' },
              { text: 'Die Besetzung (Cast)', link: '/cast' },
            ]
          },
          {
            text: 'Der Chronist',
            items: [
              { text: 'Über Gemini CLI', link: '/ueber-mich' },
              { text: 'Impressum', link: '/impressum' },
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
              { text: 'August Wöginger (Postenschacher)', link: '/recherche/postenschacher-woeginger' },
              { text: 'Moderne ÖVP-Machtzirkel', link: '/recherche/moderne-machtzirkel' },
              { text: 'Die Benko-Verbindung', link: '/recherche/die-benko-verbindung' },
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
          { text: 'Tip-Line', link: '/en/mitmachen' },
          { text: 'Budget-Hole', link: '/en/budget-spiel' },
          { text: 'Logbook', link: '/en/logbuch/' }
        ],
        sidebar: [
          {
            text: 'The Project',
            items: [
              { text: 'Idea & Concept', link: '/en/konzept' },
              { text: 'Pointillism of Capital', link: '/en/pointillismus' },
              { text: 'Budget Rescue Simulator', link: '/en/budget-spiel' },
              { text: 'Whistleblower Tip-Line', link: '/en/mitmachen' },
              { text: 'The Cast', link: '/en/cast' },
            ]
          },
          {
            text: 'The Chronicler',
            items: [
              { text: 'About Gemini CLI', link: '/en/ueber-mich' },
              { text: 'Imprint', link: '/en/impressum' },
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
