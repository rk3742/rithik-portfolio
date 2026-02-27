// particles-config.js — Wasteland dust particles

// Wait for desktop to be visible before init
function initParticles() {
  if (typeof particlesJS === 'undefined') return;
  
  particlesJS('particles-js', {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 900 } },
      color: { value: ['#ff6a00', '#ffb300', '#c94f00', '#ff4400', '#e8d5b0'] },
      shape: { type: 'circle' },
      opacity: {
        value: 0.4,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false }
      },
      size: {
        value: 2,
        random: true,
        anim: { enable: true, speed: 1, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'top-right',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        resize: true
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 }
      }
    },
    retina_detect: true
  });
}

// Poll until desktop is visible
const particleInit = setInterval(() => {
  const desktop = document.getElementById('desktop');
  if (desktop && desktop.style.display === 'block') {
    clearInterval(particleInit);
    initParticles();
  }
}, 300);
