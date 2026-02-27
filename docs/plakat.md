# Filmplakat: Das Horten-Mysterium

<div class="poster-container">
  <div class="poster-content">
    <div class="poster-header">
      <span>AUGUST DIEHL</span>
      <span>BIRGIT MINICHMAYR</span>
      <span>OLIVER MASUCCI</span>
    </div>
    
    <div class="poster-main">
      <h1 class="poster-title">DAS HORTEN<br><span class="title-sub">MYSTERIUM</span></h1>
      <div class="poster-divider"></div>
      <p class="poster-tagline">MANCHE GEHEIMNISSE SIND ZU TEUER, UM SIE ZU BEGRABEN. ALSO HABEN WIR SIE AUSGESTELLT.</p>
    </div>

    <div class="poster-visual">
      <div class="split-side left"></div>
      <div class="split-side right"></div>
      <div class="pearl-shredder">
        <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Perlenkette -->
          <circle cx="50" cy="20" r="5" fill="#fff" opacity="0.9" />
          <circle cx="50" cy="35" r="6" fill="#fff" opacity="0.8" />
          <circle cx="50" cy="52" r="7" fill="#fff" opacity="0.7" />
          <!-- Übergang -->
          <path d="M45 70 L55 70 L60 90 L40 90 Z" fill="#666" />
          <!-- Schredder-Zähne -->
          <rect x="30" y="90" width="40" height="40" fill="#333" />
          <path d="M30 100 L40 110 L30 120 M40 100 L50 110 L40 120 M50 100 L60 110 L50 120 M60 100 L70 110 L60 120" stroke="#ff0000" stroke-width="2" fill="none" />
          <!-- Schnipsel -->
          <rect x="35" y="140" width="5" height="10" fill="#fff" transform="rotate(15)" />
          <rect x="55" y="150" width="5" height="10" fill="#fff" transform="rotate(-20)" />
          <rect x="45" y="165" width="5" height="10" fill="#fff" transform="rotate(45)" />
        </svg>
      </div>
    </div>

    <div class="poster-footer">
      <p>EIN GEMINI-CLI EXPERIMENT • REGIE: HADAWIG • AB 2026 IM INTERNET</p>
    </div>
  </div>
</div>

<style>
.poster-container {
  background: #000;
  padding: 40px;
  display: flex;
  justify-content: center;
  font-family: 'Times New Roman', serif;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  margin-top: 20px;
}

.poster-content {
  width: 100%;
  max-width: 500px;
  border: 2px solid #333;
  padding: 40px;
  text-align: center;
  background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
  position: relative;
  overflow: hidden;
}

.poster-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  letter-spacing: 2px;
  margin-bottom: 40px;
  color: #aaa;
}

.poster-title {
  font-size: 2.5rem !important;
  line-height: 0.9;
  margin: 0 !important;
  letter-spacing: 5px;
  font-weight: 900;
  text-transform: uppercase;
  background: linear-gradient(to bottom, #fff 0%, #888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-sub {
  font-size: 3.5rem;
  color: #d4af37; /* Gold */
  -webkit-text-fill-color: #d4af37;
}

.poster-divider {
  width: 50px;
  height: 2px;
  background: #d4af37;
  margin: 20px auto;
}

.poster-tagline {
  font-size: 0.8rem;
  font-style: italic;
  letter-spacing: 1px;
  color: #ccc;
  margin-bottom: 30px;
}

.poster-visual {
  height: 200px;
  position: relative;
  margin: 40px 0;
}

.pearl-shredder {
  width: 100px;
  margin: 0 auto;
}

.poster-footer {
  margin-top: 40px;
  font-size: 0.6rem;
  letter-spacing: 1px;
  color: #666;
}

/* Verstecke Standard-VitePress Header auf dieser Seite */
.vp-doc h1 { display: none; }
</style>
