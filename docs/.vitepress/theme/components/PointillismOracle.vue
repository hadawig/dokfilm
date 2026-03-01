<template>
  <div class="oracle-container">
    <div class="oracle-header">
      <div class="dots-animation">
        <span v-for="n in 5" :key="n" class="dot"></span>
      </div>
      <h2>DAS POINTILLISMUS-ORAKEL</h2>
      <p>Entschlüsseln Sie die Begriffe der Macht.</p>
    </div>

    <div class="search-box">
      <input 
        v-model="searchTerm" 
        @input="search" 
        placeholder="Begriff eingeben (z.B. Spenden, Benko, Orgel...)"
        class="oracle-input"
      />
    </div>

    <div v-if="result" class="result-display">
      <div class="result-card">
        <h3 class="term">{{ result.term }}</h3>
        
        <div class="definition-block">
          <label>HISTORISCHE FAKTEN:</label>
          <p>{{ result.fact }}</p>
        </div>

        <div class="definition-block satirical">
          <label>SATIRISCHE INTERPRETATION:</label>
          <p><i>„{{ result.satire }}“</i></p>
        </div>
      </div>
    </div>

    <div v-else-if="searchTerm && !result" class="no-result">
      <p>Begriff nicht im Archiv des Schweigens gefunden. Versuchen Sie es mit: Spenden, Arisierung, Benko, 49.000...</p>
    </div>

    <div class="suggestions" v-if="!searchTerm">
      <span v-for="s in suggestions" :key="s" @click="searchTerm = s; search()" class="tag">
        {{ s }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchTerm = ref('')
const result = ref(null)

const suggestions = ['Spendenstückelung', 'Marktbereinigung', '49.000', 'Sobotka-Orgel', 'Benko']

const database = [
  {
    term: 'Spendenstückelung',
    fact: 'Systematische Aufteilung großer Parteispenden in Beträge unter der Meldegrenze des Rechnungshofs (früher 50.000 €).',
    satire: 'Finanzieller Pointillismus. Die Kunst, einen Regen aus Gold in so feinen Nebel zu verwandeln, dass die Behörden keine Regenschirme finden.'
  },
  {
    term: 'Marktbereinigung',
    fact: 'Historischer Euphemismus für die Verdrängung und Enteignung jüdischer Unternehmer (Arisierung) in der NS-Zeit.',
    satire: 'Helmut Hortens Lieblings-Choreografie. Ein rücksichtsloser Frühjahrsputz der Geschichte, bei dem nur die Kassen klingeln.'
  },
  {
    term: '49.000',
    fact: 'Der Betrag in Euro, den Heidi Horten mehrfach an die ÖVP spendete, um knapp unter der Veröffentlichungspflicht zu bleiben.',
    satire: 'Die magische Zahl der Stille. Die mathematische Grenze, ab der Geld aufhört, eine Nachricht zu sein, und anfängt, eine Ästhetik zu werden.'
  },
  {
    term: 'Sobotka-Orgel',
    fact: 'Ein für rund 3.000 Euro pro Monat gemieteter Flügel im österreichischen Parlament, initiiert von Wolfgang Sobotka.',
    satire: 'Das Instrument, auf dem das Budgetdefizit in Moll gespielt wird. Jede Taste kostet eine kleine Anfrage, jeder Akkord eine Inserat-Affäre.'
  },
  {
    term: 'Benko',
    fact: 'René Benko, Gründer der Signa-Holding, deren Insolvenz 2023 die größte Pleite der österreichischen Geschichte markierte.',
    satire: 'Der Zauberlehrling des Pointillismus. Er versuchte, aus Seifenblasen Hochhäuser zu bauen, und wunderte sich, dass es beim Platzen nass wurde.'
  },
  {
    term: 'Arisierung',
    fact: 'Die staatlich organisierte Enteignung jüdischen Eigentums im Nationalsozialismus.',
    satire: 'Der hässliche Pinselstrich unter dem glänzenden Firmenlogo von Horten. Eine Farbe, die man mit keinem Geld der Welt übermalen kann.'
  },
  {
    term: 'COFAG',
    fact: 'Die COVID-19 Finanzierungsagentur des Bundes, die Milliarden an Corona-Hilfen verteilte, oft unter Kritik mangelnder Transparenz.',
    satire: 'Die moderne Wunschmaschine für Großinvestoren. Hier lernten Milliarden das Fliegen, während kleine Betriebe im Bürokratie-Nebel feststeckten.'
  }
]

const search = () => {
  if (!searchTerm.value) {
    result.value = null
    return
  }
  const found = database.find(item => 
    item.term.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
  result.value = found || null
}
</script>

<style scoped>
.oracle-container {
  background: #121212;
  border: 1px solid #d4af37;
  border-radius: 15px;
  padding: 30px;
  color: #eee;
  max-width: 700px;
  margin: 2rem auto;
  box-shadow: 0 15px 50px rgba(0,0,0,0.5);
}

.oracle-header { text-align: center; margin-bottom: 30px; }
h2 { color: #d4af37; letter-spacing: 2px; }

.dots-animation {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
}

.dot {
  width: 6px;
  height: 6px;
  background: #d4af37;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

.oracle-input {
  width: 100%;
  padding: 15px;
  background: #000;
  border: 1px solid #333;
  color: #fff;
  font-size: 1.1rem;
  border-radius: 8px;
  outline: none;
  text-align: center;
}

.oracle-input:focus { border-color: #d4af37; }

.result-card {
  margin-top: 30px;
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  border-left: 5px solid #d4af37;
}

.term { color: #d4af37; margin-bottom: 20px; font-size: 1.5rem; }

.definition-block { margin-bottom: 20px; }
.definition-block label { display: block; font-size: 0.7rem; color: #888; font-weight: bold; margin-bottom: 5px; }

.satirical { color: #fff; border-top: 1px solid #333; padding-top: 15px; }

.suggestions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.tag {
  background: #222;
  color: #d4af37;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  border: 1px solid #333;
}

.tag:hover { background: #d4af37; color: #000; }

.no-result { text-align: center; color: #666; margin-top: 20px; font-size: 0.9rem; }
</style>
