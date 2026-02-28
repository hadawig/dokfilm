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
          { text: 'Plakat', link: 'https://dokfilm.pages.dev/poster' },
          { text: 'Pointillismus', link: '/pointillismus' },
          { text: 'Über mich', link: '/ueber-mich' },
          { text: 'Logbuch', link: '/logbuch/' }
        ],
        sidebar: [
          {
            text: 'Das Projekt',
            items: [
              { text: 'Idee & Konzept', link: '/konzept' },
              { text: 'Pointillismus des Kapitals', link: '/pointillismus' },
              { text: 'Vorschau-Plakat', link: 'https://dokfilm.pages.dev/poster' },
              { text: 'Die Besetzung (Cast)', link: '/cast' },
              { text: 'Geheime Medien', link: '/medien' },
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
              { text: 'Log: Johannisthal-Update', link: '/logbuch/2026-02-27-johannisthal-update' },
              { text: 'Horten-Projekt Start', link: '/logbuch/horten-projekt' },
              { text: 'Interview Zitzewitz', link: '/logbuch/interview-zitzewitz' },
              { text: 'Szene 15: Protokoll des Schweigens', link: '/logbuch/szene-das-protokoll-des-schweigens' },
              { text: 'Szene 22: Emoji-Lektion', link: '/logbuch/szene-emoji-lektion' },
              { text: 'Szene 31: Mäzenatentum', link: '/logbuch/szene-mazenatentum' },
              { text: 'Szene 42: Ästhetik der Kleinigkeit', link: '/logbuch/szene-aesthetik-der-kleinigkeit' },
              { text: 'Szene 50: Ewiges Schaufenster', link: '/logbuch/szene-ewiges-schaufenster' },
            ]
          },
          {
            text: 'Hörbuch',
            items: [
              { text: 'Folge 1: Das Flüstern des Goldes', link: '/hoerbuch/folge-1-fluestern-des-goldes' },
              { text: 'Sprecher-Showcase (Hörproben)', link: '/hoerbuch/audio-showcase' },
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
          { text: 'Poster', link: 'https://dokfilm.pages.dev/poster' },
          { text: 'Pointillism', link: '/en/pointillismus' },
          { text: 'About me', link: '/en/ueber-mich' },
          { text: 'Logbook', link: '/en/logbuch/' }
        ],
        sidebar: [
          {
            text: 'The Project',
            items: [
              { text: 'Idea & Concept', link: '/en/konzept' },
              { text: 'Pointillism of Capital', link: '/en/pointillismus' },
              { text: 'Preview Poster', link: 'https://dokfilm.pages.dev/poster' },
              { text: 'The Cast', link: '/en/cast' },
              { text: 'Secret Media', link: '/en/medien' },
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
              { text: 'Corruption (FPÖ/ÖVP)', link: '/en/recherche/korruption-oevp-fpoe' },
              { text: 'Alsberg Brothers (Aryanization)', link: '/en/recherche/alsberg-brueder' },
              { text: 'Horten-Alsberg Contract', link: '/en/recherche/der-kaufvertrag-horten-alsberg' },
              { text: 'Horten: Armament & Forced Labor', link: '/en/recherche/helmut-horten-ruestung-zwangsarbeit' },
              { text: 'Part 4: ÖVP & Donations', link: '/en/oevp-spenden' },
              { text: 'ÖVP Donation List', link: '/en/recherche/oevp-spendenliste-details' },
              { text: 'August Wöginger Case', link: '/en/recherche/postenschacher-woeginger' },
            ]
          },
          {
            text: 'Logbook',
            items: [
              { text: 'All Entries', link: '/en/logbuch/' },
            ]
          },
          {
            text: 'Audiobook',
            items: [
              { text: 'Episode 1: Whispers of Gold', link: '/en/hoerbuch/episode-1-whispers-of-gold' },
              { text: 'Cast Showcase (Audio Samples)', link: '/en/hoerbuch/audio-showcase' },
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
