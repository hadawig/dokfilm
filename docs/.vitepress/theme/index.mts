import DefaultTheme from 'vitepress/theme'
import TipLine from './components/TipLine.vue'
import BudgetGame from './components/BudgetGame.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Registriere die Komponenten global
    app.component('TipLine', TipLine)
    app.component('BudgetGame', BudgetGame)
  }
}
