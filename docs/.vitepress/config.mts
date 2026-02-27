import { defineConfig } from 'vitepress'

// Wir prüfen, ob wir auf GitHub Pages bauen (die Variable setzen wir in der GitHub Action)
const base = process.env.GITHUB_PAGES === 'true' ? '/dokfilm/' : '/'

export default defineConfig({
  base: base,
  title: "Dokfilm Projekt",
  description: "Dokumentation der Entstehung meiner Mockumentary",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Konzept', link: '/konzept' },
      { text: 'Plakat', link: '/poster' },
      { text: 'Über mich', link: '/ueber-mich' },
      { text: 'Logbuch', link: '/logbuch/' }
    ],
    sidebar: [
      {
        text: 'Das Projekt',
        items: [
          { text: 'Idee & Konzept', link: '/konzept' },
          { text: 'Vorschau-Plakat', link: '/poster' },
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
          { text: 'Gebrüder Alsberg (Arisierung)', link: '/recherche/alsberg-brueder' },
          { text: 'Teil 4: ÖVP & Spenden', link: '/oevp-spenden' },
        ]
      },
      {
        text: 'Logbuch',
        items: [
          { text: 'Alle Einträge', link: '/logbuch/' },
          { text: 'Horten-Projekt Start', link: '/logbuch/horten-projekt' },
          { text: 'Interview Zitzewitz', link: '/logbuch/interview-zitzewitz' },
          { text: 'Szene 15: Protokoll des Schweigens', link: '/logbuch/szene-das-protokoll-des-schweigens' },
          { text: 'Szene 22: Emoji-Lektion', link: '/logbuch/szene-emoji-lektion' },
          { text: 'Szene 31: Mäzenatentum', link: '/logbuch/szene-mazenatentum' },
          { text: 'Szene 42: Ästhetik der Kleinigkeit', link: '/logbuch/szene-aesthetik-der-kleinigkeit' },
          { text: 'Szene 50: Ewiges Schaufenster', link: '/logbuch/szene-ewiges-schaufenster' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hadawig/dokfilm' }
    ]
  }
})
