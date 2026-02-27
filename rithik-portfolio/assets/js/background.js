// background.js — Mad Max Wasteland Canvas Background
// Fire columns, floating embers, lightning, cracked earth cracks

function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // ===== EMBERS =====
  class Ember {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.size = Math.random() * 3 + 0.5;
      this.speedY = -(Math.random() * 1.5 + 0.5);
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.life = 1;
      this.decay = Math.random() * 0.003 + 0.001;
      this.hue = Math.random() * 30 + 10; // orange-red
    }
    update() {
      this.x += this.speedX + Math.sin(Date.now() * 0.001 + this.x) * 0.3;
      this.y += this.speedY;
      this.life -= this.decay;
      if (this.life <= 0 || this.y < -10) this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.life * 0.85;
      const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
      grd.addColorStop(0, `hsl(${this.hue}, 100%, 90%)`);
      grd.addColorStop(0.4, `hsl(${this.hue}, 100%, 60%)`);
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // ===== FIRE COLUMNS =====
  class FireColumn {
    constructor(x) {
      this.x = x;
      this.baseH = Math.random() * 0.25 + 0.1; // fraction of screen height from bottom
      this.particles = [];
      this.intensity = Math.random() * 0.5 + 0.5;
      for (let i = 0; i < 30; i++) this.addParticle(true);
    }
    addParticle(init) {
      const spread = 40;
      this.particles.push({
        x: this.x + (Math.random() - 0.5) * spread,
        y: init ? H - Math.random() * H * this.baseH : H,
        size: Math.random() * 18 + 8,
        speedY: -(Math.random() * 2.5 + 1.5) * this.intensity,
        speedX: (Math.random() - 0.5) * 1.2,
        life: Math.random(),
        decay: Math.random() * 0.015 + 0.008,
      });
    }
    update() {
      this.particles.forEach(p => {
        p.x += p.speedX + Math.sin(Date.now() * 0.002 + p.y * 0.01) * 0.5;
        p.y += p.speedY;
        p.life -= p.decay;
        p.size *= 0.997;
      });
      this.particles = this.particles.filter(p => p.life > 0);
      while (this.particles.length < 30) this.addParticle(false);
    }
    draw() {
      this.particles.forEach(p => {
        if (p.life <= 0) return;
        const lifeRatio = p.life;
        ctx.save();
        ctx.globalAlpha = lifeRatio * 0.35 * this.intensity;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        // Fire gradient: white core → yellow → orange → red → transparent
        grd.addColorStop(0,   `rgba(255,255,200,${lifeRatio})`);
        grd.addColorStop(0.2, `rgba(255,200,50,${lifeRatio * 0.9})`);
        grd.addColorStop(0.5, `rgba(255,80,0,${lifeRatio * 0.7})`);
        grd.addColorStop(0.8, `rgba(180,20,0,${lifeRatio * 0.3})`);
        grd.addColorStop(1,   'transparent');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }
  }

  // ===== LIGHTNING =====
  let lightning = null;
  let lightTimer = 0;

  function triggerLightning() {
    const x = Math.random() * W;
    lightning = { x, segments: [], alpha: 1 };
    let cy = 44;
    let cx = x;
    while (cy < H * 0.6) {
      const nx = cx + (Math.random() - 0.5) * 60;
      const ny = cy + Math.random() * 40 + 20;
      lightning.segments.push([cx, cy, nx, ny]);
      cx = nx; cy = ny;
    }
  }

  function drawLightning() {
    if (!lightning) return;
    lightning.alpha -= 0.06;
    if (lightning.alpha <= 0) { lightning = null; return; }
    ctx.save();
    ctx.globalAlpha = lightning.alpha * 0.6;
    ctx.strokeStyle = `rgba(255,150,50,${lightning.alpha})`;
    ctx.lineWidth = 1.5;
    ctx.shadowColor = 'rgba(255,106,0,0.8)';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    lightning.segments.forEach(([x1,y1,x2,y2]) => {
      ctx.moveTo(x1,y1); ctx.lineTo(x2,y2);
    });
    ctx.stroke();
    // Glow flash
    ctx.globalAlpha = lightning.alpha * 0.03;
    ctx.fillStyle = 'rgba(255,80,0,1)';
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  // ===== DISTANT FIRE GLOW ON HORIZON =====
  function drawHorizon() {
    const horizonY = H * 0.72;
    // Base horizon glow
    const grd = ctx.createLinearGradient(0, horizonY - 60, 0, H);
    grd.addColorStop(0,   'rgba(180,40,0,0)');
    grd.addColorStop(0.3, 'rgba(200,60,0,0.12)');
    grd.addColorStop(0.7, 'rgba(150,30,0,0.25)');
    grd.addColorStop(1,   'rgba(80,10,0,0.5)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, horizonY - 60, W, H - horizonY + 60);

    // Pulsing fire blobs on horizon
    const t = Date.now() * 0.0008;
    const blobs = [0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 0.95];
    blobs.forEach((frac, i) => {
      const bx = W * frac;
      const by = horizonY + Math.sin(t + i * 1.3) * 8;
      const br = 60 + Math.sin(t * 1.5 + i) * 20;
      const alpha = 0.08 + Math.sin(t + i) * 0.04;
      const fg = ctx.createRadialGradient(bx, by, 0, bx, by, br);
      fg.addColorStop(0,   `rgba(255,100,0,${alpha * 2})`);
      fg.addColorStop(0.5, `rgba(200,50,0,${alpha})`);
      fg.addColorStop(1,   'transparent');
      ctx.fillStyle = fg;
      ctx.beginPath();
      ctx.arc(bx, by, br, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // ===== CRACKED EARTH LINES =====
  const cracks = [];
  function generateCracks() {
    const numCracks = 25;
    for (let i = 0; i < numCracks; i++) {
      const startX = Math.random() * W;
      const startY = H * 0.65 + Math.random() * H * 0.35;
      const segments = [];
      let cx = startX, cy = startY;
      const len = Math.floor(Math.random() * 6 + 3);
      for (let j = 0; j < len; j++) {
        const nx = cx + (Math.random() - 0.5) * 120;
        const ny = cy + (Math.random() - 0.3) * 60;
        segments.push([cx, cy, nx, ny]);
        cx = nx; cy = ny;
      }
      cracks.push({ segments, alpha: Math.random() * 0.15 + 0.05 });
    }
  }
  generateCracks();

  function drawCracks() {
    cracks.forEach(crack => {
      ctx.save();
      ctx.globalAlpha = crack.alpha;
      ctx.strokeStyle = `rgba(255,80,0,0.6)`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      crack.segments.forEach(([x1,y1,x2,y2]) => {
        ctx.moveTo(x1,y1); ctx.lineTo(x2,y2);
      });
      ctx.stroke();
      ctx.restore();
    });
  }

  // ===== DUST CLOUDS =====
  class DustCloud {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() < 0.5 ? -200 : W + 200;
      this.y = H * 0.5 + Math.random() * H * 0.4;
      this.r  = Math.random() * 150 + 80;
      this.speedX = this.x < 0 ? (Math.random() * 0.3 + 0.1) : -(Math.random() * 0.3 + 0.1);
      this.alpha = Math.random() * 0.06 + 0.02;
    }
    update() {
      this.x += this.speedX;
      if (this.x > W + 300 || this.x < -300) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      g.addColorStop(0, 'rgba(180,90,30,0.5)');
      g.addColorStop(0.5, 'rgba(120,50,10,0.3)');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // ===== INIT =====
  const embers = Array.from({ length: 120 }, () => new Ember());
  
  // Fire columns at edges and dramatic spots
  const firePositions = [0, W*0.08, W*0.18, W*0.82, W*0.92, W];
  const fireColumns = firePositions.map(x => new FireColumn(x));
  
  const dustClouds = Array.from({ length: 5 }, () => new DustCloud());

  // ===== ANIMATION LOOP =====
  function draw() {
    // Clear with very dark near-black
    ctx.fillStyle = 'rgba(4,2,0,0.88)';
    ctx.fillRect(0, 0, W, H);

    // Horizon glow + ground
    drawHorizon();

    // Cracked earth
    drawCracks();

    // Dust clouds
    dustClouds.forEach(d => { d.update(); d.draw(); });

    // Fire columns
    fireColumns.forEach(f => { f.update(); f.draw(); });

    // Embers
    embers.forEach(e => { e.update(); e.draw(); });

    // Lightning
    lightTimer++;
    if (lightTimer > 400 + Math.random() * 600) {
      triggerLightning();
      lightTimer = 0;
    }
    drawLightning();

    requestAnimationFrame(draw);
  }

  // Re-generate fire column positions on resize
  window.addEventListener('resize', () => {
    const newPositions = [0, W*0.08, W*0.18, W*0.82, W*0.92, W];
    newPositions.forEach((x, i) => { if (fireColumns[i]) fireColumns[i].x = x; });
    // Regenerate cracks
    cracks.length = 0;
    generateCracks();
  });

  draw();
}

// Wait for desktop to be visible before starting canvas
const bgInitInterval = setInterval(() => {
  const desktop = document.getElementById('desktop');
  if (desktop && desktop.style.display === 'block') {
    clearInterval(bgInitInterval);
    initBackground();
  }
}, 200);
