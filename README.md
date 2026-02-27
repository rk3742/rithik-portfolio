<<<<<<< HEAD
# ⚡ DEVOS v1.0 — Mad Max OS Portfolio

[![Live Demo](https://img.shields.io/badge/🌐%20LIVE%20DEMO-Visit%20Portfolio-ff6a00?style=for-the-badge&labelColor=0a0705)](https://rk3742.github.io/rithik-portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Kona%20Rithik%20Sai%20Kumar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kona-rithik-sai-kumar-b97a12290/)
[![GitHub](https://img.shields.io/badge/GitHub-rk3742-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rk3742)
[![Portfolio](https://img.shields.io/badge/Status-LIVE-39ff14?style=for-the-badge&labelColor=0a0705)](https://rk3742.github.io/rithik-portfolio/)

---

> *"Every developer has a portfolio. Not every developer has an operating system."*

**DEVOS v1.0** is not your typical portfolio website. It is a fully interactive **fake OS desktop** — complete with a boot sequence, draggable windows, a working terminal shell, and a living, breathing **Mad Max wasteland background** — all built using **zero frameworks, zero build tools, pure HTML + CSS + JavaScript.**

When a recruiter opens this link, they don't see a boring card layout. They see:

1. A **DEVOS boot screen** loading with animated system logs
2. A **wasteland desktop** with fire columns, floating embers, and lightning
3. **8 draggable windows** they can open, move, and close like a real OS
4. A **working terminal** where they can type `hire` and get the full case for why to hire me

> **This portfolio *is* the project. The design itself proves the skill.**

---

## 🔥 Live Demo

**👉 https://rk3742.github.io/rithik-portfolio/**

*Page loads → Boot screen plays → Press Enter → Explore the wasteland*

---

## ✨ Features

### 🖥️ OS Desktop Experience
- **Boot sequence** — animated progress bar + 15 system log lines + press Enter to launch
- **Taskbar** with live clock, navigation buttons, and always-visible Resume download
- **8 desktop icons** — double-click to open any section
- **One window at a time** — clean and focused, no overlapping mess
- **Draggable windows** — move any window by its title bar

### 🎨 Visual Effects (Canvas + CSS)
- **Canvas fire columns** — real particle fire burning up from screen edges with physics
- **120 floating embers** with wind drift and opacity fade
- **Horizon glow** — distant fire light pulsing at bottom of screen
- **Cracked earth lines** glowing faintly across the ground
- **Random lightning strikes** flashing every few seconds
- **Particle dust** — hover to repulse particles (Particles.js)
- **CSS glitch effect** on hero name — triggers every 8 seconds
- **Scanline sweep** moving top to bottom continuously

### ⌨️ Working Terminal — open it and type `help`

```
whoami        →  Full identity file
about         →  Bio and background story  
skills        →  ASCII skill bars with percentages
projects      →  All 6 missions with status
experience    →  4 internship timeline
education     →  Academic records + certifications
awards        →  Battle victories
contact       →  All communication channels
open [name]   →  Opens any window  (e.g: open projects)
status        →  Live system stats — CPU, coffee, ambition level
hire          →  The best command in this terminal
clear / exit  →  Clear output / close terminal
```

### 📂 8 Window Modules

| Window | Contents |
|--------|----------|
| 👤 ABOUT.exe | Identity, bio, social links, resume download |
| ⚙️ SKILLS.exe | Animated skill bars — 5 categories |
| 🗂️ PROJECTS.exe | 6 projects — 3 deployed live |
| 🔧 EXPERIENCE.exe | 4 internship timeline |
| 🎓 EDUCATION.exe | University + schools + 8 certifications |
| 🏆 AWARDS.exe | SIH, Code Auction, Technothon, Presentation |
| 📡 CONTACT.exe | Contact cards + resume download CTA |
| 💀 TERMINAL.exe | Full shell with 13 commands |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Structure, Canvas element, data attributes |
| CSS3 | Custom properties, keyframe animations, grid, clip-path |
| Vanilla JavaScript | Window manager, terminal, drag, Canvas 2D API |
| Canvas 2D API | Fire, embers, lightning, dust, cracked earth — all custom built |
| Particles.js (CDN) | Ambient dust layer with hover repulse |
| Google Fonts | Bebas Neue · Orbitron · Share Tech Mono · Rajdhani |

> **Zero dependencies. Zero build tools. Zero frameworks. Open `index.html` and it runs.**
=======
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
>>>>>>> b6a9c91 (Fix folder structure for GitHub Pages)

---

## 📁 File Structure

```
rithik-portfolio/
│
<<<<<<< HEAD
├── index.html                        ←  Full portfolio — single HTML entry point
├── KONA_RITHIK_SAI_KUMAR_Doc.pdf     ←  Resume PDF
├── README.md                         ←  This file
│
└── assets/
    ├── css/
    │   └── style.css                 ←  All styles — OS theme + animations
    │
    └── js/
        ├── boot.js                   ←  Boot screen + system log animation
        ├── background.js             ←  Canvas: fire, embers, lightning, dust
        ├── desktop.js                ←  Window manager + clock + one-at-a-time
        ├── terminal.js               ←  Shell with 13 commands + history
        ├── drag.js                   ←  Draggable window logic
        └── particles-config.js       ←  Particle dust setup
=======
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
>>>>>>> b6a9c91 (Fix folder structure for GitHub Pages)
```

---

<<<<<<< HEAD
## 🚀 Run Locally

```bash
# Clone
git clone https://github.com/rk3742/rithik-portfolio.git
cd rithik-portfolio

# Option 1 — VS Code Live Server
# Right-click index.html → Open with Live Server

# Option 2 — Python
python -m http.server 8080
# Visit http://localhost:8080
=======
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
>>>>>>> b6a9c91 (Fix folder structure for GitHub Pages)
```

---

<<<<<<< HEAD
## 👨‍💻 About Me — Kona Rithik Sai Kumar

**Full Stack Developer Intern @ Beau Roi Technology**
B.Tech ECE — SRM Institute of Science and Technology, Chennai · Batch 2027 · CGPA 9.26/10

### Internships

| Company | Role | Period |
|---------|------|--------|
| 🟠 Beau Roi Technology | Full Stack Development Intern | Jan 2026 — Present |
| 🔵 IBM × AICTE | Front-End Web Development Intern | Aug — Sept 2025 |
| 🟡 AICTE Green Skills | AI & Data Analytics Intern | Jul — Aug 2025 |
| 🟢 Prodigy Infotech | Machine Learning Intern | Apr — May 2025 |

### Projects

| Project | Stack | Link |
|---------|-------|------|
| RAG System — LLM Document Retrieval | Python, LangChain, Vector DB | 🔴 Active |
| CareerVerse — Engineering Career Guidance | React, Node.js, Express | [🌐 Live Demo](https://engineeringguidance.netlify.app) |
| Automated Resume Relevance Scorer | Python, Flask, NLP, Streamlit | [🌐 Live Demo](https://automatedresumerelevancechecker.streamlit.app) |
| JARVIS AI Portfolio | React, Tailwind CSS | [🌐 Live Demo](https://rithikjarvis.netlify.app) |
| Smart Irrigation System | ESP32, Arduino, Python | ✅ Complete |
| Appointment Booking System | React, Node.js, MongoDB, JWT | 🔒 Private Client |

### Awards

- 🏆 Smart India Hackathon 2025 — Internal Round Qualifier, SRMIST
- 🥈 Code Auction — Runner-Up, AI-ZYPHER · SRMIST  
- 🏅 Technothon — St. Joseph's College
- 🎖️ Project Presentation Winner — ECE Department, SRMIST

---

## 📊 GitHub Stats

![Rithik's GitHub Stats](https://github-readme-stats.vercel.app/api?username=rk3742&show_icons=true&theme=dark&title_color=ff6a00&icon_color=ffb300&text_color=e8d5b0&bg_color=0a0705&border_color=ff6a0044)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=rk3742&layout=compact&theme=dark&title_color=ff6a00&text_color=e8d5b0&bg_color=0a0705&border_color=ff6a0044)

---

## 📬 Contact

| Channel | |
|---------|--|
| 📧 Email | rk3742@srmist.edu.in |
| 💼 LinkedIn | [Kona Rithik Sai Kumar](https://www.linkedin.com/in/kona-rithik-sai-kumar-b97a12290/) |
| 💻 GitHub | [github.com/rk3742](https://github.com/rk3742) |
| 🌐 Portfolio | [rk3742.github.io/rithik-portfolio](https://rk3742.github.io/rithik-portfolio/) |

**Open to SDE roles, full-stack internships, and collaborations · Response time under 24 hours ⚡**

---

## ⭐ Star This Repo

If this portfolio inspired you or you just think it's cool — drop a **star** ⭐

Feel free to **fork** it and build your own OS-themed portfolio. Just swap the content and make it yours.

---

*Built with ⚡ by Kona Rithik Sai Kumar — SRM IST 2027*
*No frameworks were harmed in the making of this portfolio.*
=======
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
>>>>>>> b6a9c91 (Fix folder structure for GitHub Pages)
