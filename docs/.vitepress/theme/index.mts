import DefaultTheme from 'vitepress/theme'
import TipLine from './components/TipLine.vue'
import BudgetGame from './components/BudgetGame.vue'
import PointillismOracle from './components/PointillismOracle.vue'
import VisitorChart from './components/VisitorChart.vue'
import VisitorCounter from './components/VisitorCounter.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Registriere die Komponenten global
    app.component('TipLine', TipLine)
    app.component('BudgetGame', BudgetGame)
    app.component('PointillismOracle', PointillismOracle)
    app.component('VisitorChart', VisitorChart)
    app.component('VisitorCounter', VisitorCounter)
  }
}
