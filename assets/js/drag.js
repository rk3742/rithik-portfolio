// drag.js — Draggable windows

let dragEl = null;
let dragOffX = 0, dragOffY = 0;

function dragStart(e, winId) {
  dragEl = document.getElementById(winId);
  if (!dragEl) return;
  const rect = dragEl.getBoundingClientRect();
  dragOffX = e.clientX - rect.left;
  dragOffY = e.clientY - rect.top;
  bringToFront(winId);
  document.body.style.cursor = 'grabbing';
}

document.addEventListener('mousemove', (e) => {
  if (!dragEl) return;
  const x = e.clientX - dragOffX;
  const y = e.clientY - dragOffY;
  // Clamp to viewport
  const maxX = window.innerWidth - dragEl.offsetWidth;
  const maxY = window.innerHeight - dragEl.offsetHeight;
  dragEl.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
  dragEl.style.top  = Math.max(44, Math.min(y, maxY)) + 'px';
});

document.addEventListener('mouseup', () => {
  if (dragEl) {
    dragEl._positioned = true;
    dragEl = null;
    document.body.style.cursor = 'default';
  }
});
