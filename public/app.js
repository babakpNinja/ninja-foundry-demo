// ============================================================
//  Interactive node-network background (agents collaborating)
// ============================================================
(function () {
  const c = document.getElementById("net"), ctx = c.getContext("2d");
  let W, H, DPR = Math.min(devicePixelRatio || 1, 2);
  const mouse = { x: -9999, y: -9999 };
  let nodes = [];
  function resize() {
    W = innerWidth; H = innerHeight;
    c.width = W * DPR; c.height = H * DPR; c.style.width = W + "px"; c.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const count = Math.min(100, Math.floor((W * H) / 15000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32, r: Math.random() * 1.6 + 1,
    }));
  }
  addEventListener("resize", resize);
  addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });
  resize();
  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (const n of nodes) {
      const dx = mouse.x - n.x, dy = mouse.y - n.y, d2 = dx * dx + dy * dy;
      if (d2 < 24000) { n.vx += dx / d2 * 5; n.vy += dy / d2 * 5; }
      n.vx *= 0.96; n.vy *= 0.96; n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1; if (n.y < 0 || n.y > H) n.vy *= -1;
      n.x = Math.max(0, Math.min(W, n.x)); n.y = Math.max(0, Math.min(H, n.y));
    }
    for (let i = 0; i < nodes.length; i++)
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 132) {
          ctx.strokeStyle = `rgba(91,140,255,${(1 - dist / 132) * 0.5})`;
          ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    for (const n of nodes) {
      const near = Math.hypot(mouse.x - n.x, mouse.y - n.y) < 132;
      ctx.fillStyle = near ? "#22d3ee" : "#5b8cff";
      ctx.shadowBlur = near ? 14 : 6; ctx.shadowColor = ctx.fillStyle;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 7); ctx.fill();
    }
    ctx.shadowBlur = 0; requestAnimationFrame(frame);
  }
  frame();
})();

// ============================================================
//  Countdown to the live demo (Jun 16 2026, 6:00 PM PT)
// ============================================================
(function () {
  const target = new Date("2026-06-16T18:00:00-07:00").getTime();
  const $ = (id) => document.getElementById(id), pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) { ["dd", "hh", "mm", "ss"].forEach((k) => ($(k).textContent = "00"));
      $("countlabel").innerHTML = "🔴 demo is LIVE — GitHub SF"; return; }
    const s = Math.floor(diff / 1000);
    $("dd").textContent = pad(Math.floor(s / 86400)); $("hh").textContent = pad(Math.floor((s % 86400) / 3600));
    $("mm").textContent = pad(Math.floor((s % 3600) / 60)); $("ss").textContent = pad(s % 60);
  }
  tick(); setInterval(tick, 1000);
})();

// ============================================================
//  Interactive "ship it" sequence
// ============================================================
(function () {
  const term = document.getElementById("term"), send = document.getElementById("send"),
    goal = document.getElementById("goal"), prompt = document.getElementById("prompt"), hint = document.getElementById("hint");
  let running = false;
  const line = (html, delay) => new Promise((res) => setTimeout(() => {
    const el = document.createElement("div"); el.className = "ln"; el.innerHTML = html;
    term.appendChild(el); term.scrollTop = term.scrollHeight; res();
  }, delay));
  async function run() {
    if (running) return; running = true; send.disabled = true; hint.style.display = "none"; term.innerHTML = "";
    const g = (goal.value || "build a launch page and deploy it").trim();
    prompt.textContent = "@Ninja " + g;
    const id = "demo-" + Math.floor(1000 + (Date.now() % 9000));
    await line(`<span class="agent">◈ Ninja</span> <span class="step">→ planning the build, assembling the team…</span>`, 250);
    await line(`<span class="agent">◈ Bolt</span> <span class="step">writing code → index.html · style.css · server.js</span>`, 850);
    await line(`<span class="agent">◈ Scout</span> <span class="step">QA → render ✓ links ✓ mobile ✓</span>`, 800);
    await line(`<span class="step">📦 git push → github.com/babakpNinja/${id} (master)</span>`, 800);
    await line(`<span class="step">🚀 Railway build ▰▰▰▰▰▰▰▰ live</span>`, 1100);
    await line(`<span class="ok">✅ LIVE in ~3 min</span> → <span class="url">https://${id}.up.railway.app</span>`, 900);
    await line(`<span class="step">— one Slack message. real repo. real URL. no human touched a keyboard.</span>`, 700);
    send.disabled = false; send.textContent = "Run it again ↻"; running = false;
  }
  send.addEventListener("click", run);
  goal.addEventListener("keydown", (e) => { if (e.key === "Enter") run(); });
})();

// ============================================================
//  Numbered pager: scroll-sync + click-to-jump + arrow keys
// ============================================================
(function () {
  const deck = document.getElementById("deck");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = Array.from(document.querySelectorAll(".rail a"));
  let current = 0;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        current = slides.indexOf(e.target);
        dots.forEach((d, i) => d.classList.toggle("active", i === current));
      }
    });
  }, { root: deck, threshold: 0.55 });
  slides.forEach((s) => io.observe(s));

  function go(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    slides[i].scrollIntoView({ behavior: "smooth" });
  }
  dots.forEach((d, i) => d.addEventListener("click", (e) => { e.preventDefault(); go(i); }));

  addEventListener("keydown", (e) => {
    // don't hijack typing in the demo input
    if (document.activeElement && document.activeElement.id === "goal") return;
    if (["ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(current + 1); }
    else if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); go(current - 1); }
    else if (/^[0-5]$/.test(e.key)) { e.preventDefault(); go(parseInt(e.key, 10)); }
  });
})();
