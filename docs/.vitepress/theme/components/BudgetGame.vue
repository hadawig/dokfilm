<template>
  <div class="budget-game-container">
    <div class="game-header">
      <h2>🇦🇹 BUDGET-RETTUNGS-SIMULATOR v1.0</h2>
      <p>Ziel: Senken Sie das Defizit unter die 3% Maastricht-Grenze!</p>
    </div>

    <div class="stats-bar">
      <div class="stat">
        <label>AKTUELLER DEFIZIT-STAND:</label>
        <span :class="['value', deficitColor]">{{ currentDeficit.toFixed(1) }}%</span>
      </div>
      <div class="stat">
        <label>MAASTRICHT-LIMIT:</label>
        <span class="value safe">3.0%</span>
      </div>
    </div>

    <div class="sliders">
      <div v-for="(val, key) in budget" :key="key" class="slider-group">
        <div class="label-row">
          <span class="area-name">{{ formatKey(key) }}</span>
          <span class="area-val">{{ val }} Mrd. €</span>
        </div>
        <input 
          type="range" 
          v-model.number="budget[key]" 
          :min="limits[key].min" 
          :max="limits[key].max" 
          step="0.1"
          @input="calculate"
        />
      </div>
    </div>

    <div class="actions">
      <button @click="attemptFix" :disabled="gameOver" class="fix-btn">BUDGET SANIEREN</button>
      <button @click="reset" class="reset-btn">NEUSTART</button>
    </div>

    <div v-if="message" class="message-box" :class="messageType">
      <p class="speaker">MELDUNG VOM FINANZMINISTERIUM:</p>
      <p class="text">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const budget = reactive({
  bildung: 15.0,
  gesundheit: 22.0,
  soziales: 35.0,
  kultur_klavier: 2.5,
  parteienfoerderung: 1.8,
  geheim_tranchen: 0.9
})

const limits = {
  bildung: { min: 10, max: 20 },
  gesundheit: { min: 18, max: 25 },
  soziales: { min: 30, max: 40 },
  kultur_klavier: { min: 0.5, max: 5 },
  parteienfoerderung: { min: 1.5, max: 10 },
  geheim_tranchen: { min: 0.1, max: 5 }
}

const currentDeficit = ref(4.7)
const gameOver = ref(false)
const message = ref('')
const messageType = ref('')

const deficitColor = computed(() => {
  if (currentDeficit.value > 4) return 'danger'
  if (currentDeficit.value > 3) return 'warning'
  return 'safe'
})

const formatKey = (key) => {
  return key.replace('_', ' ').toUpperCase()
}

const calculate = () => {
  // Eine pseudo-logische Berechnung des Defizits
  const total = Object.values(budget).reduce((a, b) => a + b, 0)
  currentDeficit.value = (total / 18) - 0.5 // Willkürliche Formel
}

const attemptFix = () => {
  if (currentDeficit.value <= 3.0) {
    message.value = "Hervorragend! Sie haben die Maastricht-Grenze erreicht. Aber warten Sie... Magnus Brunner hat gerade eine 'Inflations-Korrektur' durchgeführt. +1.8% Defizit. Wir sind wieder bei 4.8%. Die Ästhetik muss gewahrt bleiben!"
    messageType.value = 'error'
    currentDeficit.value = 4.8
  } else {
    message.value = "Zu wenig gespart! Wolfgang Sobotka hat soeben eine neue Orgel für das Parlament bestellt. Das Defizit steigt um weitere 0.2%."
    messageType.value = 'warning'
    currentDeficit.value += 0.2
  }
}

const reset = () => {
  Object.assign(budget, {
    bildung: 15.0,
    gesundheit: 22.0,
    soziales: 35.0,
    kultur_klavier: 2.5,
    parteienfoerderung: 1.8,
    geheim_tranchen: 0.9
  })
  currentDeficit.value = 4.7
  message.value = ''
  gameOver.value = false
}
</script>

<style scoped>
.budget-game-container {
  background: #1a1a1a;
  border: 2px solid #d4af37;
  border-radius: 12px;
  padding: 25px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 600px;
  margin: 2rem auto;
}

h2 { color: #d4af37; margin-bottom: 10px; font-size: 1.2rem; }

.stats-bar {
  display: flex;
  justify-content: space-around;
  background: #000;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.stat label { display: block; font-size: 0.7rem; color: #888; }
.stat .value { font-size: 1.5rem; font-weight: bold; font-family: monospace; }

.danger { color: #ff4444; }
.warning { color: #ffbb33; }
.safe { color: #00C851; }

.slider-group { margin-bottom: 15px; }
.label-row { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 5px; }
.area-name { color: #d4af37; font-weight: bold; }

input[type=range] {
  width: 100%;
  accent-color: #d4af37;
}

.actions { display: flex; gap: 10px; margin-top: 20px; }
button { flex: 1; padding: 12px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; transition: 0.3s; }

.fix-btn { background: #d4af37; color: black; }
.fix-btn:hover { background: #fff; }

.reset-btn { background: #333; color: white; }
.reset-btn:hover { background: #444; }

.message-box {
  margin-top: 25px;
  padding: 15px;
  border-left: 4px solid;
  background: #222;
  font-size: 0.9rem;
}

.speaker { font-weight: bold; font-size: 0.7rem; margin-bottom: 5px; }
.error { border-color: #ff4444; }
.warning { border-color: #ffbb33; }
</style>
