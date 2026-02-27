// desktop.js — Window management & clock

// ===== CLOCK =====
function updateClock() {
  const clock = document.getElementById('taskbar-clock');
  if (!clock) return;
  const now = new Date();
  const d = now.toLocaleDateString('en-IN', { weekday:'short', day:'2-digit', month:'short' });
  const t = now.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false });
  clock.textContent = `${d} | ${t}`;
}
setInterval(updateClock, 1000);
updateClock();

// ===== WINDOW Z-INDEX MANAGER =====
let topZ = 200;

function bringToFront(id) {
  topZ++;
  const el = document.getElementById(id);
  if (el) el.style.zIndex = topZ;
}

// Predefined smart positions for each window so they never fully overlap
const windowPositions = {
  about:      { left: 120, top: 60 },
  skills:     { left: 340, top: 80 },
  projects:   { left: 180, top: 70 },
  experience: { left: 150, top: 65 },
  education:  { left: 200, top: 75 },
  awards:     { left: 260, top: 68 },
  contact:    { left: 300, top: 72 },
  terminal:   { left: 220, top: 80 },
};

// ===== OPEN WINDOW — ONE AT A TIME =====
function openWindow(name) {
  const id = 'win-' + name;
  const win = document.getElementById(id);
  if (!win) return;

  const isHidden = win.style.display === 'none' || win.style.display === '';

  // CLOSE ALL OTHER WINDOWS instantly
  document.querySelectorAll('.win').forEach(w => {
    if (w.id !== id) {
      w.style.display = 'none';
      w.style.animation = '';
    }
  });

  if (isHidden) {
    win.style.display = 'block';
    win.style.animation = 'win-open 0.28s cubic-bezier(0.34,1.56,0.64,1)';

    // Center window perfectly on screen
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const iw = parseInt(win.style.width) || win.offsetWidth || 600;
    const ih = win.offsetHeight || 450;

    let left = Math.max(110, (ww - iw) / 2);
    let top  = Math.max(54,  (wh - ih) / 2 - 10);

    // Clamp
    left = Math.min(left, ww - iw - 10);
    top  = Math.min(top,  wh - 200);

    win.style.left = left + 'px';
    win.style.top  = top  + 'px';

    // Skill bars animation
    if (name === 'skills') {
      setTimeout(() => {
        document.querySelectorAll('.bar-fill').forEach(bar => {
          bar.style.width = '0%';
          setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 80);
        });
      }, 150);
    }

    // Terminal focus
    if (name === 'terminal') {
      setTimeout(() => {
        const inp = document.getElementById('term-input');
        if (inp) inp.focus();
      }, 100);
    }
  } else {
    // Already this window open — flash it
    win.style.animation = 'win-flash 0.3s ease';
    setTimeout(() => { win.style.animation = ''; }, 300);
  }

  bringToFront(id);
}

function closeWindow(id) {
  const win = document.getElementById(id);
  if (win) {
    win.style.animation = 'win-close-anim 0.2s forwards';
    setTimeout(() => {
      win.style.display = 'none';
      win.style.animation = '';
    }, 200);
  }
}

function minimizeWindow(id) {
  const win = document.getElementById(id);
  if (win) {
    win.style.animation = 'win-close-anim 0.2s forwards';
    setTimeout(() => {
      win.style.display = 'none';
      win.style.animation = '';
    }, 200);
  }
}

// Add animations CSS
const animCSS = document.createElement('style');
animCSS.textContent = `
@keyframes win-close-anim {
  to { opacity: 0; transform: scale(0.9) translateY(10px); }
}
@keyframes win-flash {
  0%   { box-shadow: 0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(255,106,0,0.1); }
  50%  { box-shadow: 0 20px 60px rgba(0,0,0,0.8), 0 0 60px rgba(255,106,0,0.6); }
  100% { box-shadow: 0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(255,106,0,0.1); }
}`;
document.head.appendChild(animCSS);

// Click any window to bring to front
document.querySelectorAll('.win').forEach(win => {
  win.addEventListener('mousedown', () => bringToFront(win.id));
});
