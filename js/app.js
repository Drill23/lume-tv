/* ==========================================================================
   LUME TV — INTERATIVIDADE & CINEMA PRISM CANVAS
   ========================================================================== */

(() => {
  "use strict";

  const ACCESS_CODE = "7W7898";

  // 1. Dados das 7 telas reais
  const SCREENS = [
    {
      src: "assets/screens/inicio.webp?v=2",
      badge: "TELA REAL 01 / 07",
      title: "Início & Destaques Cinematográficos",
      desc: "Abertura instantânea com carrossel em destaque, bordas luminosas nítidas e acesso direto ao que você estava assistindo.",
      glow: "radial-gradient(circle, rgba(255,181,71,0.55) 0%, rgba(255,107,107,0.3) 55%, transparent 80%)"
    },
    {
      src: "assets/screens/fileiras.webp",
      badge: "TELA REAL 02 / 07",
      title: "Fileiras, Coleções & Continuar Assistindo",
      desc: "Navegação fluida por fileiras temáticas, franquias em ordem e retomada do ponto exato em qualquer aparelho.",
      glow: "radial-gradient(circle, rgba(96,165,250,0.5) 0%, rgba(255,181,71,0.28) 55%, transparent 80%)"
    },
    {
      src: "assets/screens/filmes.webp",
      badge: "TELA REAL 03 / 07",
      title: "Catálogo Completo de Filmes",
      desc: "Lançamentos e clássicos de todas as plataformas de streaming em um só lugar, priorizando português do Brasil em 1080p e 4K.",
      glow: "radial-gradient(circle, rgba(255,107,107,0.55) 0%, rgba(255,181,71,0.28) 55%, transparent 80%)"
    },
    {
      src: "assets/screens/series.webp",
      badge: "TELA REAL 04 / 07",
      title: "Séries & Animes Organizados",
      desc: "Temporadas separadas, pula abertura, próximo episódio com contagem regressiva e filtro inteligente para animes dublados.",
      glow: "radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(96,165,250,0.28) 55%, transparent 80%)"
    },
    {
      src: "assets/screens/desenhos.webp",
      badge: "TELA REAL 05 / 07",
      title: "Desenhos & Perfil Infantil Blindado",
      desc: "Aba própria para desenhos com controle parental rígido, limite de tempo diário e bloqueio total de conteúdo adulto e YouTube.",
      glow: "radial-gradient(circle, rgba(52,211,153,0.48) 0%, rgba(56,189,248,0.28) 55%, transparent 80%)"
    },
    {
      src: "assets/screens/detalhes.webp",
      badge: "TELA REAL 06 / 07",
      title: "Detalhes, Sinopse Traduzida & Episódios",
      desc: "Tudo traduzido para português do Brasil, seleção rápida de temporadas, histórico do que já foi visto e play em 1 clique.",
      glow: "radial-gradient(circle, rgba(250,204,21,0.48) 0%, rgba(255,138,80,0.32) 55%, transparent 80%)"
    },
    {
      src: "assets/screens/player.webp",
      badge: "TELA REAL 07 / 07",
      title: "Player Cinema com Áudio, Legendas & Velocidade",
      desc: "Smart Auto-Sub, ajuste de sincronia de legenda (±0,5 s), troca rápida de versão, velocidade 0.75× a 2.0× e áudio noturno.",
      glow: "radial-gradient(circle, rgba(255,138,80,0.55) 0%, rgba(56,189,248,0.28) 55%, transparent 80%)"
    }
  ];

  // 2. Dados da Central de Downloads (links exatos oficiais)
  const DOWNLOADS = {
    android: {
      badge: "● Versão 2.0.1",
      size: "APK Universal · 47,8 MB",
      title: "Lume TV para Celular & Tablet Android",
      desc: "Baixe direto no celular ou aponte a câmera para o QR Code ao lado. Compatível com qualquer celular ou tablet Android.",
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
        `Abra o Lume TV, entre usando o código <strong class="mono">${ACCESS_CODE}</strong> e aproveite.`
      ],
      qr: "assets/qr/qr-android.svg",
      qrTitle: "Aponte a câmera do celular",
      qrSub: "Baixa o instalador oficial do Android direto no telefone.",
      showQrSwitch: true
    },
    firestick: {
      badge: "● Versão 2.0.1",
      size: "APK 32 bits Leve · 25,1 MB",
      title: "Lume TV para Amazon Fire TV Stick",
      desc: "Compilação leve feita sob medida para rodar a 60 fps no Fire Stick sem travar nem ocupar espaço.",
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
        `Escaneie o QR Code ao lado ou baixe pelo navegador e entre com o código <strong class="mono">${ACCESS_CODE}</strong>.`
      ],
      qr: "assets/qr/qr-firestick.svg",
      qrTitle: "QR Code · Fire TV Stick (25,1 MB)",
      qrSub: "Link direto da versão leve 32 bits para Fire Stick.",
      showQrSwitch: false
    },
    androidtv: {
      badge: "● Versão 2.0.1",
      size: "APK Universal · 47,8 MB",
      title: "Lume TV para Android TV & Google TV",
      desc: "Interface feita para o controle remoto com destaques em tela cheia, troca rápida de canais e áudio dublado no topo.",
      mainUrl: "https://github.com/Drill23/lume-tv-atualizacoes/releases/latest/download/Lume-TV-Android.apk",
      mainLabel: "Baixar para Android TV (.apk)",
      variants: [],
      steps: [
        "Na Play Store da sua TV, instale o app <strong>Downloader</strong> ou gerenciador de arquivos.",
        "Baixe o APK pelo botão ao lado ou envie do celular para a TV usando o QR Code.",
        `Abra o Lume TV e entre com o código <strong class="mono">${ACCESS_CODE}</strong>.`
      ],
      qr: "assets/qr/qr-android.svg",
      qrTitle: "QR Code · Android TV (47,8 MB)",
      qrSub: "Escaneie no celular para baixar e enviar para sua TV.",
      showQrSwitch: false
    },
    windows: {
      badge: "● Versão 2.1.2",
      size: "Instalador Universal · 95,2 MB",
      title: "Lume TV para Windows (7 ao 11)",
      desc: "App nativo com player integrado. Roda liso no Windows 11, 10, 8 e até em PCs antigos com Windows 7 (inclusive sem SP1).",
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
      qrSub: "Compartilhe o link oficial do Lume TV com quem você quiser.",
      showQrSwitch: false
    },
    iphone: {
      badge: "● Versão 2.0.1",
      size: "Pacote iOS (.ipa) · 46,2 MB",
      title: "Lume TV para iPhone (iOS)",
      desc: "Visual Liquid Glass nativo, Picture-in-Picture (PiP), download de episódios para ver offline e envio direto para a TV.",
      mainUrl: "https://github.com/Drill23/lume-tv-atualizacoes/releases/download/v2.0.1/Lume-TV-2.0.1-iPhone.ipa",
      mainLabel: "Baixar Lume TV iPhone (.ipa)",
      variants: [],
      steps: [
        "Baixe o arquivo oficial <code>Lume-TV-2.0.1-iPhone.ipa</code>.",
        "Importe o <code>.ipa</code> no seu instalador iOS (como <strong>LiveContainer</strong>, SideStore ou AltStore).",
        `Abra o Lume TV no iPhone e entre com o código <strong class="mono">${ACCESS_CODE}</strong>.`
      ],
      qr: "assets/qr/qr-site.svg",
      qrTitle: "Abrir página oficial no iPhone",
      qrSub: "Escaneie no iPhone para baixar o pacote .ipa diretamente.",
      showQrSwitch: false
    }
  };

  // 3. Toast de notificação
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

  // 4. Copiar código 7W7898 em qualquer botão
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
      showToast(`Código ${code} copiado! Use ao abrir o Lume TV.`);
    });
  });

  // 5. Menu Mobile
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

  // 6. Prévia rápida do Hero
  const heroPreviewImg = document.getElementById("heroPreviewImg");
  const heroAmbilight = document.getElementById("heroAmbilight");
  document.querySelectorAll("[data-hero-screen]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-hero-screen]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      if (heroPreviewImg) heroPreviewImg.src = btn.dataset.heroScreen;
      if (heroAmbilight) heroAmbilight.dataset.color = btn.dataset.ambilight || "amber";
    });
  });

  // 7. Vitrine de Telas Reais + Lightbox
  let currentScreen = 0;
  const showcaseImg = document.getElementById("showcaseImg");
  const showcaseBadge = document.getElementById("showcaseBadge");
  const showcaseTitle = document.getElementById("showcaseTitle");
  const showcaseDesc = document.getElementById("showcaseDesc");
  const showcaseAmbilight = document.getElementById("showcaseAmbilight");
  const showcaseTabs = document.querySelectorAll(".showcase-tab");
  const thumbBtns = document.querySelectorAll(".thumb-btn");

  function setScreen(index) {
    const idx = ((index % SCREENS.length) + SCREENS.length) % SCREENS.length;
    currentScreen = idx;
    const item = SCREENS[idx];
    if (showcaseImg) {
      showcaseImg.src = item.src;
      showcaseImg.alt = `${item.title} — print real da interface do Lume TV`;
    }
    if (showcaseBadge) showcaseBadge.textContent = item.badge;
    if (showcaseTitle) showcaseTitle.textContent = item.title;
    if (showcaseDesc) showcaseDesc.textContent = item.desc;
    if (showcaseAmbilight) showcaseAmbilight.style.background = item.glow;

    showcaseTabs.forEach((t, i) => {
      const active = i === idx;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });
    thumbBtns.forEach((b, i) => b.classList.toggle("is-active", i === idx));
  }

  showcaseTabs.forEach((tab) => {
    tab.addEventListener("click", () => setScreen(Number(tab.dataset.index || 0)));
  });
  thumbBtns.forEach((btn) => {
    btn.addEventListener("click", () => setScreen(Number(btn.dataset.index || 0)));
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const openLightboxBtn = document.getElementById("openLightboxBtn");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  function updateLightbox() {
    const item = SCREENS[currentScreen];
    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.title;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = `${item.title} — ${item.desc}`;
    }
  }

  function openLightbox() {
    if (!lightbox) return;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  if (openLightboxBtn) openLightboxBtn.addEventListener("click", openLightbox);
  if (showcaseImg) showcaseImg.addEventListener("click", openLightbox);
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", () => {
      setScreen(currentScreen - 1);
      updateLightbox();
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener("click", () => {
      setScreen(currentScreen + 1);
      updateLightbox();
    });
  }
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") {
      setScreen(currentScreen - 1);
      updateLightbox();
    }
    if (e.key === "ArrowRight") {
      setScreen(currentScreen + 1);
      updateLightbox();
    }
  });

  // 8. Guia Interativo YouTube (Celular vs TV)
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

  // 9. Central de Download & QR Code Dinâmico
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

  // 10. Spotlight especular nos cards Bento (sem mover ou escalar texto)
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  // 11. FAQ Accordion
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

  // 12. Reveal on Scroll
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

  // 13. Animação leve Cinema Prism no canvas de fundo
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
