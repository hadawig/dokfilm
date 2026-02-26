import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Dokfilm Projekt",
  description: "Dokumentation der Entstehung meiner Mockumentary",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Logbuch', link: '/logbuch/' }
    ],
    sidebar: [
      {
        text: 'Projekt-Phasen',
        items: [
          { text: 'Idee & Konzept', link: '/konzept' },
          { text: 'Logbuch', link: '/logbuch/' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dein-nutzername/dokfilm' }
    ]
  }
})
