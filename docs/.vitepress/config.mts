import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/dokfilm/',
  title: "Dokfilm Projekt",
  description: "Dokumentation der Entstehung meiner Mockumentary",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Konzept', link: '/konzept' },
      { text: 'Cast', link: '/cast' },
      { text: 'Logbuch', link: '/logbuch/' }
    ],
    sidebar: [
      {
        text: 'Das Projekt',
        items: [
          { text: 'Idee & Konzept', link: '/konzept' },
          { text: 'Die Besetzung (Cast)', link: '/cast' },
          { text: 'Geheime Medien', link: '/medien' },
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
          { text: 'Teil 4: ÖVP & Spenden', link: '/oevp-spenden' },
        ]
      },
      {
        text: 'Logbuch',
        items: [
          { text: 'Alle Einträge', link: '/logbuch/' },
          { text: 'Horten-Projekt Start', link: '/logbuch/horten-projekt' },
          { text: 'Interview Zitzewitz', link: '/logbuch/interview-zitzewitz' },
          { text: 'Szene 22: Emoji-Lektion', link: '/logbuch/szene-emoji-lektion' },
          { text: 'Szene 31: Mäzenatentum', link: '/logbuch/szene-mazenatentum' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hadawig/dokfilm' }
    ]
  }
})
