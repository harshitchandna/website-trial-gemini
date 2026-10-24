/**
 * HARSHIT CHANDNA // AVANT-GARDE PORTFOLIO INTERACTION ENGINE
 * - 3D Kinetic Typography & Shockwave Physics
 * - Spring-Damper Magnetic Cursor & Particle Comet Trail
 * - 6 Live Procedural Case-Study Canvases
 * - Force-Directed "Systems Over Screens" Node Graph Playground
 * - Polyphonic Web Audio API DSP Synthesizer
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. CASE STUDY ARCHIVE DATA
  // ==========================================================================
  const CASE_STUDIES = [
    {
      id: 0,
      category: 'DESIGN SYSTEMS ARCHITECTURE // DTU THESIS',
      title: 'Systems Over Screens — Autonomous Multi-Brand Token Compiler',
      overview:
        'Traditional design handoffs fail when organizations scale past dozens of products and platforms. "Systems Over Screens" reimagines UI architecture as a directed acyclic graph (DAG) of semantic tokens, perceptual Oklch color spaces, and physics-based motion primitives that compile directly to CSS Variables, iOS SwiftUI, and Android Jetpack Compose.',
      metrics: [
        { label: 'Token Primitives', value: '1,420+' },
        { label: 'WCAG AAA Auto-Solve', value: '100%' },
        { label: 'Handoff Drift Reduction', value: '-78%' }
      ],
      architecture:
        'Built an AST token compiler with real-time contrast verification, automated dark/high-contrast polarity synthesis, and interactive dependency visualization for 140+ cross-platform UI components.'
    },
    {
      id: 1,
      category: 'ENTERPRISE UX RESEARCH & AI WORKFLOWS',
      title: 'Sprinklr Unified CXM — AI Copilot & Omnichannel Triage',
      overview:
        'Conducted extensive UX/UI systems research and interaction design for enterprise customer experience management. Audited high-stress agent workflows across multi-channel triage queues and designed a context-aware AI Copilot surface that surfaces intent, sentiment trajectory, and one-keystroke resolution macros.',
      metrics: [
        { label: 'Cognitive Load Index', value: '-41%' },
        { label: 'Mean Resolution Time', value: '1.8x Faster' },
        { label: 'System Usability (SUS)', value: '91.4 / 100' }
      ],
      architecture:
        'Designed progressive disclosure telemetry cards, keyboard-first command palettes, and real-time sentiment stream visualizations tailored for mission-critical enterprise operations.'
    },
    {
      id: 2,
      category: 'KINETIC BRAND IDENTITY & GENERATIVE SYSTEM',
      title: 'Team InfraRed — Thermal Telemetry & Motorsport Identity',
      overview:
        'Created a comprehensive visual identity and kinetic design system for Team InfraRed. Drawing inspiration from FLIR thermal signatures, wind-tunnel CFD vortices, and high-RPM telemetry HUDs, the brand scales seamlessly from carbon-fiber livery to real-time broadcast motion graphics.',
      metrics: [
        { label: 'Brand Touchpoints', value: '45+ Assets' },
        { label: 'Custom Glyphs', value: '96 Vector' },
        { label: 'Motion Templates', value: '60 FPS' }
      ],
      architecture:
        'Delivered a parametric logomark system, thermal gradient shader maps, custom geometric display lettering, and modular social/Pit-Wall telemetry templates.'
    },
    {
      id: 3,
      category: 'SPATIAL COMPUTING & GAZE-PINCH CHOREOGRAPHY',
      title: 'Aether OS — Zero-Gravity Spatial Workspace & Depth UI',
      overview:
        'Explored spatial operating system ergonomics beyond flat 2D floating rectangles. Aether OS introduces refractive glassmorphic surfaces with true Z-depth foveated blur, gaze-anticipation micro-highlights, and spring-coupled window snapping in 360-degree space.',
      metrics: [
        { label: 'Gaze Target Accuracy', value: '98.2%' },
        { label: 'Depth Layers', value: '6 Spatial Planes' },
        { label: 'Motion Latency', value: '< 8.3 ms' }
      ],
      architecture:
        'Prototyped spatial depth shaders, angular sizing scales (dmm), and ergonomic pinch-drag inertia curves that eliminate spatial fatigue during extended sessions.'
    },
    {
      id: 4,
      category: 'CREATIVE TECHNOLOGY & AUDIO-VISUAL INSTRUMENT',
      title: 'ChronoSynth — Oscilloscope Lissajous Modular Interface',
      overview:
        'A browser-native polyphonic FM & subtractive synthesizer where sound design and visual geometry are one and the same. Every harmonic ratio and phase offset directly sculpts a glowing 60fps vector Lissajous figure.',
      metrics: [
        { label: 'Audio Polyphony', value: '16 Voices' },
        { label: 'DSP Sample Rate', value: '48 kHz' },
        { label: 'Zero External Deps', value: '100% Native' }
      ],
      architecture:
        'Engineered custom Web Audio API oscillator graphs, biquad resonant filters, and XY phase-scope rendering with tactile rotary dial physics.'
    },
    {
      id: 5,
      category: 'LUXURY EDITORIAL & 3D PRODUCT DIRECTION',
      title: 'Sola Frames & Noir Essence — Refractive Editorial Flagship',
      overview:
        'Digital flagship art direction combining architectural eyewear and luxury fragrance storytelling. Uses real-time WebGL chromatic dispersion and scroll-coupled camera choreography to evoke physical glass, metal, and mist.',
      metrics: [
        { label: 'Avg. Session Dwell', value: '4m 18s' },
        { label: 'Frame Rate Budget', value: '60 FPS Lock' },
        { label: 'Conversion Lift', value: '+34%' }
      ],
      architecture:
        'Combined editorial serif typography, bespoke product photography direction, and interactive caustic light shaders.'
    }
  ];

  // ==========================================================================
  // 2. THEME PALETTES
  // ==========================================================================
  const THEMES = {
    acid: {
      cssA: '#d4ff00',
      cssB: '#00f0ff',
      cssC: '#9e40ff',
      glA: [0.83, 1.0, 0.0],
      glB: [0.0, 0.94, 1.0],
      glC: [0.62, 0.25, 1.0]
    },
    infrared: {
      cssA: '#ff3b6b',
      cssB: '#ff9e00',
      cssC: '#7b2cbf',
      glA: [1.0, 0.23, 0.42],
      glB: [1.0, 0.62, 0.0],
      glC: [0.48, 0.17, 0.75]
    },
    cyber: {
      cssA: '#00f5d4',
      cssB: '#00bbf9',
      cssC: '#f15bb5',
      glA: [0.0, 0.96, 0.83],
      glB: [0.0, 0.73, 0.98],
      glC: [0.95, 0.36, 0.71]
    },
    monochrome: {
      cssA: '#ffffff',
      cssB: '#9ba3b8',
      cssC: '#4a5568',
      glA: [0.95, 0.96, 0.98],
      glB: [0.55, 0.6, 0.68],
      glC: [0.28, 0.32, 0.38]
    }
  };

  let currentTheme = THEMES.acid;

  // ==========================================================================
  // 3. GENERATIVE WEB AUDIO SYNTHESIZER
  // ==========================================================================
  class HarmonicSynth {
    constructor() {
      this.ctx = null;
      this.enabled = false;
      this.scale = [261.63, 293.66, 349.23, 392.0, 440.0, 523.25, 587.33, 659.25];
      this.noteIndex = 0;
    }

    ensureContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.ensureContext();
      this.enabled = !this.enabled;
      if (this.enabled) {
        this.playChord([261.63, 392.0, 523.25], 0.35);
      }
      return this.enabled;
    }

    playNote(freq, duration = 0.38, force = false) {
      if (!this.enabled && !force) return;
      this.ensureContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc1.type = 'triangle';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq * 1.5, now); // Fifth harmonic shimmer

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 4.5, now);
      filter.frequency.exponentialRampToValueAtTime(freq * 1.2, now + duration);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration + 0.02);
      osc2.stop(now + duration + 0.02);
    }

    playHoverChime() {
      if (!this.enabled) return;
      const freq = this.scale[this.noteIndex % this.scale.length];
      this.noteIndex++;
      this.playNote(freq, 0.18, false);
    }

    playSubPulse() {
      if (!this.enabled) return;
      this.ensureContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.exponentialRampToValueAtTime(36, now + 0.45);
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.48);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    }

    playChord(freqs, duration = 0.45) {
      freqs.forEach((f, idx) => {
        setTimeout(() => this.playNote(f, duration, true), idx * 45);
      });
    }
  }

  const synth = new HarmonicSynth();

  // ==========================================================================
  // 4. INITIALIZE WEBGL SHADER STUDIO & PRELOADER
  // ==========================================================================
  const shaderCanvas = document.getElementById('shader-canvas');
  const shaderStudio = new window.ShaderStudio(shaderCanvas);

  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloader-bar');
  const preloaderCounter = document.getElementById('preloader-counter');
  const preloaderStatus = document.getElementById('preloader-status');

  const bootMessages = [
    'COMPILING GLSL FRAGMENT PIPELINE...',
    'CALIBRATING VERLET SPRING TOPOLOGY...',
    'SYNTHESIZING OKLCH DESIGN TOKENS...',
    'SYSTEMS OVER SCREENS // READY'
  ];

  let loadProgress = 0;
  const bootInterval = setInterval(() => {
    loadProgress += Math.floor(Math.random() * 14) + 9;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(bootInterval);
      setTimeout(() => {
        preloader.classList.add('is-complete');
        shaderStudio.triggerShockwave(0.5, 0.5);
      }, 260);
    }
    if (preloaderBar) preloaderBar.style.width = `${loadProgress}%`;
    if (preloaderCounter) preloaderCounter.textContent = `${String(loadProgress).padStart(3, '0')}%`;
    if (preloaderStatus) {
      const msgIdx = Math.min(Math.floor((loadProgress / 100) * bootMessages.length), bootMessages.length - 1);
      preloaderStatus.textContent = bootMessages[msgIdx];
    }
  }, 65);

  // ==========================================================================
  // 5. POINTER PHYSICS, COMET TRAIL & MAGNETIC ELEMENTS
  // ==========================================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorLabel = document.getElementById('cursor-label');
  const trailCanvas = document.getElementById('trail-canvas');
  const trailCtx = trailCanvas.getContext('2d');

  function resizeTrailCanvas() {
    trailCanvas.width = window.innerWidth;
    trailCanvas.height = window.innerHeight;
  }
  resizeTrailCanvas();
  window.addEventListener('resize', resizeTrailCanvas, { passive: true });

  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5,
    prevX: window.innerWidth * 0.5,
    prevY: window.innerHeight * 0.5,
    ringX: window.innerWidth * 0.5,
    ringY: window.innerHeight * 0.5,
    vx: 0,
    vy: 0,
    speed: 0
  };

  const particles = [];

  function spawnParticles(x, y, count = 14) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const spd = 1.5 + Math.random() * 5.5;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        radius: 1.5 + Math.random() * 2.5,
        alpha: 1.0,
        color: i % 2 === 0 ? currentTheme.cssA : currentTheme.cssB
      });
    }
  }

  window.addEventListener(
    'pointermove',
    (e) => {
      pointer.prevX = pointer.x;
      pointer.prevY = pointer.y;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.vx = pointer.x - pointer.prevX;
      pointer.vy = pointer.y - pointer.prevY;
      pointer.speed = Math.hypot(pointer.vx, pointer.vy);

      const normX = pointer.x / Math.max(window.innerWidth, 1);
      const normY = pointer.y / Math.max(window.innerHeight, 1);
      shaderStudio.setPointer(normX, normY, pointer.vx * 0.015, pointer.vy * 0.015);

      if (pointer.speed > 3.5 && particles.length < 90) {
        particles.push({
          x: pointer.x,
          y: pointer.y,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          radius: Math.min(3.2, 1.0 + pointer.speed * 0.06),
          alpha: 0.75,
          color: currentTheme.cssA
        });
      }
    },
    { passive: true }
  );

  window.addEventListener('pointerdown', (e) => {
    const normX = e.clientX / Math.max(window.innerWidth, 1);
    const normY = e.clientY / Math.max(window.innerHeight, 1);
    shaderStudio.triggerShockwave(normX, normY);
    spawnParticles(e.clientX, e.clientY, 18);
    synth.playSubPulse();
  });

  // Hover cursor state & magnetic buttons
  document.querySelectorAll('[data-cursor]').forEach((el) => {
    el.addEventListener('pointerenter', () => {
      const label = el.getAttribute('data-cursor');
      if (label && cursorRing && cursorLabel) {
        cursorLabel.textContent = label;
        cursorRing.classList.add('is-expanded');
      }
      synth.playHoverChime();
    });
    el.addEventListener('pointerleave', () => {
      if (cursorRing) cursorRing.classList.remove('is-expanded');
    });
  });

  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate3d(${dx * 0.24}px, ${dy * 0.28}px, 0)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = 'translate3d(0, 0, 0)';
    });
  });

  // ==========================================================================
  // 6. 3D KINETIC HERO TYPOGRAPHY ENGINE
  // ==========================================================================
  const kineticChars = [];
  document.querySelectorAll('[data-kinetic-word]').forEach((wordEl) => {
    const text = wordEl.textContent || '';
    wordEl.textContent = '';
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.className = 'kinetic-char';
      span.textContent = text[i];
      wordEl.appendChild(span);
      kineticChars.push({ el: span, cx: 0, cy: 0 });
    }
  });

  function updateKineticCharCenters() {
    kineticChars.forEach((item) => {
      const rect = item.el.getBoundingClientRect();
      item.cx = rect.left + rect.width * 0.5;
      item.cy = rect.top + rect.height * 0.5;
    });
  }
  setTimeout(updateKineticCharCenters, 150);
  window.addEventListener('resize', updateKineticCharCenters, { passive: true });
  window.addEventListener('scroll', updateKineticCharCenters, { passive: true });

  // ==========================================================================
  // 7. VELOCITY-REACTIVE INFINITE MARQUEE & SCROLL TELEMETRY
  // ==========================================================================
  const marqueeTrack = document.getElementById('marquee-track');
  let marqueeOffset = 0;
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;

  window.addEventListener(
    'scroll',
    () => {
      const currentY = window.scrollY;
      scrollVelocity = currentY - lastScrollY;
      lastScrollY = currentY;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      shaderStudio.setScroll(currentY / maxScroll);
    },
    { passive: true }
  );

  // ==========================================================================
  // 8. 6 LIVE PROCEDURAL PROJECT ARTWORK CANVASES & 3D CARD TILT
  // ==========================================================================
  const projectCanvases = [];
  document.querySelectorAll('.project-canvas').forEach((canvas) => {
    const type = canvas.getAttribute('data-art-type');
    const ctx = canvas.getContext('2d');
    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = Math.max(300, Math.floor(rect.width));
      canvas.height = Math.max(200, Math.floor(rect.height));
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });
    projectCanvases.push({ canvas, ctx, type });
  });

  function renderProjectArtworks(timeSec) {
    projectCanvases.forEach(({ canvas, ctx, type }) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Subtle grid background
      ctx.fillStyle = '#070910';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 1;
      for (let gx = 0; gx < w; gx += 36) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, h);
        ctx.stroke();
      }

      if (type === 'token-lattice') {
        // Isometric 3D token dependency matrix
        const cols = 6;
        const rows = 4;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = (w / (cols + 1)) * (c + 1);
            const y = (h / (rows + 1)) * (r + 1) + Math.sin(timeSec * 2.2 + c * 0.7 + r * 0.9) * 10;
            if (c < cols - 1) {
              const nx = (w / (cols + 1)) * (c + 2);
              const ny = (h / (rows + 1)) * (r + 1) + Math.sin(timeSec * 2.2 + (c + 1) * 0.7 + r * 0.9) * 10;
              ctx.strokeStyle = 'rgba(212, 255, 0, 0.25)';
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(nx, ny);
              ctx.stroke();
            }
            ctx.fillStyle = (c + r) % 2 === 0 ? currentTheme.cssA : currentTheme.cssB;
            ctx.beginPath();
            ctx.arc(x, y, 4.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else if (type === 'neural-telemetry') {
        // Multi-stream AI waveform triage
        for (let line = 0; line < 4; line++) {
          ctx.beginPath();
          ctx.strokeStyle = line === 0 ? currentTheme.cssA : line === 1 ? currentTheme.cssB : 'rgba(158, 64, 255, 0.6)';
          ctx.lineWidth = line === 0 ? 2.2 : 1.3;
          for (let x = 0; x <= w; x += 8) {
            const y =
              h * 0.5 +
              Math.sin(x * 0.022 + timeSec * (2.5 + line * 0.4) + line) * (28 + line * 10) *
              Math.cos(x * 0.008 - timeSec);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (type === 'infrared-spectrum') {
        // Thermal aerodynamic concentric vortex
        const cx = w * 0.5;
        const cy = h * 0.5;
        for (let i = 1; i <= 7; i++) {
          ctx.beginPath();
          ctx.strokeStyle = i % 2 === 0 ? '#ff3b6b' : '#ff9e00';
          ctx.lineWidth = 1.6;
          const rad = i * 16 + Math.sin(timeSec * 3 + i) * 4;
          ctx.ellipse(cx, cy, rad * 1.45, rad * 0.78, Math.sin(timeSec * 0.6 + i * 0.2) * 0.4, 0, Math.PI * 2);
          ctx.stroke();
        }
      } else if (type === 'spatial-rings') {
        // Gyroscopic 3D spatial planes
        const cx = w * 0.5;
        const cy = h * 0.5;
        for (let i = 0; i < 5; i++) {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(timeSec * 0.35 * (i % 2 === 0 ? 1 : -1) + i * 0.5);
          ctx.strokeStyle = i === 0 ? currentTheme.cssA : 'rgba(0, 240, 255, 0.45)';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(-70 + i * 8, -42 + i * 5, 140 - i * 16, 84 - i * 10);
          ctx.restore();
        }
      } else if (type === 'lissajous-synth') {
        // Harmonic Lissajous curve
        const cx = w * 0.5;
        const cy = h * 0.5;
        ctx.beginPath();
        ctx.strokeStyle = currentTheme.cssA;
        ctx.lineWidth = 1.8;
        for (let t = 0; t < Math.PI * 2; t += 0.02) {
          const x = cx + Math.sin(3 * t + timeSec * 1.6) * (w * 0.32);
          const y = cy + Math.sin(4 * t) * (h * 0.34);
          if (t === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else if (type === 'caustic-prism') {
        // Refractive prism rays
        const cx = w * 0.5;
        const cy = h * 0.52;
        const colors = ['#ff3b6b', '#d4ff00', '#00f0ff', '#9e40ff'];
        colors.forEach((col, idx) => {
          ctx.beginPath();
          ctx.strokeStyle = col;
          ctx.lineWidth = 2;
          const angle = -0.35 + idx * 0.22 + Math.sin(timeSec * 1.8 + idx) * 0.08;
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(angle) * w * 0.45, cy + Math.sin(angle) * h * 0.45);
          ctx.stroke();
        });
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 48);
        ctx.lineTo(cx + 52, cy + 38);
        ctx.lineTo(cx - 52, cy + 38);
        ctx.closePath();
        ctx.stroke();
      }
    });
  }

  // 3D Card Tilt & Modal Trigger
  const caseModal = document.getElementById('case-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalOverview = document.getElementById('modal-overview');
  const modalMetrics = document.getElementById('modal-metrics');
  const modalArchitecture = document.getElementById('modal-architecture');

  function openCaseModal(id) {
    const data = CASE_STUDIES.find((c) => c.id === Number(id));
    if (!data || !caseModal) return;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalOverview.textContent = data.overview;
    modalArchitecture.textContent = data.architecture;
    modalMetrics.innerHTML = data.metrics
      .map(
        (m) => `
        <div class="metric-box">
          <span class="metric-label">${m.label}</span>
          <span class="metric-val">${m.value}</span>
        </div>`
      )
      .join('');
    caseModal.classList.add('is-open');
    synth.playChord([349.23, 440.0, 523.25], 0.35);
  }

  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotY = ((x / rect.width) - 0.5) * 9;
      const rotX = (0.5 - (y / rect.height)) * 9;
      card.style.transform = `perspective(950px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = 'perspective(950px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });

    card.addEventListener('click', () => {
      openCaseModal(card.getAttribute('data-project-id'));
    });
  });

  document.getElementById('modal-close')?.addEventListener('click', () => {
    caseModal?.classList.remove('is-open');
  });
  caseModal?.addEventListener('click', (e) => {
    if (e.target === caseModal) caseModal.classList.remove('is-open');
  });

  // Project Discipline Filter Chips
  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.getAttribute('data-filter');
      document.querySelectorAll('.project-card').forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // ==========================================================================
  // 9. "SYSTEMS OVER SCREENS" FORCE-DIRECTED NODE GRAPH PLAYGROUND
  // ==========================================================================
  const graphCanvas = document.getElementById('node-graph-canvas');
  const graphCtx = graphCanvas ? graphCanvas.getContext('2d') : null;

  const graphNodes = [
    {
      id: '01',
      label: 'Semantic Token Graph',
      desc: 'Primitive Oklch color spaces, fluid typographic ratios, and spring constants compile into context-aware semantic tokens.',
      edgesCount: '5 Links',
      latency: '0.4 ms',
      coverage: '99.4%',
      tension: '0.82 N',
      x: 0.5,
      y: 0.5,
      vx: 0,
      vy: 0,
      r: 24
    },
    {
      id: '02',
      label: 'Motion Choreography',
      desc: 'Continuous spring-damper physics replace linear keyframes so interrupted gestures preserve real momentum.',
      edgesCount: '4 Links',
      latency: '0.7 ms',
      coverage: '98.1%',
      tension: '0.94 N',
      x: 0.26,
      y: 0.28,
      vx: 0,
      vy: 0,
      r: 19
    },
    {
      id: '03',
      label: 'GLSL Shader Pipeline',
      desc: 'Custom fragment shaders offload atmospheric lighting, fluid distortion, and elevation contours directly to the GPU.',
      edgesCount: '3 Links',
      latency: '0.3 ms',
      coverage: '100%',
      tension: '1.12 N',
      x: 0.74,
      y: 0.26,
      vx: 0,
      vy: 0,
      r: 20
    },
    {
      id: '04',
      label: 'Cognitive Ergonomics',
      desc: 'Information density and progressive disclosure calibrated from enterprise UX research to minimize operator fatigue.',
      edgesCount: '3 Links',
      latency: '0.5 ms',
      coverage: '97.8%',
      tension: '0.76 N',
      x: 0.22,
      y: 0.72,
      vx: 0,
      vy: 0,
      r: 18
    },
    {
      id: '05',
      label: 'Spatial Depth Optics',
      desc: 'Refractive glass elevation, specular glare tracking, and Z-axis parallax establish tactile hierarchy.',
      edgesCount: '4 Links',
      latency: '0.6 ms',
      coverage: '99.0%',
      tension: '0.89 N',
      x: 0.76,
      y: 0.72,
      vx: 0,
      vy: 0,
      r: 19
    },
    {
      id: '06',
      label: 'Sonic Micro-Feedback',
      desc: 'Procedural Web Audio harmonic synthesis gives tactile acoustic confirmation to visual state transitions.',
      edgesCount: '2 Links',
      latency: '0.2 ms',
      coverage: '96.5%',
      tension: '0.68 N',
      x: 0.5,
      y: 0.18,
      vx: 0,
      vy: 0,
      r: 16
    },
    {
      id: '07',
      label: 'Automated Accessibility',
      desc: 'Real-time perceptual contrast solvers guarantee WCAG AAA legibility across dynamic shader backgrounds.',
      edgesCount: '3 Links',
      latency: '0.4 ms',
      coverage: '100%',
      tension: '0.91 N',
      x: 0.5,
      y: 0.82,
      vx: 0,
      vy: 0,
      r: 17
    }
  ];

  const graphEdges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 6],
    [1, 5], [2, 5], [1, 3], [2, 4], [3, 6], [4, 6]
  ];

  let selectedNode = graphNodes[0];
  let draggedNode = null;
  let signalPulseT = 0;

  function resizeGraphCanvas() {
    if (!graphCanvas) return;
    const rect = graphCanvas.parentElement.getBoundingClientRect();
    graphCanvas.width = Math.max(320, Math.floor(rect.width));
    graphCanvas.height = Math.max(420, Math.floor(rect.height));
  }
  resizeGraphCanvas();
  window.addEventListener('resize', resizeGraphCanvas, { passive: true });

  function selectGraphNode(node) {
    selectedNode = node;
    const idEl = document.getElementById('node-inspect-id');
    const titleEl = document.getElementById('node-inspect-title');
    const descEl = document.getElementById('node-inspect-desc');
    const edgesEl = document.getElementById('node-inspect-edges');
    const latEl = document.getElementById('node-inspect-latency');
    const covEl = document.getElementById('node-inspect-coverage');
    const tenEl = document.getElementById('node-inspect-tension');

    if (idEl) idEl.textContent = `NODE // ${node.id} [SELECTED]`;
    if (titleEl) titleEl.textContent = node.label;
    if (descEl) descEl.textContent = node.desc;
    if (edgesEl) edgesEl.textContent = node.edgesCount;
    if (latEl) latEl.textContent = node.latency;
    if (covEl) covEl.textContent = node.coverage;
    if (tenEl) tenEl.textContent = node.tension;
    synth.playNote(349.23 + Number(node.id) * 45, 0.25);
  }

  if (graphCanvas) {
    graphCanvas.addEventListener('pointerdown', (e) => {
      const rect = graphCanvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width;
      const my = (e.clientY - rect.top) / rect.height;

      for (const node of graphNodes) {
        const dx = (node.x - mx) * rect.width;
        const dy = (node.y - my) * rect.height;
        if (Math.hypot(dx, dy) <= node.r + 12) {
          draggedNode = node;
          selectGraphNode(node);
          break;
        }
      }
    });

    window.addEventListener('pointermove', (e) => {
      if (!draggedNode || !graphCanvas) return;
      const rect = graphCanvas.getBoundingClientRect();
      draggedNode.x = Math.min(0.9, Math.max(0.1, (e.clientX - rect.left) / rect.width));
      draggedNode.y = Math.min(0.88, Math.max(0.12, (e.clientY - rect.top) / rect.height));
    });

    window.addEventListener('pointerup', () => {
      draggedNode = null;
    });
  }

  document.getElementById('btn-graph-pulse')?.addEventListener('click', () => {
    signalPulseT = 0.01;
    synth.playChord([261.63, 392.0, 523.25, 659.25], 0.4);
  });

  document.getElementById('btn-graph-scramble')?.addEventListener('click', () => {
    graphNodes.forEach((n, idx) => {
      if (idx !== 0) {
        n.vx += (Math.random() - 0.5) * 0.025;
        n.vy += (Math.random() - 0.5) * 0.025;
      }
    });
    synth.playNote(440, 0.3);
  });

  function renderNodeGraph(timeSec) {
    if (!graphCtx || !graphCanvas) return;
    const w = graphCanvas.width;
    const h = graphCanvas.height;
    graphCtx.clearRect(0, 0, w, h);

    // Spring physics step
    for (let i = 0; i < graphNodes.length; i++) {
      const a = graphNodes[i];
      for (let j = i + 1; j < graphNodes.length; j++) {
        const b = graphNodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) + 0.001;
        if (dist < 0.28) {
          const force = (0.28 - dist) * 0.003;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          if (a !== draggedNode) { a.vx -= fx; a.vy -= fy; }
          if (b !== draggedNode) { b.vx += fx; b.vy += fy; }
        }
      }
    }

    graphEdges.forEach(([i, j]) => {
      const a = graphNodes[i];
      const b = graphNodes[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy) + 0.001;
      const target = 0.28;
      const force = (dist - target) * 0.004;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      if (a !== draggedNode) { a.vx += fx; a.vy += fy; }
      if (b !== draggedNode) { b.vx -= fx; b.vy -= fy; }
    });

    graphNodes.forEach((n, idx) => {
      if (n !== draggedNode) {
        // Gentle center gravity for root node
        if (idx === 0) {
          n.vx += (0.5 - n.x) * 0.01;
          n.vy += (0.5 - n.y) * 0.01;
        }
        n.x = Math.min(0.9, Math.max(0.1, n.x + n.vx));
        n.y = Math.min(0.88, Math.max(0.14, n.y + n.vy));
        n.vx *= 0.88;
        n.vy *= 0.88;
      }
    });

    signalPulseT = (signalPulseT + 0.012) % 1;

    // Draw edges & traveling data packets
    graphEdges.forEach(([i, j], edgeIdx) => {
      const a = graphNodes[i];
      const b = graphNodes[j];
      const ax = a.x * w;
      const ay = a.y * h;
      const bx = b.x * w;
      const by = b.y * h;

      graphCtx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
      graphCtx.lineWidth = 1.2;
      graphCtx.beginPath();
      graphCtx.moveTo(ax, ay);
      graphCtx.lineTo(bx, by);
      graphCtx.stroke();

      // Traveling signal packet
      const t = (signalPulseT + edgeIdx * 0.13) % 1;
      const px = ax + (bx - ax) * t;
      const py = ay + (by - ay) * t;
      graphCtx.fillStyle = currentTheme.cssB;
      graphCtx.beginPath();
      graphCtx.arc(px, py, 3, 0, Math.PI * 2);
      graphCtx.fill();
    });

    // Draw nodes
    graphNodes.forEach((node) => {
      const nx = node.x * w;
      const ny = node.y * h;
      const isSelected = node === selectedNode;

      if (isSelected) {
        graphCtx.strokeStyle = currentTheme.cssA;
        graphCtx.lineWidth = 1.5;
        graphCtx.beginPath();
        graphCtx.arc(nx, ny, node.r + 7 + Math.sin(timeSec * 4) * 2, 0, Math.PI * 2);
        graphCtx.stroke();
      }

      graphCtx.fillStyle = isSelected ? currentTheme.cssA : '#121624';
      graphCtx.strokeStyle = isSelected ? currentTheme.cssA : currentTheme.cssB;
      graphCtx.lineWidth = 2;
      graphCtx.beginPath();
      graphCtx.arc(nx, ny, node.r, 0, Math.PI * 2);
      graphCtx.fill();
      graphCtx.stroke();

      graphCtx.fillStyle = isSelected ? '#05060a' : '#f4f6fb';
      graphCtx.font = '700 10px "JetBrains Mono", monospace';
      graphCtx.textAlign = 'center';
      graphCtx.textBaseline = 'middle';
      graphCtx.fillText(node.id, nx, ny);

      graphCtx.fillStyle = '#d8deed';
      graphCtx.font = '500 12px "Space Grotesk", sans-serif';
      graphCtx.fillText(node.label, nx, ny + node.r + 16);
    });
  }

  // ==========================================================================
  // 10. UI CONTROLS, SHADER DOCK, SYNTH PADS, PALETTE & COMMAND PALETTE
  // ==========================================================================
  function switchShaderMode(modeIndex) {
    shaderStudio.setMode(modeIndex);
    document.querySelectorAll('.shader-pill').forEach((btn) => {
      btn.classList.toggle('active', Number(btn.getAttribute('data-shader-mode')) === modeIndex);
    });
    shaderStudio.triggerShockwave(0.5, 0.5);
    synth.playNote(261.63 + modeIndex * 65, 0.3);
  }

  document.querySelectorAll('.shader-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      switchShaderMode(Number(btn.getAttribute('data-shader-mode')));
    });
  });

  // Blueprint X-Ray Mode
  const blueprintBtn = document.getElementById('btn-blueprint');
  function toggleBlueprintMode() {
    document.body.classList.toggle('blueprint-mode');
    const active = document.body.classList.contains('blueprint-mode');
    blueprintBtn?.classList.toggle('is-active', active);
    synth.playNote(active ? 523.25 : 349.23, 0.22);
  }
  blueprintBtn?.addEventListener('click', toggleBlueprintMode);

  // Audio Synth Button
  const audioBtn = document.getElementById('btn-audio');
  const audioLabel = document.getElementById('audio-label');
  function toggleAudioSynth() {
    const on = synth.toggle();
    audioBtn?.classList.toggle('is-active', on);
    if (audioLabel) audioLabel.textContent = on ? 'SYNTH: ON' : 'SYNTH: OFF';
  }
  audioBtn?.addEventListener('click', toggleAudioSynth);

  // Hero Shockwave Button
  document.getElementById('btn-hero-shockwave')?.addEventListener('click', () => {
    shaderStudio.triggerShockwave(0.5, 0.5);
    spawnParticles(window.innerWidth * 0.5, window.innerHeight * 0.5, 28);
    synth.playChord([261.63, 349.23, 440.0, 587.33], 0.45);
  });

  // Synth Pad Grid (Always plays note when clicked!)
  document.querySelectorAll('.synth-pad').forEach((pad) => {
    const triggerPad = (forceSound) => {
      const freq = parseFloat(pad.getAttribute('data-freq') || '440');
      synth.playNote(freq, 0.42, forceSound);
      pad.classList.add('is-playing');
      setTimeout(() => pad.classList.remove('is-playing'), 220);
      const rect = pad.getBoundingClientRect();
      shaderStudio.triggerShockwave(
        (rect.left + rect.width * 0.5) / window.innerWidth,
        (rect.top + rect.height * 0.5) / window.innerHeight
      );
    };
    pad.addEventListener('click', () => triggerPad(true));
    pad.addEventListener('pointerenter', () => {
      if (synth.enabled) triggerPad(false);
    });
  });

  // Theme Palette Switcher
  document.querySelectorAll('.palette-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-theme');
      const theme = THEMES[key];
      if (!theme) return;
      currentTheme = theme;
      document.querySelectorAll('.palette-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      document.documentElement.style.setProperty('--accent-a', theme.cssA);
      document.documentElement.style.setProperty('--accent-b', theme.cssB);
      document.documentElement.style.setProperty('--accent-c', theme.cssC);
      shaderStudio.setPalette(theme.glA, theme.glB, theme.glC);
      shaderStudio.triggerShockwave(0.5, 0.5);
      synth.playChord([349.23, 440.0, 659.25], 0.35);
    });
  });

  // Shader Specular Intensity Slider
  const sliderIntensity = document.getElementById('slider-intensity');
  const intensityVal = document.getElementById('intensity-val');
  sliderIntensity?.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    shaderStudio.intensity = val;
    if (intensityVal) intensityVal.textContent = val.toFixed(2);
  });

  // Copy Email Button
  const copyBtn = document.getElementById('btn-copy-email');
  const copyText = document.getElementById('copy-email-text');
  copyBtn?.addEventListener('click', () => {
    const email = copyBtn.getAttribute('data-email') || 'harshitchandna@dtu.ac.in';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).catch(() => {});
    }
    if (copyText) {
      copyText.textContent = 'COPIED TO CLIPBOARD // harshitchandna@dtu.ac.in';
      setTimeout(() => {
        copyText.textContent = email;
      }, 2400);
    }
    synth.playChord([440.0, 523.25, 659.25], 0.35);
  });

  // Command Palette (Ctrl+K / Cmd+K)
  const cmdModal = document.getElementById('cmd-modal');
  const cmdInput = document.getElementById('cmd-input');
  function openCmdPalette() {
    cmdModal?.classList.add('is-open');
    setTimeout(() => cmdInput?.focus(), 50);
  }
  function closeCmdPalette() {
    cmdModal?.classList.remove('is-open');
  }
  document.getElementById('btn-cmd')?.addEventListener('click', openCmdPalette);
  cmdModal?.addEventListener('click', (e) => {
    if (e.target === cmdModal) closeCmdPalette();
  });

  cmdInput?.addEventListener('input', () => {
    const q = cmdInput.value.toLowerCase();
    document.querySelectorAll('.cmd-item').forEach((item) => {
      const text = item.textContent?.toLowerCase() || '';
      item.style.display = text.includes(q) ? 'flex' : 'none';
    });
  });

  document.querySelectorAll('.cmd-item').forEach((item) => {
    item.addEventListener('click', () => {
      const cmd = item.getAttribute('data-cmd');
      if (cmd?.startsWith('shader-')) {
        switchShaderMode(Number(cmd.split('-')[1]));
      } else if (cmd === 'toggle-blueprint') {
        toggleBlueprintMode();
      } else if (cmd === 'toggle-audio') {
        toggleAudioSynth();
      } else if (cmd === 'shockwave') {
        shaderStudio.triggerShockwave(0.5, 0.5);
      } else if (cmd === 'goto-work') {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cmd === 'goto-systems') {
        document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
      }
      closeCmdPalette();
    });
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdModal?.classList.contains('is-open')) closeCmdPalette();
      else openCmdPalette();
      return;
    }
    if (e.key === 'Escape') {
      caseModal?.classList.remove('is-open');
      closeCmdPalette();
      return;
    }
    if (document.activeElement?.tagName === 'INPUT') return;

    if (e.key === '1') switchShaderMode(0);
    else if (e.key === '2') switchShaderMode(1);
    else if (e.key === '3') switchShaderMode(2);
    else if (e.key === '4') switchShaderMode(3);
    else if (e.key.toLowerCase() === 'x') toggleBlueprintMode();
    else if (e.key.toLowerCase() === 'm') toggleAudioSynth();
  });

  // ==========================================================================
  // 11. MASTER 60FPS ANIMATION & CHOREOGRAPHY LOOP
  // ==========================================================================
  const hudFps = document.getElementById('hud-fps');
  const hudVel = document.getElementById('hud-vel');
  const hudCoords = document.getElementById('hud-coords');

  function animate(now) {
    const timeSec = now * 0.001;

    // 1. Render WebGL GLSL Fragment Shader
    shaderStudio.render(now);

    // 2. Update Spring Cursor & Comet Trail
    pointer.ringX += (pointer.x - pointer.ringX) * 0.18;
    pointer.ringY += (pointer.y - pointer.ringY) * 0.18;
    pointer.speed *= 0.9;

    if (cursorDot) {
      cursorDot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;
    }
    if (cursorRing) {
      cursorRing.style.transform = `translate3d(${pointer.ringX}px, ${pointer.ringY}px, 0)`;
    }

    trailCtx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.026;
      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }
      trailCtx.globalAlpha = p.alpha;
      trailCtx.fillStyle = p.color;
      trailCtx.beginPath();
      trailCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      trailCtx.fill();
    }
    trailCtx.globalAlpha = 1;

    // 3. 3D Kinetic Typography Proximity Deformation
    for (let i = 0; i < kineticChars.length; i++) {
      const item = kineticChars[i];
      const dx = pointer.x - item.cx;
      const dy = pointer.y - item.cy;
      const dist = Math.hypot(dx, dy);
      const maxRadius = 260;

      if (dist < maxRadius) {
        const power = 1 - dist / maxRadius;
        const rotY = (dx / maxRadius) * 28 * power;
        const rotX = (-dy / maxRadius) * 28 * power;
        const liftZ = power * 34;
        const shift = power * 4.5;
        item.el.style.transform = `translate3d(0, ${(-power * 8).toFixed(1)}px, ${liftZ.toFixed(1)}px) rotateX(${rotX.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg)`;
        item.el.style.textShadow = `${shift.toFixed(1)}px 0 0 ${currentTheme.cssB}, ${(-shift).toFixed(1)}px 0 0 ${currentTheme.cssC}`;
      } else {
        item.el.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)';
        item.el.style.textShadow = 'none';
      }
    }

    // 4. Velocity-Reactive Infinite Marquee
    if (marqueeTrack) {
      const boost = Math.min(Math.max(scrollVelocity * 0.15, -6), 6);
      marqueeOffset -= 0.9 + Math.abs(boost);
      scrollVelocity *= 0.9;
      const halfWidth = marqueeTrack.scrollWidth * 0.5;
      if (halfWidth > 0 && Math.abs(marqueeOffset) >= halfWidth) {
        marqueeOffset = 0;
      }
      marqueeTrack.style.transform = `translate3d(${marqueeOffset}px, 0, 0) skewX(${(-boost * 1.8).toFixed(2)}deg)`;
    }

    // 5. Render Project Procedural Canvases & Node Graph
    renderProjectArtworks(timeSec);
    renderNodeGraph(timeSec);

    // 6. Update Telemetry Readouts
    if (hudFps) hudFps.textContent = String(shaderStudio.fps);
    if (hudVel) hudVel.textContent = pointer.speed.toFixed(2);
    if (hudCoords) {
      const nx = (pointer.x / Math.max(window.innerWidth, 1)).toFixed(2);
      const ny = (pointer.y / Math.max(window.innerHeight, 1)).toFixed(2);
      hudCoords.textContent = `${nx}, ${ny}`;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
