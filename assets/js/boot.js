// boot.js — DEVOS Boot Sequence

const bootLogs = [
  { text: 'DEVOS v1.0 KERNEL LOADING...', type: 'ok', delay: 200 },
  { text: 'Initializing wasteland environment...', type: 'ok', delay: 350 },
  { text: 'Mounting /dev/portfolio...', type: 'ok', delay: 500 },
  { text: 'Loading identity module: KONA_RITHIK_SAI_KUMAR', type: 'ok', delay: 650 },
  { text: 'Checking skill registry... [PYTHON, REACT, FLASK, NODE.JS]', type: 'ok', delay: 800 },
  { text: 'CGPA verified: 9.26/10 ✓', type: 'ok', delay: 950 },
  { text: 'Connecting to SRM Network...', type: 'warn', delay: 1100 },
  { text: 'Loading project database... [6 MISSIONS FOUND]', type: 'ok', delay: 1300 },
  { text: 'Importing experience logs...', type: 'ok', delay: 1450 },
  { text: 'WARNING: High ambition levels detected', type: 'warn', delay: 1600 },
  { text: 'Enabling glitch protection matrix...', type: 'ok', delay: 1750 },
  { text: 'Loading particle dust engine...', type: 'ok', delay: 1900 },
  { text: 'Establishing comms on rk3742@srmist.edu.in...', type: 'ok', delay: 2050 },
  { text: 'All systems nominal. DEVOS ready.', type: 'ok', delay: 2200 },
  { text: '>>> WELCOME TO THE WASTELAND <<<', type: 'ok', delay: 2400 },
];

const bootLog   = document.getElementById('boot-log');
const bootBar   = document.getElementById('boot-bar');
const bootEnter = document.getElementById('boot-enter');

// Animate progress bar
let progress = 0;
const barInterval = setInterval(() => {
  progress += 1;
  bootBar.style.width = progress + '%';
  if (progress >= 100) clearInterval(barInterval);
}, 28);

// Print log lines
bootLogs.forEach(({ text, type, delay }, i) => {
  setTimeout(() => {
    const line = document.createElement('div');
    const prefix = type === 'ok' ? '[ OK ]' : type === 'warn' ? '[WARN]' : '[ERR]';
    line.innerHTML = `<span class="log-${type}">${prefix}</span> ${text}`;
    bootLog.appendChild(line);
    bootLog.scrollTop = bootLog.scrollHeight;

    if (i === bootLogs.length - 1) {
      setTimeout(() => {
        bootEnter.style.display = 'block';
      }, 400);
    }
  }, delay);
});

function launchDesktop() {
  const bootScreen = document.getElementById('boot-screen');
  const desktop    = document.getElementById('desktop');

  bootScreen.style.animation = 'boot-exit 0.5s forwards';
  bootScreen.style.transition = 'opacity 0.5s';
  bootScreen.style.opacity = '0';

  setTimeout(() => {
    bootScreen.style.display = 'none';
    desktop.style.display = 'block';
    desktop.style.opacity = '0';
    desktop.style.transition = 'opacity 0.6s';
    setTimeout(() => {
      desktop.style.opacity = '1';
      // Start skill bar animations
      animateSkillBars();
    }, 50);
  }, 500);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && bootEnter.style.display !== 'none') launchDesktop();
});

document.getElementById('boot-screen').addEventListener('click', () => {
  if (bootEnter.style.display !== 'none') launchDesktop();
});

function animateSkillBars() {
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.w + '%';
    });
  }, 300);
}
