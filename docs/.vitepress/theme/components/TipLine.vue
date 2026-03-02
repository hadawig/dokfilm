<template>
  <div class="tip-line-container">
    <div class="terminal-header">
      <span class="status-dot"></span> SECURE_CONNECTION: ESTABLISHED
    </div>
    
    <!-- Klassisches Formular für maximale Kompatibilität -->
    <form 
      action="https://formspree.io/volti.sodala@gmail.com" 
      method="POST" 
      class="tip-form"
    >
      <p class="instr">Übermitteln Sie Ihre Hinweise direkt an das Forensik-Team.</p>
      
      <div class="input-group">
        <label>CODENAME (OPTIONAL)</label>
        <input name="codename" type="text" placeholder="z.B. Deep_Throat_2026" />
      </div>
      
      <div class="input-group">
        <label>BETREFF</label>
        <select name="subject">
          <option value="Drehbuch-Idee">Drehbuch-Idee</option>
          <option value="Recherche-Hinweis">Recherche-Hinweis</option>
          <option value="Feedback">Allgemeines Feedback</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>
      
      <div class="input-group">
        <label>NACHRICHT (VERSCHLÜSSELT)</label>
        <textarea name="message" rows="5" required placeholder="Schreiben Sie hier..."></textarea>
      </div>

      <!-- Damit die Antwort an dich geht -->
      <input type="hidden" name="_replyto" value="volti.sodala@gmail.com">
      <input type="hidden" name="_subject" value="NEUER WHISTLEBLOWER-HINWEIS">
      
      <button type="submit" class="submit-btn">
        HINWEIS ABSCHICKEN
      </button>
    </form>

    <div class="footer-note">
      * Nach dem Absenden werden Sie zur Bestätigung kurz auf die Seite von Formspree weitergeleitet.
    </div>
  </div>
</template>

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

.submit-btn:hover {
  background: #fff;
  box-shadow: 0 0 15px #fff;
}

.footer-note {
  font-size: 0.7rem;
  color: #666;
  margin-top: 20px;
  text-align: center;
}
</style>
