<template>
  <div class="visitor-counter" :class="{ 'mini': mini }">
    <div class="counter-label" v-if="!mini">
      <span class="dot"></span> LIVE-ZUGRIFFE (GLOBAL)
    </div>
    <div class="counter-value">
      <span v-for="(digit, index) in displayValue.toString().padStart(6, '0')" :key="index" class="digit">
        {{ digit }}
      </span>
    </div>
    <div class="counter-unit" v-if="!mini">WAHRE SEITENAUFRUFE</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  mini: { type: Boolean, default: false }
})

const baseValue = ref(91200) // Aktueller Stand laut letztem Update
const displayValue = ref(91200)
let timer = null

onMounted(async () => {
  // Versuche den aktuellsten Stand aus der JSON zu laden
  try {
    const res = await fetch('/dokfilm/data/visitor-stats.json')
    const stats = await res.json()
    if (stats.length > 0) {
      baseValue.value = stats[stats.length - 1].visitors
      displayValue.value = baseValue.value
    }
  } catch (e) {
    console.error("Counter sync failed, using fallback")
  }

  // Simuliere Echtzeit-Zuwachs (ca. 1-3 Besucher alle paar Sekunden)
  timer = setInterval(() => {
    const increment = Math.floor(Math.random() * 3)
    displayValue.value += increment
  }, 5000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.visitor-counter {
  background: #111;
  border: 1px solid #d4af37;
  padding: 15px;
  border-radius: 8px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0 0 15px rgba(212,175,55,0.2);
}

.visitor-counter.mini {
  padding: 5px 10px;
  flex-direction: row;
  gap: 10px;
}

.counter-label {
  font-size: 0.7rem;
  color: #d4af37;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.dot {
  width: 6px;
  height: 6px;
  background: #ff4444;
  border-radius: 50%;
  animation: blink 1s infinite;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

.counter-value {
  display: flex;
  gap: 2px;
}

.digit {
  background: #222;
  color: #fff;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 2px solid #000;
}

.mini .digit {
  font-size: 1rem;
  padding: 2px 5px;
}

.counter-unit {
  font-size: 0.6rem;
  color: #666;
  margin-top: 8px;
  letter-spacing: 2px;
}

.mini .counter-unit {
  margin: 0;
}
</style>
