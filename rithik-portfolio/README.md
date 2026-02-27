# DEVOS v1.0 — Kona Rithik Sai Kumar Portfolio

> **Mad Max × OS Desktop** — A wasteland-themed developer portfolio built as a fake operating system desktop with draggable windows, a live terminal, glitch animations, and particle dust effects.

---

## 🚀 How to Run in VS Code

### Method 1: Live Server (Recommended — No Install Needed)

1. **Open VS Code**
2. **Open the folder:** `File → Open Folder → Select the rithik-portfolio folder`
3. **Install the Live Server extension:**
   - Click the Extensions icon (or press `Ctrl+Shift+X`)
   - Search: `Live Server` by Ritwick Dey
   - Click **Install**
4. **Start:** Right-click `index.html` → **"Open with Live Server"**
5. Your browser opens at `http://127.0.0.1:5500`

### Method 2: Python HTTP Server (No extensions needed)

Open VS Code terminal (`Ctrl+`` `) and run:

```bash
# Python 3
python -m http.server 8080

# Then open browser at:
# http://localhost:8080
```

### Method 3: Node.js HTTP Server

```bash
npx serve .

# Or install globally:
npm install -g serve
serve .
```

---

## 📁 File Structure

```
rithik-portfolio/
│
├── index.html              ← Main entry point (open this)
├── README.md               ← This file
│
└── assets/
    ├── css/
    │   └── style.css       ← All styles (Mad Max OS theme)
    │
    └── js/
        ├── boot.js         ← Boot screen animation & logs
        ├── desktop.js      ← Clock, window management
        ├── terminal.js     ← Terminal shell with commands
        ├── drag.js         ← Draggable windows
        └── particles-config.js ← Dust particle effects
```

---

## 🎮 How to Use the Portfolio

### Boot Sequence
- Page loads with a **DEVOS boot screen** — animated progress bar + system logs
- Press **Enter** or **Click** to launch the desktop

### Desktop
- **Double-click any icon** on the left sidebar to open that window
- **Taskbar buttons** at the top also open windows
- **Drag windows** by their title bars to rearrange
- **Minimize (─)** or **Close (✕)** any window

### Terminal Commands
Open the **TERMINAL.exe** window and type:
```
help          — See all commands
whoami        — Identity file
about         — About Rithik
skills        — Skill registry
projects      — Mission log
experience    — Work history
education     — Academic records
awards        — Battle victories
contact       — Comms channels
open [name]   — Open any window (e.g. open projects)
status        — System status report
hire          — Best decision you'll make today
clear         — Clear terminal
exit          — Close terminal
```

---

## ✏️ How to Customize

### Update Your Info
All content is in `index.html`. Search for any section:
- **Links:** Find `href="https://linkedin.com/..."` and update with your real URLs
- **Project links:** Find `href="#"` in project cards and add real GitHub/live links
- **Contact:** Update email, phone in the contact window section

### Change Colors
In `assets/css/style.css`, edit the `:root` variables at the top:
```css
:root {
  --orange: #ff6a00;   /* Main accent color */
  --amber: #ffb300;    /* Secondary accent */
  --red: #ff1a1a;      /* Alert/danger color */
  /* ... */
}
```

### Add More Boot Log Lines
In `assets/js/boot.js`, add entries to the `bootLogs` array:
```javascript
{ text: 'Your custom log line here...', type: 'ok', delay: 2600 },
```

### Add More Terminal Commands
In `assets/js/terminal.js`, add to the `COMMANDS` object:
```javascript
mycommand: () => `Your command output here`,
```

---

## 🌐 Deploy Online (Free)

### GitHub Pages
1. Push this folder to a GitHub repo
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your portfolio is live at `https://yourusername.github.io/repo-name`

### Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag the entire `rithik-portfolio` folder onto the Netlify dashboard
3. Get a live URL instantly

### Vercel
```bash
npx vercel
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 (Custom Properties, Animations, Grid) | Styling & animations |
| Vanilla JavaScript (ES6+) | Interactivity |
| Particles.js | Dust particle effects |
| Google Fonts (Bebas Neue, Orbitron, Share Tech Mono, Rajdhani) | Typography |

No frameworks. No build tools. Pure HTML/CSS/JS — runs anywhere.

---

## 📸 Features

- ⚡ **Animated boot sequence** with system logs
- 💀 **Glitch effect** on hero name (triggers every 8 seconds)
- 🖥️ **8 draggable OS windows** — About, Skills, Projects, Experience, Education, Awards, Contact, Terminal
- ⌨️ **Fully functional terminal** with 13 commands + command history (↑↓ arrows)
- 🌪️ **Particle dust effects** (interactive — hover to repel)
- 📊 **Animated skill bars** that fill on open
- 🕐 **Live clock** in taskbar
- 📡 **Signal strength animation** in Contact window
- 🎯 **Responsive design** (mobile taskbar supported)

---

Built by **Kona Rithik Sai Kumar** | rk3742@srmist.edu.in | SRM IST 2027
