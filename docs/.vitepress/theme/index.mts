import DefaultTheme from 'vitepress/theme'
import TipLine from './components/TipLine.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Registriere die Komponente global
    app.component('TipLine', TipLine)
  }
}
