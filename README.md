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

---

## 📁 File Structure

```
rithik-portfolio/
│
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
```

---

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
```

---

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
