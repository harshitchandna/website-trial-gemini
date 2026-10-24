const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function createServer() {
  return http.createServer((req, res) => {
    const safeUrl = decodeURIComponent((req.url || '/').split('?')[0]);
    const relativePath = safeUrl === '/' ? 'index.html' : safeUrl.replace(/^\/+/, '');
    const filePath = path. normalize(path.join(ROOT_DIR, relativePath));

    // Prevent directory traversal outside ROOT_DIR
    if (!filePath.startsWith(ROOT_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('403 Forbidden');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      let targetPath = filePath;
      if (!err && stats.isDirectory()) {
        targetPath = path.join(filePath, 'index.html');
      }

      fs.readFile(targetPath, (readErr, data) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
          return;
        }

        const ext = path.extname(targetPath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache'
        });
        res.end(data);
      });
    });
  });
}

function startServer(port) {
  const server = createServer();
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });

  server.listen(port, () => {
    console.log('\n============================================================');
    console.log('  HARSHIT CHANDNA // AVANT-GARDE PORTFOLIO ENGINE');
    console.log('  "SYSTEMS OVER SCREENS" — INTERACTIVE WEBGL EXPERIENCE');
    console.log('============================================================');
    console.log(`  Local URL:   http://localhost:${port}`);
    console.log('  Controls:    [1-4] Switch Shaders | [X] Blueprint Mode | [Ctrl+K] Command Palette');
    console.log('  Press Ctrl+C to stop the server.');
    console.log('============================================================\n');
  });
}

startServer(DEFAULT_PORT);
