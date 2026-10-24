# HARSHIT CHANDNA — Avant-Garde Design Engineer & Systems Architect Portfolio
### *"Systems Over Screens"* // Real-Time WebGL GLSL Shaders, 3D Kinetic Typography & Interactive Systems Playground

An avant-garde, interactive designer and creative technologist portfolio engineered with **custom WebGL GLSL fragment shaders**, **3D proximity-reactive kinetic typography**, **Verlet spring-physics node topology**, and a **browser-native polyphonic Web Audio DSP synthesizer**—all running at 60 FPS with **zero external runtime dependencies**.

---

## ✦ Key Visual Effects & Interactive Systems

1. **Real-Time Multi-Mode WebGL GLSL Shader Studio (`shaders.js`)**
   Switch seamlessly between 4 GPU-accelerated procedural fragment shaders using the bottom dock or keys `1`–`4`:
   - **`01 // Iridescent Plasma`**: Domain-warped fractal Brownian motion (FBM) fluid with mouse-velocity wake and RGB chromatic dispersion.
   - **`02 // Event Horizon`**: Relativistic gravitational lensing that bends spacetime coordinate grids around your cursor with an accretion photon ring.
   - **`03 // Cybernetic LiDAR Topography`**: Procedural 3D elevation isolines with sweeping radar telemetry and wave interference ripples.
   - **`04 // Ferrofluid Magnetics`**: Liquid-metal metaball clusters that spike and gravitate toward pointer movement.

2. **3D Proximity-Reactive Kinetic Typography & Shockwaves**
   - Every character in the hero display headline calculates its Euclidean distance and angle to the cursor in real time, applying 3D `rotateX`, `rotateY`, `translateZ`, and chromatic RGB split shadows.
   - Clicking anywhere triggers an expanding **shockwave ring** across the GLSL shader and bursts velocity particles.

3. **"Systems Over Screens" Force-Directed Node Graph Playground**
   - Interactive Verlet spring-physics graph representing the relational architecture of design tokens, motion choreography, cognitive ergonomics, and shader pipelines.
   - **Drag and slingshot nodes**, inject signal pulses along edges, and inspect live node telemetry in the side panel.

4. **6 Selected Case Studies with Live Procedural Canvases & 3D Specular Tilt**
   - Every project card features 3D perspective tilt, dynamic cursor-tracked specular glare, and its own dedicated 60 FPS procedural canvas animation (*Token Lattice*, *Neural Telemetry*, *Thermal InfraRed Vortex*, *Aether Spatial Rings*, *Lissajous Oscilloscope*, and *Refractive Caustic Prism*).
   - Click any project card to open the **Full-Screen Case Study Architecture Inspector**.

5. **Polyphonic Web Audio API Synthesizer & Chromatic Theme Matrix**
   - Built-in pentatonic harmonic synth (`C4`–`E5`) using dual-oscillator triangle/sine voices and low-pass ADSR envelopes.
   - Live theme switcher (*Acid Obsidian*, *Thermal InfraRed*, *Bioluminescent*, *Stark Titanium*) that updates both CSS design tokens and WebGL shader uniforms simultaneously.

6. **Architectural X-Ray Blueprint Mode (`[X]`) & Command Palette (`Ctrl+K` / `⌘K`)**
   - Press **`X`** (or click `[X] Blueprint` in the top HUD) to reveal architectural wireframe outlines, component namespace tags, and a high-density coordinate grid.
   - Press **`Ctrl+K`** (or **`⌘K`** on macOS) to open the instant Command Palette.

---

## 🚀 How to Run This Portfolio Locally

This project is built with clean, zero-dependency HTML5, CSS3, WebGL/GLSL, and Vanilla ES6+ JavaScript, plus an included lightweight Node.js static server (`server.js`). You can run it locally in seconds using **any** of the methods below.

### Step 1: Clone the Repository & Switch to Branch `t1`

```bash
git clone https://github.com/harshitchandna/website-trial-gemini.git
cd website-trial-gemini
git checkout t1
```

---

### Step 2: Start the Local Server (Choose Any Option)

#### Option A: Using Node.js (Recommended — Uses Included `server.js`)
If you have [Node.js](https://nodejs.org/) installed (no `npm install` needed—zero external packages required):

```bash
npm start
# or directly:
node server.js
```
Then open **[http://localhost:3000](http://localhost:3000)** in your browser.
*(If port `3000` is busy, `server.js` automatically selects the next available port and prints the URL in your terminal.)*

---

#### Option B: Using Python (Built-in HTTP Server)
If you have Python 3 installed:

```bash
python -m http.server 3000
```
Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

#### Option C: Using `npx serve`
```bash
npx serve . -l 3000
```
Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

#### Option D: Using VS Code Live Server OR Direct Browser Open
- **VS Code Live Server**: Open the project folder in VS Code, right-click `index.html`, and select **"Open with Live Server"**.
- **Direct File Launch**: Because all shaders and scripts are self-contained without CORS module restrictions, you can also double-click **`index.html`** directly in your file explorer (Windows Explorer / macOS Finder) to open it in Chrome, Edge, Firefox, or Safari.

---

## ⌨️ Interactive Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| **`1`** | Switch WebGL Shader → `01 // Iridescent Plasma` |
| **`2`** | Switch WebGL Shader → `02 // Gravitational Event Horizon` |
| **`3`** | Switch WebGL Shader → `03 // Cybernetic LiDAR Topography` |
| **`4`** | Switch WebGL Shader → `04 // Ferrofluid Magnetics` |
| **`X`** | Toggle **Architectural X-Ray Blueprint Mode** |
| **`M`** | Toggle **Generative Web Audio Synthesizer** |
| **`Ctrl + K`** / **`⌘ + K`** | Open **Interactive Command Palette** |
| **`ESC`** | Close active Case Study Modal or Command Palette |
| **`Click Anywhere`** | Trigger a relativistic shockwave pulse across the shader canvas |

---

## 📁 Project Structure

```text
├── index.html      # Main semantic layout, custom HC SVG monogram, HUD, and modals
├── styles.css      # Design tokens, 3D kinetic typography, tilt cards, and Blueprint X-Ray mode
├── shaders.js      # Real-time WebGL GLSL fragment shader engine (4 procedural modes + 2D fallback)
├── app.js          # Spring-physics cursor, 3D text proximity math, Verlet node graph & Web Audio synth
├── server.js       # Zero-dependency Node.js local static HTTP server
├── package.json    # NPM scripts (`npm start`, `npm run dev`)
└── README.md       # Documentation and local setup guide
```
