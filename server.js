// Minimal zero-dependency static file server (scaffolded by ship_site.py).
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, "public");

const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".webp": "image/webp",
  ".gif": "image/gif", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8",
};

http.createServer((req, res) => {
  if (req.url === "/healthz") { res.writeHead(200, {"Content-Type": "text/plain"}); res.end("ok"); return; }
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(ROOT, path.normalize(urlPath));
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end("Forbidden"); return; }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404, {"Content-Type": "text/html"}); res.end("<h1>404</h1>"); return; }
    res.writeHead(200, {"Content-Type": TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream"});
    res.end(data);
  });
}).listen(PORT, () => console.log(`static server on ${PORT} (root: ${ROOT})`));
