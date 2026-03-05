<template>
  <div class="oracle-container">
    <div class="oracle-header">
      <div class="dots-animation">
        <span v-for="n in 5" :key="n" class="dot"></span>
      </div>
      <h2>{{ ui.title }}</h2>
      <p>{{ ui.subtitle }}</p>
    </div>

    <div class="search-box">
      <input 
        v-model="searchTerm" 
        @input="search" 
        :placeholder="ui.placeholder"
        class="oracle-input"
      />
    </div>

    <div v-if="result" class="result-display">
      <div class="result-card">
        <h3 class="term">{{ result.term }}</h3>
        
        <div class="definition-block">
          <label>{{ ui.labelFact }}:</label>
          <p>{{ result.fact }}</p>
        </div>

        <div class="definition-block satirical">
          <label>{{ ui.labelSatire }}:</label>
          <p><i>„{{ result.satire }}“</i></p>
        </div>
      </div>
    </div>

    <div v-else-if="searchTerm && !result" class="no-result">
      <p>{{ ui.noResult }}</p>
    </div>

    <div class="suggestions" v-if="!searchTerm">
      <span v-for="s in suggestions" :key="s" @click="searchTerm = s; search()" class="tag">
        {{ s }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const searchTerm = ref('')
const result = ref(null)

const isEn = computed(() => lang.value.startsWith('en'))

const ui = computed(() => ({
  title: isEn.value ? 'THE POINTILLISM ORACLE' : 'DAS POINTILLISMUS-ORAKEL',
  subtitle: isEn.value ? 'Decode the terms of power.' : 'Entschlüsseln Sie die Begriffe der Macht.',
  placeholder: isEn.value ? 'Enter term (e.g. Donations, Benko, Organ...)' : 'Begriff eingeben (z.B. Spenden, Benko, Orgel...)',
  labelFact: isEn.value ? 'HISTORICAL FACTS' : 'HISTORISCHE FAKTEN',
  labelSatire: isEn.value ? 'SATIRICAL INTERPRETATION' : 'SATIRISCHE INTERPRETATION',
  noResult: isEn.value ? 'Term not found in the Archive of Silence. Try: Donations, Aryanization, Benko, 49,000...' : 'Begriff nicht im Archiv des Schweigens gefunden. Versuchen Sie es mit: Spenden, Arisierung, Benko, 49.000...',
}))

const suggestions = computed(() => isEn.value 
  ? ['Citizen Concerns', 'Hard Prose', 'Christa Scharf', '98 Points', 'Calculator', 'Instinct', '36 Points']
  : ['Bürgeranliegen', 'Harte Prosa', 'Christa Scharf', '98 Punkte', 'Taschenrechner', 'Gespür', '36 Punkte']
)

const database_de = [
  {
    term: 'Taschenrechner',
    fact: 'Aussage des ÖVP-Bürgermeisters im Wöginger-Prozess (05.03.2026): „Ein Finanzamt ist kein Taschenrechner.“',
    satire: 'Die offizielle mathematische Kapitulationserklärung. Wenn das Ergebnis nicht zur Parteifarbe passt, wird der Taschenrechner kurzerhand zum „Bürgeranliegen“ umdefiniert.'
  },
  {
    term: 'Gespür',
    fact: 'Von der Verteidigung im Prozess genutztes Kriterium („Gespür für die Leut’“), um die fachliche Unterlegenheit des Wunschkandidaten zu rechtfertigen.',
    satire: 'Die Geheimzutat im österreichischen Postenschacher-Gulasch. Ersetzt im Notfall 36 fehlende Hearing-Punkte und jede Form von objektiver Qualifikation.'
  },
  {
    term: '36 Punkte',
    fact: 'Die Differenz zwischen der Bestbewerteten (98 Punkte) und dem schließlich bestellten Kandidaten (62 Punkte) im Hearing Braunau.',
    satire: 'Der Marianengraben der österreichischen Bürokratie. Ein Abgrund, so tief, dass man darin ganze Landesregierungen und mehrere Säcke voll Parteibücher versenken kann.'
  },
  {
    term: 'Zitherspielerin',
    fact: 'Anspielung auf Christa Scharfs kulturelles Engagement im „Mamlinger Musiksommer“, im Prozess als Metapher für Präzision und Integrität genutzt.',
    satire: 'Das Symbol der unbestechlichen Melodie. Während die Politik in Dissonanzen schwelgt, spielt sie die Partitur des Rechtsstaats – bis die letzte Saite der Intervention reißt.'
  },
  {
    term: 'Bürgeranliegen',
    fact: 'Rechtfertigung politischer Interventionen bei Postenbesetzungen als legitime Vertretung regionaler Interessen.',
    satire: 'Der Zauberspruch, der einen Amtsmissbrauch in einen Akt der Nächstenliebe verwandelt. Wirkt am besten bei Thomas Schmid.'
  },
  {
    term: 'Harte Prosa',
    fact: 'Bezeichnung der Verteidigungslinie von August Wöginger im Prozess um den Finanzamtsposten Braunau.',
    satire: 'Ein literarisches Genre, in dem SMS-Verläufe zu heldenhaften Epen der Regionalpolitik umgedichtet werden. Prädikat: Besonders fiktiv.'
  },
  {
    term: 'Christa Scharf',
    fact: 'Finanzbeamtin, die trotz Bestreihung im Hearing übergangen wurde und erfolgreich gegen die Fehlbesetzung klagte.',
    satire: 'Die unbestechliche Variable im System. Ein Fehler in der Matrix des Postenschachers, der sich weigert, wegzudiskutieren zu sein.'
  },
  {
    term: '98 Punkte',
    fact: 'Die im Hearing erreichte Punktzahl von Christa Scharf im Vergleich zu den 62 Punkten des ÖVP-Bürgermeisters.',
    satire: 'Die Mathematik der Ungerechtigkeit. Hier wird bewiesen, dass in Österreich 62 größer sein kann als 98, wenn die Farbe stimmt.'
  },
  {
    term: 'Pointillismus des Geldes',
    fact: 'Kernmotiv der Mockumentary: Die Summe kleiner Gefälligkeiten und Spenden ergibt erst aus der Ferne das Bild eines Systems.',
    satire: 'Die Kunst, so viele kleine Dreckflecken zu machen, bis das Publikum glaubt, es handle sich um ein Meisterwerk der Stabilität.'
  },
  {
    term: 'Chef, bitte anschaun',
    fact: 'Wortlaut einer SMS von August Wöginger an Thomas Schmid bezüglich der Postenbesetzung in Braunau.',
    satire: 'Die fünf Wörter, die den Rechtsstaat in eine freundliche Empfehlungsecke verwandeln. Der Klassiker der österreichischen Kurznachrichten-Literatur.'
  },
  {
    term: 'Scharf-Urteil',
    fact: 'Entscheidung des Bundesverwaltungsgerichts, die feststellte, dass die Postenbesetzung in Braunau sachlich nicht nachvollziehbar war.',
    satire: 'Ein seltener Moment, in dem die Realität das Drehbuch der Politik korrigiert hat. Der Endgegner des Postenschachers.'
  },
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

const database_en = [
  {
    term: 'Calculator',
    fact: 'Statement by the ÖVP mayor in the Wöginger trial (05.03.2026): "A tax office is not a calculator."',
    satire: 'The official declaration of mathematical surrender. If the result doesn\'t match the party color, the calculator is simply redefined as a "constituent concern."'
  },
  {
    term: 'Instinct',
    fact: 'Criterion used by the defense in the trial ("instinct for the people") to justify the professional inferiority of the favored candidate.',
    satire: 'The secret ingredient in the Austrian patronage stew. Replaces 36 missing hearing points and any form of objective qualification in an emergency.'
  },
  {
    term: '36 Points',
    fact: 'The difference between the best-rated candidate (98 points) and the candidate finally appointed (62 points) in the Braunau hearing.',
    satire: 'The Mariana Trench of Austrian bureaucracy. An abyss so deep that entire state governments and several bags of party memberships can be sunk in it.'
  },
  {
    term: 'Zither Player',
    fact: 'Allusion to Christa Scharf\'s cultural engagement in the "Mamlinger Musiksommer," used in the trial as a metaphor for precision and integrity.',
    satire: 'The symbol of the incorruptible melody. While politics wallows in dissonance, she plays the score of the rule of law – until the last string of intervention breaks.'
  },
  {
    term: 'Citizen Concerns',
    fact: 'Justification for political interventions in appointments as legitimate representation of regional interests.',
    satire: 'The magic spell that transforms an abuse of office into an act of charity. Works best with Thomas Schmid.'
  },
  {
    term: 'Hard Prose',
    fact: 'Name of August Wöginger\'s line of defense in the trial regarding the Braunau tax office post.',
    satire: 'A literary genre in which SMS logs are rewritten into heroic epics of regional politics. Rating: Particularly fictional.'
  },
  {
    term: 'Christa Scharf',
    fact: 'Finance official who was bypassed in the hearing despite being the best-rated and successfully sued against the mis-appointment.',
    satire: 'The incorruptible variable in the system. A bug in the matrix of patronage that refuses to be talked away.'
  },
  {
    term: '98 Points',
    fact: 'The score reached by Christa Scharf in the hearing compared to the 62 points of the ÖVP mayor.',
    satire: 'The mathematics of injustice. Here it is proven that in Austria 62 can be greater than 98 if the color is right.'
  },
  {
    term: 'Pointillism of Money',
    fact: 'Core motif of the mockumentary: The sum of small favors and donations only reveals the picture of a system from a distance.',
    satire: 'The art of making so many small dirt spots until the audience believes it is a masterpiece of stability.'
  },
  {
    term: 'Chef, please take a look',
    fact: 'Wording of an SMS from August Wöginger to Thomas Schmid regarding the appointment in Braunau.',
    satire: 'The five words that transform the rule of law into a friendly recommendation corner. The classic of Austrian short message literature.'
  },
  {
    term: 'Scharf Verdict',
    fact: 'Decision of the Federal Administrative Court stating that the appointment in Braunau was not objectively comprehensible.',
    satire: 'A rare moment in which reality corrected the script of politics. The final boss of political patronage.'
  },
  {
    term: 'Donation Splitting',
    fact: 'Systematic division of large party donations into amounts below the reporting threshold of the Court of Audit (formerly €50,000).',
    satire: 'Financial pointillism. The art of turning a rain of gold into such fine mist that the authorities cannot find umbrellas.'
  },
  {
    term: 'Market Clearing',
    fact: 'Historical euphemism for the displacement and expropriation of Jewish entrepreneurs (Aryanization) during the Nazi era.',
    satire: 'Helmut Horten\'s favorite choreography. A ruthless spring cleaning of history where only the cash registers ring.'
  },
  {
    term: '49,000',
    fact: 'The amount in Euros that Heidi Horten donated multiple times to the ÖVP to stay just below the publication obligation.',
    satire: 'The magic number of silence. The mathematical limit beyond which money stops being news and starts being an aesthetic.'
  },
  {
    term: 'Sobotka Organ',
    fact: 'A grand piano rented for around 3,000 Euros per month in the Austrian Parliament, initiated by Wolfgang Sobotka.',
    satire: 'The instrument on which the budget deficit is played in a minor key. Every key costs a small inquiry, every chord an advertisement affair.'
  },
  {
    term: 'Benko',
    fact: 'René Benko, founder of the Signa Holding, whose insolvency in 2023 marked the largest bankruptcy in Austrian history.',
    satire: 'The sorcerer\'s apprentice of pointillism. He tried to build skyscrapers out of soap bubbles and was surprised that it got wet when they popped.'
  },
  {
    term: 'Aryanization',
    fact: 'The state-organized expropriation of Jewish property under National Socialism.',
    satire: 'The ugly brushstroke under the shiny Horten company logo. A color that cannot be painted over with all the money in the world.'
  },
  {
    term: 'COFAG',
    fact: 'The COVID-19 Federal Financing Agency, which distributed billions in Corona aid, often under criticism of lacking transparency.',
    satire: 'The modern wish machine for major investors. Here, billions learned to fly while small businesses got stuck in the bureaucratic fog.'
  }
]

const database = computed(() => isEn.value ? database_en : database_de)

const search = () => {
  if (!searchTerm.value) {
    result.value = null
    return
  }
  const found = database.value.find(item => 
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
