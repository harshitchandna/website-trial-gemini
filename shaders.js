/**
 * HARSHIT CHANDNA // REAL-TIME WEBGL GLSL SHADER STUDIO
 * Four switchable procedural fragment shader architectures:
 *   Mode 0: IRIDESCENT PLASMA (Domain-Warped FBM + Chromatic Dispersion)
 *   Mode 1: EVENT HORIZON (Relativistic Gravitational Lensing + Spacetime Grid)
 *   Mode 2: LIDAR TOPOGRAPHY (3D Elevation Isolines + Pulse Wave Interference)
 *   Mode 3: FERROFLUID MAGNETICS (Metaball Liquid Metal + Cursor Dipole Field)
 */

(function () {
  'use strict';

  const VERTEX_SHADER_SRC = `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const FRAGMENT_SHADER_SRC = `
    precision highp float;

    varying vec2 v_uv;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform vec2 u_velocity;
    uniform vec3 u_shockwave; // xy = normalized origin, z = age in seconds
    uniform float u_scroll;
    uniform int u_mode;
    uniform vec3 u_accentA;
    uniform vec3 u_accentB;
    uniform vec3 u_accentC;
    uniform float u_intensity;

    // 2D Hash & Simplex-style Value Noise
    float hash21(vec2 p) {
      p = fract(p * vec2(234.34, 435.345));
      p += dot(p, p + 34.23);
      return fract(p.x * p.y);
    }

    vec2 hash22(vec2 p) {
      vec3 a = fract(p.xyx * vec3(123.34, 234.34, 345.65));
      a += dot(a, a + 34.45);
      return fract(vec2(a.x * a.y, a.y * a.z));
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float a = hash21(i);
      float b = hash21(i + vec2(1.0, 0.0));
      float c = hash21(i + vec2(0.0, 1.0));
      float d = hash21(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    mat2 rot(float a) {
      float s = sin(a), c = cos(a);
      return mat2(c, -s, s, c);
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float amp = 0.5;
      mat2 m = rot(0.52);
      for (int i = 0; i < 5; i++) {
        v += amp * noise(p);
        p = m * p * 2.03 + vec2(1.7, 9.2);
        amp *= 0.5;
      }
      return v;
    }

    // Cosine palette generator
    vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
      return a + b * cos(6.28318 * (c * t + d));
    }

    void main() {
      vec2 uv = v_uv;
      float aspect = u_resolution.x / max(u_resolution.y, 1.0);
      vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
      vec2 mouseP = (u_mouse - 0.5) * vec2(aspect, 1.0);

      // Mouse distance and velocity field
      vec2 toMouse = p - mouseP;
      float mouseDist = length(toMouse);
      float velMag = clamp(length(u_velocity) * 2.5, 0.0, 1.5);
      float mouseField = exp(-mouseDist * (3.2 - min(velMag, 1.6)));

      // Shockwave ring displacement
      float waveEffect = 0.0;
      if (u_shockwave.z > 0.0 && u_shockwave.z < 3.5) {
        vec2 shockP = (u_shockwave.xy - 0.5) * vec2(aspect, 1.0);
        float dShock = length(p - shockP);
        float radius = u_shockwave.z * 1.15;
        float ring = exp(-pow((dShock - radius) * 9.0, 2.0));
        float decay = exp(-u_shockwave.z * 1.35);
        waveEffect = ring * decay * sin((dShock - radius) * 38.0);
        p += normalize(p - shockP + 0.0001) * waveEffect * 0.045;
      }

      // Subtle scroll parallax
      p.y -= u_scroll * 0.18;

      vec3 col = vec3(0.025, 0.028, 0.042);

      if (u_mode == 0) {
        // MODE 0: IRIDESCENT PLASMA (Domain-Warped Fluid + Chromatic Dispersion)
        vec2 warpP = p * 2.2;
        warpP += u_velocity * mouseField * 0.45;
        warpP += normalize(toMouse + 0.001) * mouseField * 0.14 * sin(u_time * 2.5 - mouseDist * 10.0);

        vec2 q = vec2(
          fbm(warpP + vec2(0.0, 0.0) + 0.12 * u_time),
          fbm(warpP + vec2(5.2, 1.3) - 0.09 * u_time)
        );

        vec2 r = vec2(
          fbm(warpP + 3.2 * q + vec2(1.7, 9.2) + 0.15 * u_time),
          fbm(warpP + 3.2 * q + vec2(8.3, 2.8) - 0.12 * u_time)
        );

        float f = fbm(warpP + 2.8 * r);
        float fChromaR = fbm(warpP + 2.8 * r + vec2(0.025 * (1.0 + velMag), 0.0));
        float fChromaB = fbm(warpP + 2.8 * r - vec2(0.025 * (1.0 + velMag), 0.0));

        vec3 baseDark = vec3(0.02, 0.022, 0.035);
        col = mix(baseDark, u_accentA * 0.35, clamp(f * f * 2.2, 0.0, 1.0));
        col = mix(col, u_accentB * 0.45, clamp(length(q) * 0.85, 0.0, 1.0));
        col = mix(col, u_accentC * 0.65, clamp(r.x * r.y * 1.9, 0.0, 1.0));

        // Chromatic specular veins
        float veinR = smoothstep(0.48, 0.78, fChromaR);
        float veinG = smoothstep(0.48, 0.78, f);
        float veinB = smoothstep(0.48, 0.78, fChromaB);
        col += vec3(veinR, veinG, veinB) * 0.24 * u_intensity;

        // Cursor aura highlight
        col += (u_accentA * 0.55 + u_accentC * 0.35) * mouseField * (0.28 + 0.35 * velMag);
      }
      else if (u_mode == 1) {
        // MODE 1: EVENT HORIZON (Gravitational Lensing + Relativistic Grid)
        vec2 rel = p - mouseP;
        float rDist = length(rel) + 0.001;
        float einsteinR = 0.22 + 0.06 * sin(u_time * 1.4) + velMag * 0.08;

        // Gravitational deflection angle
        vec2 lensedP = p - normalize(rel) * (einsteinR * einsteinR) / (rDist + 0.085);
        lensedP *= rot(0.18 * exp(-rDist * 3.0) * sin(u_time));

        // Warped spacetime coordinate grid
        vec2 gridUV = lensedP * 11.0 + vec2(u_time * 0.35, u_scroll * 2.0);
        vec2 grid = abs(fract(gridUV - 0.5) - 0.5) / (0.045 + 0.02 * rDist);
        float line = 1.0 - min(min(grid.x, grid.y), 1.0);

        // Accretion photon ring
        float photonRing = exp(-pow((rDist - einsteinR * 0.85) * 14.0, 2.0));
        float doppler = 0.5 + 0.5 * dot(normalize(rel), vec2(cos(u_time), sin(u_time)));
        float innerVoid = smoothstep(einsteinR * 0.52, einsteinR * 0.78, rDist);

        vec3 gridCol = mix(u_accentB, u_accentA, smoothstep(0.0, 1.2, rDist));
        col = vec3(0.015, 0.018, 0.028);
        col += gridCol * line * 0.28 * innerVoid;
        col += mix(u_accentA, u_accentC, doppler) * photonRing * (1.1 + velMag * 0.5);
        col *= innerVoid;
      }
      else if (u_mode == 2) {
        // MODE 2: CYBERNETIC TOPOGRAPHY (3D Isoline Matrix + LiDAR Scan)
        vec2 topoP = p * 2.6;
        float elevation = fbm(topoP + vec2(u_time * 0.08, -u_time * 0.05));
        elevation += 0.28 * mouseField * cos(mouseDist * 18.0 - u_time * 4.0);
        elevation += waveEffect * 0.35;

        float levels = 18.0;
        float scaled = elevation * levels;
        float contour = abs(fract(scaled - 0.5) - 0.5);
        float lineMask = 1.0 - smoothstep(0.03, 0.09, contour);
        float majorMask = 1.0 - smoothstep(0.02, 0.06, abs(fract(elevation * 4.5 - 0.5) - 0.5));

        // LiDAR sweeping radar beam
        float angle = atan(p.y - mouseP.y, p.x - mouseP.x);
        float sweep = pow(0.5 + 0.5 * cos(angle - u_time * 2.2), 8.0) * exp(-mouseDist * 1.4);

        col = vec3(0.018, 0.022, 0.032);
        vec3 isoColor = mix(u_accentB, u_accentA, elevation);
        col += isoColor * lineMask * 0.34;
        col += u_accentC * majorMask * 0.45;
        col += u_accentA * sweep * 0.42;
      }
      else {
        // MODE 3: FERROFLUID MAGNETICS (Metaball Liquid Metal + Cursor Spikes)
        vec2 ferroP = p * 3.0;
        float field = 0.0;

        for (int i = 0; i < 7; i++) {
          float fi = float(i);
          vec2 center = vec2(
            sin(u_time * (0.45 + fi * 0.09) + fi * 1.7) * 0.65,
            cos(u_time * (0.38 + fi * 0.11) + fi * 2.3) * 0.45
          );
          // Pull blobs gently toward mouse
          center = mix(center, mouseP * 2.6, 0.28);
          float d = length(ferroP - center) + 0.001;
          field += (0.09 + 0.02 * sin(u_time * 2.0 + fi)) / (d * d);
        }

        // Cursor magnetic spike cluster
        float mDist = length(ferroP - mouseP * 3.0) + 0.001;
        float spikes = 0.5 + 0.5 * cos(atan(ferroP.y - mouseP.y * 3.0, ferroP.x - mouseP.x * 3.0) * 12.0 + u_time * 5.0);
        field += (0.14 + 0.06 * spikes * (1.0 + velMag)) / (mDist * mDist + 0.08);

        float surface = smoothstep(1.15, 1.35, field);
        float rim = smoothstep(1.0, 1.25, field) - smoothstep(1.25, 1.65, field);

        // Fake metallic environment reflection
        float spec = pow(clamp(sin(field * 1.8 - u_time), 0.0, 1.0), 6.0);
        col = vec3(0.018, 0.02, 0.028);
        vec3 metal = mix(vec3(0.06, 0.07, 0.11), u_accentB * 0.65, spec);
        metal += u_accentA * rim * 1.35;
        metal += u_accentC * spec * 0.55;
        col = mix(col, metal, surface);
      }

      // Shockwave highlight flash
      if (u_shockwave.z > 0.0 && u_shockwave.z < 3.5) {
        col += (u_accentA + u_accentC) * abs(waveEffect) * 1.8;
      }

      // Subtle architectural vignette & film grain
      float vig = 1.0 - smoothstep(0.45, 1.45, length(p));
      col *= mix(0.55, 1.08, vig);

      float grain = (hash21(uv * u_resolution + fract(u_time * 60.0)) - 0.5) * 0.028;
      col += grain;

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `;

  class ShaderStudio {
    constructor(canvas) {
      this.canvas = canvas;
      this.gl = null;
      this.program = null;
      this.uniforms = {};
      this.mode = 0;
      this.startTime = performance.now();
      this.mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
      this.velocity = { x: 0, y: 0 };
      this.shockwave = { x: 0.5, y: 0.5, startTime: -10 };
      this.scroll = 0;
      this.intensity = 1.0;
      this.fps = 60;
      this.frameCount = 0;
      this.lastFpsCheck = performance.now();

      // Default theme: Acid Obsidian (Neon Acid Lime, Electric Cyan, Hyper Violet)
      this.palette = {
        accentA: [0.83, 1.0, 0.0],   // #D4FF00 Acid Lime
        accentB: [0.0, 0.94, 1.0],   // #00F0FF Cyber Cyan
        accentC: [0.62, 0.25, 1.0]   // #9E40FF Hyper Violet
      };

      this.init();
    }

    init() {
      const gl = this.canvas.getContext('webgl', {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: 'high-performance'
      }) || this.canvas.getContext('experimental-webgl');

      if (!gl) {
        this.initFallback2D();
        return;
      }

      this.gl = gl;
      const vs = this.compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
      const fs = this.compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);

      if (!vs || !fs) {
        this.initFallback2D();
        return;
      }

      const program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.warn('WebGL link error:', gl.getProgramInfoLog(program));
        this.initFallback2D();
        return;
      }

      this.program = program;
      gl.useProgram(program);

      // Fullscreen quad
      const vertices = new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
      ]);

      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      const posLoc = gl.getAttribLocation(program, 'a_position');
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      // Cache uniform locations
      const names = [
        'u_resolution', 'u_time', 'u_mouse', 'u_velocity',
        'u_shockwave', 'u_scroll', 'u_mode',
        'u_accentA', 'u_accentB', 'u_accentC', 'u_intensity'
      ];
      names.forEach((name) => {
        this.uniforms[name] = gl.getUniformLocation(program, name);
      });

      this.resize();
      window.addEventListener('resize', () => this.resize(), { passive: true });
    }

    compileShader(type, source) {
      const gl = this.gl;
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    initFallback2D() {
      this.gl = null;
      this.ctx2d = this.canvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize(), { passive: true });
    }

    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const width = Math.floor(window.innerWidth * dpr);
      const height = Math.floor(window.innerHeight * dpr);
      if (this.canvas.width !== width || this.canvas.height !== height) {
        this.canvas.width = width;
        this.canvas.height = height;
      }
      if (this.gl) {
        this.gl.viewport(0, 0, width, height);
      }
    }

    setPointer(normX, normY, vx, vy) {
      this.mouse.targetX = normX;
      this.mouse.targetY = 1.0 - normY; // WebGL Y is bottom-up
      this.velocity.x = vx;
      this.velocity.y = -vy;
    }

    triggerShockwave(normX, normY) {
      this.shockwave.x = normX;
      this.shockwave.y = 1.0 - normY;
      this.shockwave.startTime = (performance.now() - this.startTime) * 0.001;
    }

    setMode(modeIndex) {
      this.mode = ((modeIndex % 4) + 4) % 4;
    }

    setPalette(accentA, accentB, accentC) {
      this.palette.accentA = accentA;
      this.palette.accentB = accentB;
      this.palette.accentC = accentC;
    }

    setScroll(scrollNorm) {
      this.scroll = scrollNorm;
    }

    render(now) {
      this.frameCount++;
      if (now - this.lastFpsCheck >= 500) {
        this.fps = Math.min(120, Math.round((this.frameCount * 1000) / (now - this.lastFpsCheck)));
        this.frameCount = 0;
        this.lastFpsCheck = now;
      }

      const elapsed = (now - this.startTime) * 0.001;

      // Smooth pointer interpolation
      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.12;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.12;
      this.velocity.x *= 0.92;
      this.velocity.y *= 0.92;

      const shockAge = this.shockwave.startTime >= 0 ? elapsed - this.shockwave.startTime : -1.0;

      if (this.gl && this.program) {
        const gl = this.gl;
        gl.useProgram(this.program);
        gl.uniform2f(this.uniforms.u_resolution, this.canvas.width, this.canvas.height);
        gl.uniform1f(this.uniforms.u_time, elapsed);
        gl.uniform2f(this.uniforms.u_mouse, this.mouse.x, this.mouse.y);
        gl.uniform2f(this.uniforms.u_velocity, this.velocity.x, this.velocity.y);
        gl.uniform3f(this.uniforms.u_shockwave, this.shockwave.x, this.shockwave.y, shockAge);
        gl.uniform1f(this.uniforms.u_scroll, this.scroll);
        gl.uniform1i(this.uniforms.u_mode, this.mode);
        gl.uniform3fv(this.uniforms.u_accentA, this.palette.accentA);
        gl.uniform3fv(this.uniforms.u_accentB, this.palette.accentB);
        gl.uniform3fv(this.uniforms.u_accentC, this.palette.accentC);
        gl.uniform1f(this.uniforms.u_intensity, this.intensity);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      } else if (this.ctx2d) {
        // Fallback 2D aurora render
        const ctx = this.ctx2d;
        const w = this.canvas.width;
        const h = this.canvas.height;
        ctx.fillStyle = '#06070b';
        ctx.fillRect(0, 0, w, h);

        const gx = this.mouse.x * w;
        const gy = (1 - this.mouse.y) * h;
        const grad = ctx.createRadialGradient(gx, gy, 10, gx, gy, Math.max(w, h) * 0.55);
        const [rA, gA, bA] = this.palette.accentA.map((v) => Math.round(v * 255));
        const [rB, gB, bB] = this.palette.accentB.map((v) => Math.round(v * 255));
        grad.addColorStop(0, `rgba(${rA}, ${gA}, ${bA}, 0.22)`);
        grad.addColorStop(0.5, `rgba(${rB}, ${gB}, ${bB}, 0.08)`);
        grad.addColorStop(1, 'rgba(6, 7, 11, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }
    }
  }

  window.ShaderStudio = ShaderStudio;
})();
