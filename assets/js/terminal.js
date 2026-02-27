// terminal.js — DEVOS Shell

const termOutput = document.getElementById('term-output');
const termInput  = document.getElementById('term-input');

const ASCII_BANNER = `
<span class="t-info">  ██████╗ ███████╗██╗   ██╗ ██████╗ ███████╗</span>
<span class="t-info">  ██╔══██╗██╔════╝██║   ██║██╔═══██╗██╔════╝</span>
<span class="t-info">  ██║  ██║█████╗  ██║   ██║██║   ██║███████╗</span>
<span class="t-info">  ██║  ██║██╔══╝  ╚██╗ ██╔╝██║   ██║╚════██║</span>
<span class="t-info">  ██████╔╝███████╗ ╚████╔╝ ╚██████╔╝███████║</span>
<span class="t-info">  ╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝</span>
<span class="t-dim">  WASTELAND DEVELOPER OS — SHELL v1.0</span>
<span class="t-dim">  Type <span class="t-ok">help</span> to see available commands.</span>
`;

const COMMANDS = {
  help: () => `
<span class="t-ok">AVAILABLE COMMANDS:</span>
<span class="t-info">  whoami</span>       <span class="t-dim">— Display identity file</span>
<span class="t-info">  about</span>        <span class="t-dim">— About Rithik</span>
<span class="t-info">  skills</span>       <span class="t-dim">— List all technical skills</span>
<span class="t-info">  projects</span>     <span class="t-dim">— Show all projects</span>
<span class="t-info">  experience</span>   <span class="t-dim">— Work history</span>
<span class="t-info">  education</span>    <span class="t-dim">— Academic records</span>
<span class="t-info">  awards</span>       <span class="t-dim">— Battle victories</span>
<span class="t-info">  contact</span>      <span class="t-dim">— Comms channels</span>
<span class="t-info">  open [app]</span>   <span class="t-dim">— Open any window (e.g. open projects)</span>
<span class="t-info">  clear</span>        <span class="t-dim">— Clear terminal</span>
<span class="t-info">  status</span>       <span class="t-dim">— System status report</span>
<span class="t-info">  hire</span>         <span class="t-dim">— Best decision you'll make today</span>
<span class="t-info">  exit</span>         <span class="t-dim">— Close terminal</span>
`,

  whoami: () => `
<span class="t-ok">[ IDENTITY FILE ]</span>
<span class="t-info">NAME:</span>      Kona Rithik Sai Kumar
<span class="t-info">ALIAS:</span>     rithiksaikumar / rk3742
<span class="t-info">CLASS:</span>     Full Stack Developer & SDE Aspirant
<span class="t-info">UNIT:</span>      SRM Institute of Science & Technology — ECE 2027
<span class="t-info">BASE:</span>      Chennai, Tamil Nadu, India
<span class="t-info">STATUS:</span>    <span class="t-ok">ACTIVE — Open to Opportunities</span>
<span class="t-info">CGPA:</span>      9.26 / 10.0
<span class="t-info">MISSION:</span>  SDE role at top-tier MNC
`,

  about: () => `
<span class="t-ok">[ ABOUT RITHIK ]</span>
Pre-final year ECE student turned Software Developer. 
I build full-stack systems, AI tools, and automation platforms.

4 internships completed. 5+ projects shipped.
Currently interning at Beau Roi Technology as Full Stack Intern.

From React frontends to Flask backends.
From ML models to IoT systems.
No fluff. Just code, coffee, and ambition.

<span class="t-dim">Run <span class="t-info">open about</span> for the full window.</span>
`,

  skills: () => `
<span class="t-ok">[ SKILL REGISTRY — LOADED ]</span>

<span class="t-info">LANGUAGES:</span>
  Python [████████░░] 88%   JavaScript [███████░░░] 75%   C [███████░░░] 70%

<span class="t-info">FRONTEND:</span>
  React.js [████████░░] 80%   HTML5/CSS3 [████████░░] 85%   Tailwind [███████░░░] 78%

<span class="t-info">BACKEND:</span>
  Flask [████████░░] 82%   Node.js/Express [███████░░░] 70%   REST APIs [████████░░] 80%

<span class="t-info">AI/ML:</span>
  Scikit-learn [███████░░░] 72%   Pandas/NumPy [███████░░░] 78%   RAG/LLMs [██████░░░░] 65%

<span class="t-info">TOOLS:</span>
  GitHub, Postman, MongoDB, Android Studio, Arduino IDE, AWS, VS Code
`,

  projects: () => `
<span class="t-ok">[ MISSION LOG — 6 ENTRIES ]</span>

<span class="t-err">[ ACTIVE ]</span> RAG SYSTEM — LLM Document Retrieval
          Python, LangChain, Vector DB, Flask

<span class="t-ok">[ DONE ]</span>   CAREERVERSE — Engineering Career Guidance Platform
          React, Node.js, Express, Python

<span class="t-ok">[ DONE ]</span>   AUTOMATED RESUME RELEVANCE SCORER
          Python, Flask, NLP, Scikit-learn

<span class="t-ok">[ DONE ]</span>   SMART IRRIGATION SYSTEM (IoT)
          ESP32, Arduino IDE, Python, Sensors

<span class="t-ok">[ DONE ]</span>   APPOINTMENT BOOKING SYSTEM — Beau Roi
          React, Node.js, MongoDB, JWT Auth

<span class="t-ok">[ DONE ]</span>   JARVIS AI PORTFOLIO
          React, Tailwind CSS, Python

<span class="t-dim">Run <span class="t-info">open projects</span> for detailed cards.</span>
`,

  experience: () => `
<span class="t-ok">[ FIELD OPERATIONS — 4 MISSIONS ]</span>

<span class="t-err">[ACTIVE]</span> BEAU ROI TECHNOLOGY          Jan 2026 — Present
         Full Stack Development Intern · Chennai
         Building Appointment Booking System (React + Node + MongoDB)

<span class="t-ok">[ DONE ]</span>  IBM × AICTE                  Aug — Sept 2025
         Front-End Web Development Intern · Virtual

<span class="t-ok">[ DONE ]</span>  AICTE GREEN SKILLS            Jul — Aug 2025
         AI & Data Analytics Intern · Virtual

<span class="t-ok">[ DONE ]</span>  PRODIGY INFOTECH              Apr — May 2025
         Machine Learning Intern · Virtual
`,

  education: () => `
<span class="t-ok">[ TRAINING GROUNDS ]</span>

<span class="t-info">SRM INSTITUTE OF SCIENCE AND TECHNOLOGY</span>
  B.Tech — Electronics & Communication Engineering
  Chennai · 2023 — 2027 · CGPA: <span class="t-ok">9.26 / 10.0</span>

<span class="t-info">SRI CHAITANYA COLLEGE</span>
  Class XII (MPC) · Visakhapatnam · 2023 · <span class="t-ok">88.3%</span>

<span class="t-info">CHALPATHI PUBLIC SCHOOL</span>
  Class X · Visakhapatnam · 2021 · <span class="t-ok">98%</span>
`,

  awards: () => `
<span class="t-ok">[ BATTLE VICTORIES ]</span>

🏆  Smart India Hackathon 2025 — Internal Round Qualifier (SRMIST)
🥈  Code Auction Runner-Up — AI-ZYPHER, SRMIST (Jan 2024)
🏅  Technothon Participant — St. Joseph's College (Oct 2025)
🎖️  Project Presentation Winner — ECE Dept, SRMIST (May 2024)
`,

  contact: () => `
<span class="t-ok">[ COMMS CHANNELS — ALL ONLINE ]</span>

📧  EMAIL:    rk3742@srmist.edu.in
📞  PHONE:    +91 6309340891
🔗  LINKEDIN: linkedin.com/in/rithiksaikumar
💻  GITHUB:   github.com/rithiksaikumar
📍  LOCATION: Chennai, Tamil Nadu, India

<span class="t-ok">STATUS: Available · Response time &lt; 24 hours</span>
`,

  status: () => `
<span class="t-ok">[ DEVOS SYSTEM STATUS ]</span>

  CPU:      <span class="t-ok">█████████░</span> 92% — Coding in progress
  MEMORY:   <span class="t-ok">████████░░</span> 80% — Projects loaded
  NETWORK:  <span class="t-ok">██████████</span> Online — Signal strong
  AMBITION: <span class="t-err">██████████</span> CRITICAL — Off the charts
  COFFEE:   <span class="t-info">██████░░░░</span> 60% — Needs refill

  Uptime: ${Math.floor(Math.random() * 999) + 100} days
  Bugs fixed: ${Math.floor(Math.random() * 500) + 100}
  Commits today: ${Math.floor(Math.random() * 20) + 3}
`,

  hire: () => `
<span class="t-ok">╔══════════════════════════════════════╗</span>
<span class="t-ok">║   WHY YOU SHOULD HIRE RITHIK         ║</span>
<span class="t-ok">╚══════════════════════════════════════╝</span>

⚡  CGPA 9.26 — Top academic performer
⚡  4 real internships — IBM, Prodigy, AICTE, Beau Roi
⚡  Full-stack capable — React to Flask to MongoDB
⚡  AI/ML exposure — from Scikit-learn to RAG systems
⚡  Ships real products — 5+ completed projects
⚡  Fast learner, team player, deadline-crusher
⚡  Available 2027 — or now for internship/contract

<span class="t-info">VERDICT: Strong hire. Make the call.</span>
<span class="t-dim">📧 rk3742@srmist.edu.in</span>
`,

  clear: () => { termOutput.innerHTML = ''; return ''; },
  exit:  () => { closeWindow('win-terminal'); return ''; },
};

