/* ==========================================================================
   LUME TV — INTERATIVIDADE & CINEMA PRISM CANVAS
   ========================================================================== */

(() => {
  "use strict";

  const ACCESS_CODE = "HJUZJ4";

  // 1. Dados da Central de Downloads (links exatos oficiais)
  const DOWNLOADS = {
    android: {
      badge: "● Versão 2.0.1",
      size: "APK Universal · 47,8 MB",
      title: "Lume TV Player para Celular & Tablet Android",
      desc: "Baixe o player direto no celular ou aponte a câmera para o QR Code ao lado. Compatível com qualquer celular ou tablet Android.",
      mainUrl: "https://github.com/Drill23/lume-tv-atualizacoes/releases/latest/download/Lume-TV-Android.apk",
      mainLabel: "Baixar Lume TV Android (.apk)",
      variants: [
        {
          label: "ARM64 Leve (24,6 MB)",
          url: "https://github.com/Drill23/lume-tv-atualizacoes/releases/download/v2.0.1/Lume-TV-2.0.1-ARM64.apk"
        }
      ],
      steps: [
        "Aponte a câmera do celular para o QR Code ou toque em <strong>Baixar Lume TV Android</strong>.",
        "Abra o arquivo <code>Lume-TV-Android.apk</code> e, se o Android pedir, permita <strong>Instalar apps desconhecidos</strong>.",
        `Abra o player, ative com o código <strong class="mono">${ACCESS_CODE}</strong> e organize seus catálogos.`
      ],
      qr: "assets/qr/qr-android.svg",
      qrTitle: "Aponte a câmera do celular",
      qrSub: "Baixa o instalador oficial do player Android direto no telefone.",
      showQrSwitch: true
    },
    firestick: {
      badge: "● Versão 2.0.1",
      size: "APK 32 bits Leve · 25,1 MB",
      title: "Lume TV Player para Amazon Fire TV Stick",
      desc: "Compilação leve feita sob medida para o player rodar a 60 fps no Fire Stick sem travar nem ocupar espaço.",
      mainUrl: "https://github.com/Drill23/lume-tv-atualizacoes/releases/download/v2.0.1/Lume-TV-2.0.1-FireStick.apk",
      mainLabel: "Baixar versão Fire Stick (.apk)",
      variants: [
        {
          label: "Universal 47,8 MB",
          url: "https://github.com/Drill23/lume-tv-atualizacoes/releases/latest/download/Lume-TV-Android.apk"
        }
      ],
      steps: [
        "Na loja da Amazon no Fire Stick, instale o app gratuito <strong>Downloader</strong>.",
        "Vá em <em>Configurações › Minha Fire TV › Opções do desenvolvedor</em> e permita instalar apps pelo Downloader.",
        `Escaneie o QR Code ao lado ou baixe pelo navegador e ative o player com o código <strong class="mono">${ACCESS_CODE}</strong>.`
      ],
      qr: "assets/qr/qr-firestick.svg",
      qrTitle: "QR Code · Fire TV Stick (25,1 MB)",
      qrSub: "Link direto da versão leve 32 bits para Fire Stick.",
      showQrSwitch: false
    },
    androidtv: {
      badge: "● Versão 2.0.1",
      size: "APK Universal · 47,8 MB",
      title: "Lume TV Player para Android TV & Google TV",
      desc: "Interface feita para o controle remoto com navegação fluida, organização de catálogos, listas M3U e áudio PT-BR priorizado.",
      mainUrl: "https://github.com/Drill23/lume-tv-atualizacoes/releases/latest/download/Lume-TV-Android.apk",
      mainLabel: "Baixar para Android TV (.apk)",
      variants: [],
      steps: [
        "Na Play Store da sua TV, instale o app <strong>Downloader</strong> ou gerenciador de arquivos.",
        "Baixe o APK pelo botão ao lado ou envie do celular para a TV usando o QR Code.",
        `Abra o Lume TV Player e ative com o código <strong class="mono">${ACCESS_CODE}</strong>.`
      ],
      qr: "assets/qr/qr-android.svg",
      qrTitle: "QR Code · Android TV (47,8 MB)",
      qrSub: "Escaneie no celular para baixar e enviar para sua TV.",
      showQrSwitch: false
    },
    windows: {
      badge: "● Versão 2.1.2",
      size: "Instalador Universal · 95,2 MB",
      title: "Lume TV Player para Windows (7 ao 11)",
      desc: "App nativo com player acoplado. Roda liso no Windows 11, 10, 8 e até em PCs antigos com Windows 7 (inclusive sem SP1).",
      mainUrl: "https://github.com/Drill23/lume-tv-atualizacoes/releases/download/windows-v2.1.2/Instalar-Lume-TV-2.1.2.exe",
      mainLabel: "Baixar Instalador Windows (.exe)",
      variants: [
        {
          label: "Portátil x64 (63,8 MB)",
          url: "https://github.com/Drill23/lume-tv-atualizacoes/releases/download/windows-v2.1.2/LumeTV-2.1.2-Win64.zip"
        },
        {
          label: "Portátil Win7 32-bit (59,8 MB)",
          url: "https://github.com/Drill23/lume-tv-atualizacoes/releases/download/windows-v2.1.2/LumeTV-2.1.2-Win7-x86.zip"
        }
      ],
      steps: [
        "Baixe e execute o arquivo <code>Instalar-Lume-TV-2.1.2.exe</code>.",
        "O instalador em 1 clique configura automaticamente tudo o que seu Windows precisar.",
        `Abra o Lume TV pela Área de Trabalho e digite o código <strong class="mono">${ACCESS_CODE}</strong>.`
      ],
      qr: "assets/qr/qr-site.svg",
      qrTitle: "Abrir esta página no celular",
      qrSub: "Compartilhe o link oficial do Lume TV Player.",
      showQrSwitch: false
    },
    iphone: {
      badge: "● Versão 2.0.1",
      size: "Pacote iOS (.ipa) · 46,2 MB",
      title: "Lume TV Player para iPhone (iOS)",
      desc: "Visual Liquid Glass nativo, Picture-in-Picture (PiP), reprodução offline e envio direto de mídia para a TV.",
      mainUrl: "https://github.com/Drill23/lume-tv-atualizacoes/releases/download/v2.0.1/Lume-TV-2.0.1-iPhone.ipa",
      mainLabel: "Baixar Lume TV iPhone (.ipa)",
      variants: [],
      steps: [
        "Baixe o arquivo oficial <code>Lume-TV-2.0.1-iPhone.ipa</code>.",
        "Importe o <code>.ipa</code> no seu instalador iOS (como <strong>LiveContainer</strong>, SideStore ou AltStore).",
        `Abra o Lume TV no iPhone e ative com o código <strong class="mono">${ACCESS_CODE}</strong>.`
      ],
      qr: "assets/qr/qr-site.svg",
      qrTitle: "Abrir página oficial no iPhone",
      qrSub: "Escaneie no iPhone para baixar o pacote .ipa diretamente.",
      showQrSwitch: false
    }
  };

  // 2. Toast de notificação
  const toastEl = document.getElementById("toast");
  const toastText = document.getElementById("toastText");
  let toastTimer = null;

  function showToast(msg) {
    if (!toastEl || !toastText) return;
    toastText.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2600);
  }

  // 3. Copiar código HJUZJ4 em qualquer botão
  document.querySelectorAll(".copy-code-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const code = btn.dataset.code || ACCESS_CODE;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(code);
        } else {
          const tmp = document.createElement("textarea");
          tmp.value = code;
          tmp.style.position = "fixed";
          tmp.style.opacity = "0";
          document.body.appendChild(tmp);
          tmp.select();
          document.execCommand("copy");
          tmp.remove();
        }
      } catch (_) {
        // Fallback silencioso
      }
      const label = btn.querySelector(".copy-label");
      if (label) {
        const prev = label.textContent;
        label.textContent = "Copiado ✓";
        setTimeout(() => {
          label.textContent = prev;
        }, 2000);
      }
      showToast(`Código ${code} copiado! Use ao abrir o Lume TV Player.`);
    });
  });

  // 4. Menu Mobile
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      const open = !mobileDrawer.hidden;
      mobileDrawer.hidden = open;
      menuToggle.setAttribute("aria-expanded", String(!open));
    });
    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.hidden = true;
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 5. Guia Interativo YouTube (Celular vs TV)
  const ytStep2Title = document.getElementById("ytStep2Title");
  const ytStep2Desc = document.getElementById("ytStep2Desc");
  const miniUiTrigger = document.getElementById("miniUiTrigger");
  document.querySelectorAll("[data-yt-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.ytMode;
      document.querySelectorAll("[data-yt-mode]").forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", String(active));
      });
      if (mode === "tv") {
        if (ytStep2Title) ytStep2Title.textContent = "Desça até o seu Perfil na TV";
        if (ytStep2Desc) ytStep2Desc.textContent = "No Fire Stick ou Android TV, use o controle remoto para ir até o fim do menu lateral.";
        if (miniUiTrigger) miniUiTrigger.textContent = "Menu Lateral › Perfil";
      } else {
        if (ytStep2Title) ytStep2Title.textContent = "Toque nos três pontinhos (•••)";
        if (ytStep2Desc) ytStep2Desc.textContent = "No celular Android e no iPhone, eles ficam lá no topo, bem ao lado da lupa de busca.";
        if (miniUiTrigger) miniUiTrigger.textContent = "••• Perfil";
      }
    });
  });

  // 6. Central de Download & QR Code Dinâmico
  const dlBadge = document.getElementById("dlBadge");
  const dlSize = document.getElementById("dlSize");
  const dlTitle = document.getElementById("dlTitle");
  const dlDesc = document.getElementById("dlDesc");
  const dlMainBtn = document.getElementById("dlMainBtn");
  const dlMainBtnLabel = document.getElementById("dlMainBtnLabel");
  const dlVariants = document.getElementById("dlVariants");
  const dlSteps = document.getElementById("dlSteps");
  const dlQrImg = document.getElementById("dlQrImg");
  const dlQrTitle = document.getElementById("dlQrTitle");
  const dlQrSub = document.getElementById("dlQrSub");
  const qrSwitch = document.getElementById("qrSwitch");

  function selectPlatform(key) {
    const data = DOWNLOADS[key];
    if (!data) return;
    document.querySelectorAll(".dl-tab").forEach((t) => {
      const active = t.dataset.platform === key;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });

    if (dlBadge) dlBadge.textContent = data.badge;
    if (dlSize) dlSize.textContent = data.size;
    if (dlTitle) dlTitle.textContent = data.title;
    if (dlDesc) dlDesc.textContent = data.desc;
    if (dlMainBtn) dlMainBtn.href = data.mainUrl;
    if (dlMainBtnLabel) dlMainBtnLabel.textContent = data.mainLabel;

    if (dlVariants) {
      dlVariants.innerHTML = "";
      data.variants.forEach((v) => {
        const a = document.createElement("a");
        a.className = "variant-link";
        a.href = v.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = `↓ ${v.label}`;
        dlVariants.appendChild(a);
      });
    }

    if (dlSteps) {
      dlSteps.innerHTML = data.steps.map((s) => `<li>${s}</li>`).join("");
    }

    if (dlQrImg) dlQrImg.src = data.qr;
    if (dlQrTitle) dlQrTitle.textContent = data.qrTitle;
    if (dlQrSub) dlQrSub.textContent = data.qrSub;
    if (qrSwitch) qrSwitch.style.display = data.showQrSwitch ? "flex" : "none";
  }

  document.querySelectorAll(".dl-tab").forEach((tab) => {
    tab.addEventListener("click", () => selectPlatform(tab.dataset.platform));
  });

  document.querySelectorAll(".qr-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".qr-pill").forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      if (dlQrImg) dlQrImg.src = pill.dataset.qr;
      if (dlQrTitle) dlQrTitle.textContent = pill.dataset.qrTitle;
      if (dlQrSub) dlQrSub.textContent = pill.dataset.qrSub;
    });
  });

  // 7. Spotlight especular nos cards Bento e áreas do player
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  // 8. FAQ Accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    const ans = item.querySelector(".faq-a");
    if (!btn || !ans) return;
    btn.addEventListener("click", () => {
      const willOpen = ans.hidden;
      ans.hidden = !willOpen;
      item.classList.toggle("is-open", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
    });
  });

  // 9. Reveal on Scroll
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // 10. Animação leve Cinema Prism no canvas de fundo
  const canvas = document.getElementById("prismCanvas");
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (canvas && !reducedMotion) {
    const ctx = canvas.getContext("2d");
    let w = 0;
    let h = 0;
    let angle = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.72;
      const cy = h * 0.24;
      const r = Math.min(w, h) * 0.34;

      angle += 0.0025;
      ctx.save();
      ctx.translate(cx, cy);

      // Anel orbital âmbar-coral
      ctx.rotate(angle);
      const g1 = ctx.createLinearGradient(-r, -r, r, r);
      g1.addColorStop(0, "rgba(255, 181, 71, 0.22)");
      g1.addColorStop(0.5, "rgba(255, 107, 107, 0.08)");
      g1.addColorStop(1, "rgba(255, 181, 71, 0)");
      ctx.strokeStyle = g1;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 1.45);
      ctx.stroke();

      // Anel contrarrotativo interno
      ctx.rotate(-angle * 2.1);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.72, 0.4, Math.PI * 1.6);
      ctx.stroke();

      ctx.restore();
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
})();
