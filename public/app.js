// Load the AI-generated hero image if it exists; else keep the CSS gradient.
(function () {
  const img = new Image();
  img.onload = function () {
    const bg = document.getElementById("bg");
    bg.style.backgroundImage = "url('img/hero.png')";
    bg.classList.add("loaded");
  };
  img.src = "img/hero.png";
})();

// Countdown to the live demo: June 16, 2026, 6:00 PM Pacific (UTC-7, PDT).
(function () {
  const target = new Date("2026-06-16T18:00:00-07:00").getTime();
  const $ = (id) => document.getElementById(id);
  const pad = (n) => String(n).padStart(2, "0");

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      $("dd").textContent = "00"; $("hh").textContent = "00";
      $("mm").textContent = "00"; $("ss").textContent = "00";
      $("countlabel").textContent = "🔴 demo is LIVE — GitHub SF";
      return;
    }
    const s = Math.floor(diff / 1000);
    $("dd").textContent = pad(Math.floor(s / 86400));
    $("hh").textContent = pad(Math.floor((s % 86400) / 3600));
    $("mm").textContent = pad(Math.floor((s % 3600) / 60));
    $("ss").textContent = pad(s % 60);
  }
  tick();
  setInterval(tick, 1000);
})();