function printLine(html, className = 't-line') {
  const div = document.createElement('div');
  div.className = className;
  div.innerHTML = html;
  termOutput.appendChild(div);
  termOutput.scrollTop = termOutput.scrollHeight;
}

function runCommand(cmd) {
  const parts = cmd.trim().toLowerCase().split(/\s+/);
  const main = parts[0];
  const arg  = parts[1];

  printLine(`<span class="t-cmd">DEVOS@WASTELAND:~$ ${cmd}</span>`);

  if (main === 'open' && arg) {
    const validWindows = ['about','skills','projects','experience','education','awards','contact','terminal'];
    if (validWindows.includes(arg)) {
      openWindow(arg);
      printLine(`<span class="t-ok">[ OK ] Launching ${arg.toUpperCase()}.exe...</span>`);
    } else {
      printLine(`<span class="t-err">[ ERR ] Unknown module: ${arg}. Valid: ${validWindows.join(', ')}</span>`);
    }
    return;
  }

  if (COMMANDS[main]) {
    const result = COMMANDS[main]();
    if (result) printLine(result);
  } else if (main === '') {
    // empty
  } else {
    printLine(`<span class="t-err">[ ERR ] Command not found: '${main}'. Type <span class="t-ok">help</span> for commands.</span>`);
  }
}

// Command history
let cmdHistory = [];
let histIdx = -1;

if (termInput) {
  // Initial banner
  setTimeout(() => {
    printLine(ASCII_BANNER);
    printLine('');
  }, 100);

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = termInput.value;
      if (val.trim()) {
        cmdHistory.unshift(val);
        histIdx = -1;
      }
      runCommand(val);
      termInput.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (histIdx < cmdHistory.length - 1) {
        histIdx++;
        termInput.value = cmdHistory[histIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx > 0) {
        histIdx--;
        termInput.value = cmdHistory[histIdx];
      } else {
        histIdx = -1;
        termInput.value = '';
      }
    }
  });

  // Click terminal body to focus input
  const termBody = document.querySelector('.terminal-body');
  if (termBody) {
    termBody.addEventListener('click', () => termInput.focus());
  }
}
