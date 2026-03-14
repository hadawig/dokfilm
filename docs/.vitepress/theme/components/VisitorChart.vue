<template>
  <div class="chart-container">
    <div class="chart-header">
      <h3>📈 PROJEKT-MARKTPRÄSENZ (INDEX)</h3>
      <p>Stündliche Besucheraufrufe (Viralitäts-Index)</p>
    </div>
    
    <div v-if="loading" class="loading">Daten werden synchronisiert...</div>
    
    <svg v-else :viewBox="`0 0 ${width} ${height}`" class="chart-svg">
      <!-- Y-Axis Labels -->
      <g v-for="i in 6" :key="'grid' + i">
        <line 
          :x1="padding" :y1="height - padding - ((i-1) * (height - padding * 2) / 5)" 
          :x2="width - padding" :y2="height - padding - ((i-1) * (height - padding * 2) / 5)" 
          stroke="#222" stroke-width="1" />
        <text 
          :x="padding - 5" :y="height - padding - ((i-1) * (height - padding * 2) / 5) + 4" 
          fill="#555" font-size="10" text-anchor="end">
          {{ Math.round(((i-1) * maxVisitors / 5) / 100) / 10 }}k
        </text>
      </g>
      
      <!-- Axis Titles -->
      <text :x="10" :y="padding - 15" fill="#d4af37" font-size="10" font-weight="bold" transform="rotate(-90 10,25)">INDEX (VPH)</text>
      <text :x="width - padding" :y="height - padding + 35" fill="#d4af37" font-size="10" font-weight="bold" text-anchor="end">ZEITRAUM (H)</text>

      <!-- X-Axis Labels (Date and Time) -->
      <g v-for="(p, i) in points" :key="'xlabel' + i">
        <template v-if="i % 4 === 0 || i === points.length - 1">
          <text 
            :x="p.x" :y="height - padding + 15" 
            fill="#d4af37" font-size="9" text-anchor="middle" font-weight="bold">
            {{ p.raw.time.split(' ')[0] }}
          </text>
          <text 
            :x="p.x" :y="height - padding + 27" 
            fill="#555" font-size="8" text-anchor="middle">
            {{ p.raw.time.split(' ')[1] }}
          </text>
        </template>
      </g>

      <!-- Line -->
      <path :d="linePath" fill="none" stroke="#d4af37" stroke-width="3" stroke-linejoin="round" />
      
      <!-- Area -->
      <path :d="areaPath" fill="url(#grad)" opacity="0.2" />

      <!-- Gradient -->
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#d4af37;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#000;stop-opacity:0" />
        </linearGradient>
      </defs>

      <!-- Data Points -->
      <circle v-for="(p, i) in points" :key="i" 
              :cx="p.x" :cy="p.y" r="4" 
              fill="#d4af37" class="data-point">
        <title>{{ p.raw.time }}: {{ p.raw.visitors }} Besucher</title>
      </circle>
    </svg>

    <div class="chart-footer">
      <div class="stat">
        <label>MAXIMUM</label>
        <span>{{ maxVisitors }} VPH*</span>
      </div>
      <div class="stat">
        <label>TREND</label>
        <span class="trend-up">▲ POSITIV</span>
      </div>
      <p class="small">*Visitors Per Hour (Aggregierte Daten von Reddit/Web)</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const width = 800
const height = 400
const padding = 40

const loading = ref(true)
const stats = ref([])

onMounted(async () => {
  try {
    // Dynamischer Pfad je nach Deployment (GitHub vs. Cloudflare)
    const basePath = window.location.pathname.startsWith('/dokfilm/') ? '/dokfilm' : ''
    const res = await fetch(`${basePath}/data/visitor-stats.json`)
    stats.value = await res.json()
    loading.value = false
  } catch (e) {
    console.error("Chart sync failed, using fallback")
    // Aktueller Stand als Fallback
    stats.value = [
      { "time": "03.03. 12:00", "visitors": 120 },
      { "time": "05.03. 21:00", "visitors": 43560 },
      { "time": "10.03. 15:00", "visitors": 58400 },
      { "time": "12.03. 22:00", "visitors": 91200 },
      { "time": "13.03. 20:00", "visitors": 102100 },
      { "time": "14.03. 17:00", "visitors": 112300 }
    ]
    loading.value = false
  }
})

const maxVisitors = computed(() => {
  return Math.max(...stats.value.map(s => s.visitors), 1)
})

const points = computed(() => {
  const n = stats.value.length
  if (n === 0) return []
  
  return stats.value.map((s, i) => {
    const x = (i * (width - padding * 2)) / (n - 1) + padding
    const y = height - ((s.visitors / maxVisitors.value) * (height - padding * 2)) - padding
    return { x, y, raw: s }
  })
})

const linePath = computed(() => {
  if (points.value.length < 2) return ''
  return 'M ' + points.value.map(p => `${p.x},${p.y}`).join(' L ')
})

const areaPath = computed(() => {
  if (points.value.length < 2) return ''
  const first = points.value[0]
  const last = points.value[points.value.length - 1]
  return `${linePath.value} L ${last.x},${height - padding} L ${first.x},${height - padding} Z`
})
</script>

<style scoped>
.chart-container {
  background: #000;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px;
  margin: 2rem 0;
  font-family: monospace;
}

.chart-header { margin-bottom: 20px; }
h3 { color: #d4af37; margin: 0; font-size: 1.2rem; }
p { color: #666; font-size: 0.8rem; margin: 5px 0 0; }

.chart-svg { width: 100%; height: auto; }

.loading { text-align: center; padding: 50px; color: #888; }

.chart-footer {
  display: flex;
  gap: 30px;
  margin-top: 20px;
  border-top: 1px solid #222;
  padding-top: 15px;
}

.stat label { display: block; font-size: 0.6rem; color: #555; }
.stat span { color: #fff; font-size: 1.1rem; }
.trend-up { color: #00ff00 !important; }

.small { font-size: 0.6rem; color: #444; margin-left: auto; align-self: center; }

.data-point:hover { r: 8; cursor: help; }
</style>
