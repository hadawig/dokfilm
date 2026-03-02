<template>
  <div class="tip-line-container">
    <div class="terminal-header">
      <span class="status-dot"></span> SECURE_CONNECTION: ESTABLISHED
    </div>
    
    <form v-if="!submitted" @submit.prevent="submitForm" class="tip-form">
      <p class="instr">Übermitteln Sie Ihre Hinweise oder Drehbuch-Ideen an das Forensik-Team.</p>
      
      <div class="input-group">
        <label>CODENAME (OPTIONAL)</label>
        <input v-model="form.name" type="text" placeholder="z.B. Deep_Throat_2026" />
      </div>
      
      <div class="input-group">
        <label>BETREFF</label>
        <select v-model="form.subject">
          <option value="Drehbuch-Idee">Drehbuch-Idee</option>
          <option value="Recherche-Hinweis">Recherche-Hinweis</option>
          <option value="Feedback">Allgemeines Feedback</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>
      
      <div class="input-group">
        <label>NACHRICHT (VERSCHLÜSSELT)</label>
        <textarea v-model="form.message" rows="5" required placeholder="Schreiben Sie hier..."></textarea>
      </div>
      
      <button type="submit" :disabled="loading" class="submit-btn">
        {{ loading ? 'ÜBERMITTLE...' : 'HINWEIS ABSCHICKEN' }}
      </button>
    </form>

    <div v-else class="success-msg">
      <h3>✓ ÜBERMITTLUNG ERFOLGREICH</h3>
      <p>Ihre Nachricht wurde in das Archiv des Schweigens aufgenommen. Das Kollektiv dankt.</p>
      <button @click="submitted = false" class="reset-btn">WEITERE NACHRICHT</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)
const loading = ref(false)
const form = reactive({
  name: '',
  subject: 'Drehbuch-Idee',
  message: ''
})

const submitForm = async () => {
  loading.value = true
  
  try {
    const response = await fetch('https://formspree.io/f/xvgeogzv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        codename: form.name || 'Anonymous',
        subject: form.subject,
        message: form.message,
        _subject: `[Tip-Line] ${form.subject} von ${form.name || 'Anonym'}`
      })
    })

    if (response.ok) {
      submitted.value = true
      form.message = ''
      form.name = ''
    } else {
      alert('Übermittlungsfehler. Bitte versuchen Sie es später erneut oder nutzen Sie direkt volti.sodala@gmail.com')
    }
  } catch (error) {
    console.error('Submission error:', error)
    alert('Netzwerkfehler. Sind Sie mit dem gesicherten Netz verbunden?')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.tip-line-container {
  background: #0f0f0f;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  color: #00ff00;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.1);
}

.terminal-header {
  font-size: 0.8rem;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: #888;
}

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  margin-right: 5px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

.instr {
  font-size: 0.9rem;
  margin-bottom: 20px;
  color: #ccc;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  font-size: 0.7rem;
  margin-bottom: 5px;
  color: #00ff00;
}

input, select, textarea {
  width: 100%;
  background: #1a1a1a;
  border: 1px solid #333;
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  outline: none;
}

input:focus, textarea:focus {
  border-color: #00ff00;
}

.submit-btn {
  background: #00ff00;
  color: #000;
  border: none;
  padding: 12px 20px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: all 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #fff;
  box-shadow: 0 0 15px #fff;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-msg {
  text-align: center;
  padding: 40px 0;
}

.reset-btn {
  background: transparent;
  border: 1px solid #00ff00;
  color: #00ff00;
  padding: 8px 15px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
