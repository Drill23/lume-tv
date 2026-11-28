/* ==========================================================================
   LUME TV — EFEITOS LIQUID GLASS 3.0
   - Luz que segue o dedo / mouse dentro dos botões de vidro
   - Explosão de brilho no toque e no clique
   - Navegação pelo controle remoto (setas do D-pad) com foco bem visível
   Só adiciona efeitos; não muda nenhuma ação dos botões e links.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ua = navigator.userAgent || "";
  var isTV = /\b(AFT[A-Z0-9]*|Android TV|GoogleTV|Google TV|SmartTV|SMART-TV|Tizen|Web0S|WebOS|BRAVIA|Roku|CrKey|AppleTV|HbbTV|NetCast|Viera|AQUOS|PhilipsTV|Silk)\b/i.test(ua);
  if (isTV) root.classList.add("lg-tv", "lg-remote");

  // Na TV, cada cartão de conteúdo também recebe o foco do controle,
  // para a pessoa ler o site inteiro só com as setas (o cartão acende).
  function makeCardsFocusable() {
    if (!isTV) return;
    var cards = document.querySelectorAll(".spotlight-card:not(button):not(a), .coming-card, .yt-perk, .faq-item:not(:has(button)), .metrics-dock .metric-item");
    for (var i = 0; i < cards.length; i++) {
      if (!cards[i].hasAttribute("tabindex")) {
        cards[i].setAttribute("tabindex", "0");
        cards[i].classList.add("lg-tv-card");
      }
    }
  }
  try { makeCardsFocusable(); } catch (err) { /* navegador sem :has */
    try {
      var cs = document.querySelectorAll(".spotlight-card:not(button):not(a), .coming-card, .yt-perk, .metrics-dock .metric-item");
      for (var j = 0; j < cs.length; j++) if (!cs[j].hasAttribute("tabindex")) { cs[j].setAttribute("tabindex", "0"); cs[j].classList.add("lg-tv-card"); }
    } catch (err2) {}
  }

  var GLASS_SELECTOR = [
    ".btn",
    ".code-pill",
    ".menu-toggle",
    ".dl-tab",
    ".guide-tab",
    ".guide-subtab",
    ".qr-pill",
    ".yt-mode-btn",
    ".err-chip",
    ".nav-support",
    ".nav-music",
    ".lm-cta-btn",
    ".err-search-clear",
    ".platform-chip",
    ".mobile-drawer a"
  ].join(",");

  var TAP_SELECTOR = GLASS_SELECTOR + ",a[href],button,[role='tab'],.device-card,.faq-q,.err-q,summary";

  function closest(el, sel) {
    while (el && el.nodeType === 1) {
      if (el.matches && el.matches(sel)) return el;
      el = el.parentElement;
    }
    return null;
  }

  /* ---------- 1. Luz que segue o ponteiro dentro do vidro ---------- */
  var rafId = 0;
  var pending = null;
  function applyLight() {
    rafId = 0;
    if (!pending) return;
    var el = pending.el;
    var r = el.getBoundingClientRect();
    if (r.width && r.height) {
      el.style.setProperty("--lx", ((pending.x - r.left) / r.width * 100).toFixed(1) + "%");
      el.style.setProperty("--ly", ((pending.y - r.top) / r.height * 100).toFixed(1) + "%");
    }
    pending = null;
  }

  document.addEventListener("pointermove", function (e) {
    if (e.pointerType === "touch") return;
    var el = closest(e.target, GLASS_SELECTOR);
    if (!el) return;
    pending = { el: el, x: e.clientX, y: e.clientY };
    if (!rafId) rafId = requestAnimationFrame(applyLight);
  }, { passive: true });

  document.addEventListener("pointerout", function (e) {
    var el = closest(e.target, GLASS_SELECTOR);
    if (el && !el.contains(e.relatedTarget)) {
      el.style.removeProperty("--lx");
      el.style.removeProperty("--ly");
    }
  }, { passive: true });

  /* ---------- 2. Explosão de brilho ao tocar / clicar ---------- */
  function burst(x, y) {
    if (reduceMotion) return;
    var b = document.createElement("span");
    b.className = "lg-burst";
    b.setAttribute("aria-hidden", "true");
    b.style.left = x + "px";
    b.style.top = y + "px";
    document.body.appendChild(b);
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 700);
  }

  function flash(el) {
    if (reduceMotion || !el) return;
    el.classList.remove("lg-flash");
    void el.offsetWidth;
    el.classList.add("lg-flash");
    setTimeout(function () { el.classList.remove("lg-flash"); }, 600);
  }

  document.addEventListener("pointerdown", function (e) {
    if (e.button && e.button !== 0) return;
    var el = closest(e.target, TAP_SELECTOR);
    if (!el) return;
    // Luz parte exatamente do ponto do toque dentro do vidro
    var r = el.getBoundingClientRect();
    if (r.width && r.height) {
      el.style.setProperty("--lx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      el.style.setProperty("--ly", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    }
    burst(e.clientX, e.clientY);
    flash(el);
  }, { passive: true });

  // Enter / OK do controle: brilho a partir do centro do elemento focado
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " " && e.keyCode !== 23) return;
    var el = document.activeElement;
    if (!el || el === document.body || !el.matches || !el.matches(TAP_SELECTOR)) return;
    var r = el.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2);
    flash(el);
  });

  /* ---------- 3. Navegação pelo controle remoto (setas) ---------- */
  var FOCUSABLE = "a[href],button:not([disabled]),input:not([disabled]):not([type='hidden']),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex='-1']),summary";
  var DIRS = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", Up: "up", Down: "down", Left: "left", Right: "right" };
  var KEYCODES = { 37: "left", 38: "up", 39: "right", 40: "down", 19: "up", 20: "down", 21: "left", 22: "right" };

  function isVisible(el) {
    if (!el.getClientRects().length) return false;
    var r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return false;
    var cs = window.getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") return false;
    if (closest(el, "[hidden],[aria-hidden='true'],[inert]")) return false;
    return true;
  }

  function candidates() {
    var list = document.querySelectorAll(FOCUSABLE);
    var out = [];
    for (var i = 0; i < list.length; i++) {
      if (isVisible(list[i])) out.push(list[i]);
    }
    // Se um diálogo (lightbox) estiver aberto, fica só dentro dele
    var dialog = document.querySelector(".lightbox.is-open, [role='dialog']:not([hidden])");
    if (dialog && isVisible(dialog)) {
      out = out.filter(function (el) { return dialog.contains(el); });
    }
    return out;
  }

  function pick(from, dir) {
    var a = from.getBoundingClientRect();
    var ax = a.left + a.width / 2;
    var ay = a.top + a.height / 2;
    var best = null;
    var bestScore = Infinity;
    var list = candidates();
    var fromNav = inNav(from);
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el === from || from.contains(el) || el.contains(from)) continue;
      // A barra do topo fica sempre visível: só entra nela pelo topo da página
      if (!fromNav && inNav(el)) continue;
      var b = el.getBoundingClientRect();
      var bx = b.left + b.width / 2;
      var by = b.top + b.height / 2;
      var main, cross;
      if (dir === "down") { if (b.top < a.bottom - 6 && by <= ay + 4) continue; main = Math.max(0, b.top - a.bottom); cross = Math.abs(bx - ax); }
      else if (dir === "up") { if (b.bottom > a.top + 6 && by >= ay - 4) continue; main = Math.max(0, a.top - b.bottom); cross = Math.abs(bx - ax); }
      else if (dir === "right") { if (b.left < a.right - 6 && bx <= ax + 4) continue; main = Math.max(0, b.left - a.right); cross = Math.abs(by - ay); }
      else { if (b.right > a.left + 6 && bx >= ax - 4) continue; main = Math.max(0, a.left - b.right); cross = Math.abs(by - ay); }
      // Para os lados, só vale quem está na mesma "linha" visual
      if ((dir === "left" || dir === "right") && (b.top >= a.bottom - 4 || b.bottom <= a.top + 4)) continue;
      var score = main + cross * (dir === "up" || dir === "down" ? 0.6 : 2.2);
      if (score < bestScore) { bestScore = score; best = el; }
    }
    return best;
  }

  function inNav(el) {
    return !!closest(el, ".navbar");
  }

  function navTarget(from) {
    var list = candidates().filter(inNav);
    if (!list.length) return null;
    var a = from.getBoundingClientRect();
    var ax = a.left + a.width / 2;
    list.sort(function (x, y) {
      var rx = x.getBoundingClientRect(), ry = y.getBoundingClientRect();
      return Math.abs(rx.left + rx.width / 2 - ax) - Math.abs(ry.left + ry.width / 2 - ax);
    });
    return list[0];
  }

  function firstInView() {
    var list = candidates();
    var vh = window.innerHeight;
    for (var i = 0; i < list.length; i++) {
      var r = list[i].getBoundingClientRect();
      if (!inNav(list[i]) && r.top >= 90 && r.bottom <= vh) return list[i];
    }
    return list[0] || null;
  }

  function scrollMode() {
    return (isTV || reduceMotion) ? "instant" : "smooth";
  }

  function scrollByY(dy) {
    try { window.scrollBy({ top: dy, behavior: scrollMode() }); } catch (err) { window.scrollBy(0, dy); }
  }

  function focusEl(el) {
    try { el.focus({ preventScroll: true }); } catch (err) { el.focus(); }
    var r = el.getBoundingClientRect();
    var vh = window.innerHeight;
    if (r.top < 90 || r.bottom > vh - 40) {
      var big = r.height > vh - 140;
      try {
        el.scrollIntoView({ block: big ? "start" : "center", inline: "nearest", behavior: scrollMode() });
      } catch (err) { el.scrollIntoView(); }
      if (big) scrollByY(-100);
    }
  }

  document.addEventListener("keydown", function (e) {
    var dir = DIRS[e.key] || KEYCODES[e.keyCode];
    if (!dir || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) return;

    var active = document.activeElement;
    var hasFocus = active && active !== document.body && active !== root;

    // Campos de texto: setas para os lados continuam editando o texto
    if (hasFocus && active.matches("input, textarea, select, [contenteditable='true']")) {
      if (dir === "left" || dir === "right") return;
      if (active.tagName === "SELECT" || active.tagName === "TEXTAREA") return;
    }

    if (!hasFocus) {
      // No computador as setas continuam rolando a página normalmente.
      // Na TV, a primeira seta acende o primeiro item visível.
      if (!root.classList.contains("lg-remote")) return;
      var first = firstInView();
      if (first) { e.preventDefault(); focusEl(first); }
      return;
    }

    // Foco que veio de um clique de mouse: setas rolam a página como sempre
    if (!isTV && !root.classList.contains("lg-remote")) {
      var kbFocus = true;
      try { kbFocus = active.matches(":focus-visible"); } catch (err) { kbFocus = true; }
      if (!kbFocus) return;
    }

    root.classList.add("lg-remote");
    var next = pick(active, dir);
    var vh = window.innerHeight;

    if (dir === "up" || dir === "down") {
      // Se o próximo item estiver longe, rola um pedaço para dar tempo de ler o texto
      var nr = next && next.getBoundingClientRect();
      var far = !next || (dir === "down" ? nr.top > vh * 1.35 : nr.bottom < -vh * 0.35);
      if (far) {
        e.preventDefault();
        if (dir === "up" && !inNav(active) && window.scrollY < 12) {
          var top = navTarget(active);
          if (top) focusEl(top);
          return;
        }
        scrollByY((dir === "down" ? 1 : -1) * vh * 0.6);
        return;
      }
    }

    if (next) {
      e.preventDefault();
      focusEl(next);
    }
  });

  // Quem volta a usar o mouse ou o toque sai do modo controle (exceto na TV)
  document.addEventListener("pointerdown", function (e) {
    if (!isTV && e.pointerType !== "") root.classList.remove("lg-remote");
  }, { passive: true });
})();
