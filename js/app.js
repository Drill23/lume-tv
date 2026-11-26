/* ==========================================================================
   LUME TV — INTERATIVIDADE, GUIA ILUSTRADO & CINEMA PRISM CANVAS
   ========================================================================== */

(() => {
  "use strict";

  let activeAccessCode = "HJUZJ4";
  let activeDownloadPlatform = "android";

  function withActiveCode(text) {
    return String(text || "").replace(/HJUZJ4/g, activeAccessCode);
  }

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
        `Abra o player, ative com o código <strong class="mono">HJUZJ4</strong> e organize seus conteúdos.`
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
      desc: "Compilação leve feita sob medida para o player reproduzir seus vídeos a 60 fps no Fire Stick sem travar nem ocupar espaço.",
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
        `Abra <strong>lume-tv-be0.pages.dev</strong> no Downloader ou use o QR Code ao lado e ative com <strong class="mono">HJUZJ4</strong>.`
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
      desc: "Interface feita para o controle remoto para você organizar seus filmes, séries e suas listas M3U com áudio PT-BR priorizado.",
      mainUrl: "https://github.com/Drill23/lume-tv-atualizacoes/releases/latest/download/Lume-TV-Android.apk",
      mainLabel: "Baixar para Android TV (.apk)",
      variants: [],
      steps: [
        "Na Play Store da sua TV, instale o app <strong>Downloader</strong> ou <strong>Send Files to TV</strong>.",
        "Baixe o APK pelo link oficial ou envie do celular para a TV usando o QR Code.",
        `Abra o Lume TV Player e ative com o código <strong class="mono">HJUZJ4</strong>.`
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
        "Se aparecer a tela azul do SmartScreen, clique em <strong>Mais informações → Executar assim mesmo</strong>.",
        `Abra o Lume TV pela Área de Trabalho e digite o código <strong class="mono">HJUZJ4</strong>.`
      ],
      qr: "assets/qr/qr-site.svg",
      qrTitle: "Abrir lume-tv-be0.pages.dev",
      qrSub: "Compartilhe o link oficial do Lume TV Player.",
      showQrSwitch: false
    },
    iphone: {
      badge: "● Versão 2.0.1",
      size: "Pacote iOS (.ipa) · 46,2 MB",
      title: "Lume TV Player para iPhone (iOS)",
      desc: "Visual Liquid Glass nativo, Picture-in-Picture (PiP), reprodução offline dos seus episódios e envio direto para a TV.",
      mainUrl: "https://github.com/Drill23/lume-tv-atualizacoes/releases/download/v2.0.1/Lume-TV-2.0.1-iPhone.ipa",
      mainLabel: "Baixar Lume TV iPhone (.ipa)",
      variants: [],
      steps: [
        "Baixe o arquivo oficial <code>Lume-TV-2.0.1-iPhone.ipa</code> pelo Safari e salve em <strong>Arquivos</strong>.",
        "Instale via <strong>SideStore + LocalDevVPN</strong> ou dentro do <strong>LiveContainer</strong> (veja o guia ilustrado abaixo).",
        `Abra o Lume TV no iPhone e ative com o código <strong class="mono">HJUZJ4</strong>.`
      ],
      qr: "assets/qr/qr-site.svg",
      qrTitle: "Abrir página oficial no iPhone",
      qrSub: "Escaneie no iPhone para baixar o pacote .ipa diretamente.",
      showQrSwitch: false
    }
  };

  // 2. Guias visuais passo a passo + Erros mais comuns e soluções por plataforma
  const INSTALL_GUIDES = {
    android: {
      summary: "<strong>Celular &amp; Tablet Android:</strong> leva menos de 1 minuto. Você baixa o arquivo <code>.apk</code>, libera uma única vez a permissão do seu navegador ou gerenciador de arquivos e ativa o player com o código <strong>HJUZJ4</strong>.",
      steps: [
        {
          title: "Baixe o arquivo .apk oficial",
          desc: "Na seção Baixar acima, toque em <strong>Baixar Lume TV Android (.apk)</strong> (ou use o QR Code). Se o Chrome exibir o aviso padrão de arquivo, toque em <strong>Fazer download mesmo assim</strong>.",
          mock: {
            head: "Chrome · Download",
            rows: [
              { label: "Talvez o arquivo seja nocivo (aviso padrão para qualquer APK)" }
            ],
            actions: [
              { label: "Cancelar" },
              { label: "Fazer o download mesmo assim", type: "target" }
            ],
            hint: "Toque em “Fazer o download mesmo assim” para concluir."
          }
        },
        {
          title: "Libere “Instalar apps desconhecidos”",
          desc: "Ao tocar no arquivo baixado, o Android pede permissão para o Chrome (ou app Meus Arquivos) instalar aplicativos. Toque em <strong>Configurações</strong> e ative a chave.",
          mock: {
            head: "Android · Segurança",
            rows: [
              { label: "Permitir desta fonte (Chrome / Arquivos)", toggle: true, target: true }
            ],
            hint: "Ative essa chavinha e volte uma tela para continuar."
          }
        },
        {
          title: "Confirme a instalação (ou Play Protect)",
          desc: "Toque em <strong>Instalar</strong>. Se o Google Play Protect mostrar um aviso de “App desconhecido”, toque em <strong>Mais detalhes</strong> e depois em <strong>Instalar assim mesmo</strong>.",
          mock: {
            head: "Google Play Protect",
            rows: [
              { label: "Este app não veio da Play Store" }
            ],
            actions: [
              { label: "Mais detalhes", type: "link" },
              { label: "Instalar assim mesmo", type: "target" }
            ],
            hint: "Em celulares Samsung/Motorola, “Mais detalhes” libera o botão Instalar."
          }
        },
        {
          title: "Abra e ative com o código HJUZJ4",
          desc: "Toque em <strong>Abrir</strong>, escolha <strong>Entrar com código</strong> e digite <strong class=\"mono\">HJUZJ4</strong> para sincronizar seus perfis, suas listas e começar a usar o player.",
          mock: {
            head: "Lume TV Player · Início",
            rows: [
              { label: "Código de ativação: HJUZJ4", target: true }
            ],
            actions: [
              { label: "Entrar com código", type: "target" }
            ],
            hint: "Pronto! Seu perfil já fica salvo e sincronizado."
          }
        }
      ],
      errorsTitle: "Erros mais comuns no Celular Android",
      errors: [
        {
          tag: "ERRO COMUM",
          q: "Apareceu “App bloqueado pelo Play Protect” — o que eu faço?",
          intro: "Isso acontece porque o Lume TV é baixado direto pelo site oficial fora da Play Store.",
          steps: [
            "Na própria janela do Play Protect, toque em <strong>Mais detalhes</strong> (às vezes aparece bem discreto embaixo do texto).",
            "Depois toque em <strong>Instalar assim mesmo</strong>.",
            "Se mesmo assim bloquear, abra a <strong>Play Store → toque na sua foto (canto superior direito) → Play Protect → Engrenagem</strong> e desative temporariamente <em>Verificar apps com o Play Protect</em>, instale o Lume TV e ligue novamente."
          ]
        },
        {
          tag: "ERRO COMUM",
          q: "Apareceu “O app não foi instalado” ou “Conflito de pacote”",
          intro: "Normalmente ocorre quando existe uma versão muito antiga assinada de forma diferente ou falta espaço livre.",
          steps: [
            "Verifique se há uma versão antiga do Lume TV instalada no celular. Se houver e for de uma versão muito anterior, desinstale a antiga primeiro e instale a <strong>v2.0.1</strong>.",
            "Confira se o celular tem pelo menos <strong>300 MB livres</strong> de armazenamento.",
            "Se você baixou a versão <strong>ARM64 Leve</strong> e seu celular for mais antigo (32-bit), baixe a versão <strong>APK Universal (47,8 MB)</strong>."
          ]
        },
        {
          tag: "ERRO COMUM",
          q: "“Erro ao analisar o pacote” ou “Não foi possível abrir o arquivo”",
          intro: "O arquivo foi baixado incompleto ou está sendo aberto dentro do chat do WhatsApp/Telegram.",
          steps: [
            "Não abra o <code>.apk</code> direto dentro do WhatsApp: abra o app <strong>Meus Arquivos / Gerenciador de Arquivos → Downloads</strong> e toque no arquivo por lá.",
            "Se o arquivo tiver menos de 20 MB, a internet caiu durante o download — apague e baixe novamente por <strong>lume-tv-be0.pages.dev</strong>."
          ]
        },
        {
          tag: "SAMSUNG",
          q: "Celular Samsung diz “App bloqueado pelo Bloqueador Automático”",
          intro: "Nos aparelhos Samsung com One UI 6+, o recurso de segurança bloqueia qualquer APK até ser liberado.",
          steps: [
            "Abra <strong>Configurações → Segurança e privacidade → Bloqueador automático</strong>.",
            "Desative temporariamente o <strong>Bloqueador automático</strong>.",
            "Instale o Lume TV normalmente e, se quiser, reative o bloqueador depois."
          ]
        },
        {
          tag: "PERMISSÃO",
          q: "A opção “Instalar apps desconhecidos” não aparece ou está cinza",
          intro: "Alguns Androids mudam o caminho ou bloqueiam sobreposição de tela.",
          steps: [
            "Vá em <strong>Configurações → Apps → Acesso especial → Instalar apps desconhecidos</strong>.",
            "Ative para o navegador usado (<strong>Chrome</strong>) e para o seu app de <strong>Arquivos</strong>.",
            "Desative bolhas flutuantes (como Messenger ou filtros de luz azul) na hora de tocar em Instalar."
          ]
        },
        {
          tag: "PLAYER",
          q: "O app instalou, mas um vídeo ou lista não carrega na rede móvel/Wi-Fi",
          intro: "Algumas operadoras bloqueiam DNS ou rotas externas.",
          steps: [
            "Dentro do Lume TV, vá em <strong>Ajustes → Testar conexão (Diagnóstico)</strong> para ver exatamente o que respondeu.",
            "Se o Wi-Fi da operadora estiver filtrando, ative o <strong>DNS Privado</strong> no Android (Configurações → Rede → DNS privado → <code>dns.google</code> ou <code>one.one.one.one</code>)."
          ]
        }
      ]
    },

    iphone: {
      methods: {
        sidestore: {
          summary: "<strong>Opção 1 · SideStore + LocalDevVPN (grátis, sem cabo toda semana):</strong> você configura 1 única vez no computador com o <strong>iloader</strong>. Depois disso, o SideStore renova o Lume TV pelo Wi-Fi direto no seu iPhone usando o <strong>LocalDevVPN</strong>.",
          steps: [
            {
              title: "1. Instale o LocalDevVPN e ligue o Modo Desenvolvedor",
              desc: "Na App Store do iPhone, baixe o app gratuito <strong>LocalDevVPN</strong>. Depois abra <strong>Ajustes → Privacidade e Segurança → Modo de Desenvolvedor</strong> e ative (o iPhone vai reiniciar).",
              mock: {
                head: "iPhone · Ajustes",
                rows: [
                  { label: "App Store: LocalDevVPN (grátis)" },
                  { label: "Modo de Desenvolvedor", toggle: true, target: true }
                ],
                hint: "Reinicie o iPhone quando pedir para ativar o Modo de Desenvolvedor."
              }
            },
            {
              title: "2. Instale o SideStore 1 vez via computador (iloader)",
              desc: "No PC/Mac, baixe o <strong>iloader</strong> oficial (<code>github.com/nab138/iloader</code>), conecte o iPhone no cabo USB, entre com sua conta Apple e clique em <strong>Install SideStore</strong>.",
              mock: {
                head: "PC / Mac · iloader",
                rows: [
                  { label: "iPhone conectado via USB + Confiar neste computador" }
                ],
                actions: [
                  { label: "Install SideStore", type: "target" }
                ],
                hint: "O iloader instala o SideStore e já cria o arquivo de pareamento."
              }
            },
            {
              title: "3. Confie no seu certificado e conecte o LocalDevVPN",
              desc: "No iPhone, vá em <strong>Ajustes → Geral → VPN e Gerenciamento de Dispositivos</strong> → toque no seu e-mail Apple → <strong>Confiar</strong>. Depois abra o <strong>LocalDevVPN</strong> no Wi-Fi e toque em <strong>Connect</strong>.",
              mock: {
                head: "LocalDevVPN · Wi-Fi",
                rows: [
                  { label: "Ajustes → Geral → VPN e Gerenciamento → Confiar", target: true }
                ],
                actions: [
                  { label: "Connect (VPN Local Ativa)", type: "vpn" }
                ],
                hint: "O LocalDevVPN precisa ficar ligado sempre que abrir o SideStore."
              }
            },
            {
              title: "4. Adicione o Lume TV (.ipa) no SideStore e ative HJUZJ4",
              desc: "Baixe o <code>Lume-TV-2.0.1-iPhone.ipa</code> aqui no site (salve em <strong>Arquivos</strong>). Com o LocalDevVPN conectado, abra <strong>SideStore → My Apps → +</strong>, escolha o <code>.ipa</code> e ative com <strong class=\"mono\">HJUZJ4</strong>.",
              mock: {
                head: "SideStore · My Apps",
                rows: [
                  { label: "Lume-TV-2.0.1-iPhone.ipa" }
                ],
                actions: [
                  { label: "+ Adicionar IPA", type: "target" },
                  { label: "Refresh All", type: "link" }
                ],
                hint: "Renove clicando em “Refresh All” 1x por semana com LocalDevVPN ligado."
              }
            }
          ]
        },
        livecontainer: {
          summary: "<strong>Opção 2 · LiveContainer (ideal para quem já tem 3 apps):</strong> a conta Apple gratuita só deixa 3 apps assinados fora da loja. O <strong>LiveContainer</strong> roda o Lume TV dentro dele sem gastar uma vaga extra de aplicativo no iPhone!",
          steps: [
            {
              title: "1. Tenha o SideStore + LocalDevVPN funcionando",
              desc: "Siga os passos da Opção 1 para instalar o <strong>SideStore</strong> (via <code>iloader</code>), confiar no perfil em <em>Ajustes → Geral → VPN e Gerenciamento</em> e deixar o <strong>LocalDevVPN</strong> conectado no Wi-Fi.",
              mock: {
                head: "Pré-requisito · iPhone",
                rows: [
                  { label: "LocalDevVPN conectado no Wi-Fi", toggle: true, target: true },
                  { label: "SideStore instalado e confiável" }
                ],
                hint: "Com SideStore pronto, você instala o LiveContainer direto nele."
              }
            },
            {
              title: "2. Instale o LiveContainer dentro do SideStore",
              desc: "Baixe o <code>LiveContainer.ipa</code> oficial (GitHub <code>LiveContainer/LiveContainer</code>) no iPhone e instale ele tocando em <strong>SideStore → My Apps → +</strong>.",
              mock: {
                head: "SideStore → Instalar LiveContainer",
                rows: [
                  { label: "LiveContainer.ipa (ocupa só 1 vaga)" }
                ],
                actions: [
                  { label: "+ Instalar LiveContainer", type: "target" }
                ],
                hint: "Depois disso, você pode pôr vários IPAs dentro do LiveContainer."
              }
            },
            {
              title: "3. Importe o certificado do SideStore no LiveContainer",
              desc: "Abra o <strong>LiveContainer → Settings (Engrenagem)</strong> e toque em <strong>Import Certificate from SideStore</strong> para ele herdar a assinatura automática sem pedir senha de novo.",
              mock: {
                head: "LiveContainer · Settings",
                rows: [
                  { label: "Import Certificate from SideStore", target: true },
                  { label: "Usar assinatura compartilhada do SideStore" }
                ],
                hint: "Faça esse passo uma única vez após instalar o LiveContainer."
              }
            },
            {
              title: "4. Adicione o Lume TV (.ipa) e dê Play",
              desc: "Baixe <code>Lume-TV-2.0.1-iPhone.ipa</code> aqui no site, abra o <strong>LiveContainer → botão +</strong>, selecione o arquivo do Lume TV, toque nele para iniciar e entre com <strong class=\"mono\">HJUZJ4</strong>.",
              mock: {
                head: "LiveContainer · Apps",
                rows: [
                  { label: "Lume TV Player (v2.0.1)", target: true }
                ],
                actions: [
                  { label: "+ Importar IPA", type: "link" },
                  { label: "Abrir Lume TV", type: "target" }
                ],
                hint: "Quando atualizar o Lume TV, importe o novo .ipa aqui dentro."
              }
            }
          ]
        }
      },
      errorsTitle: "Erros mais comuns no iPhone (SideStore, LocalDevVPN & LiveContainer)",
      errors: [
        {
          tag: "SIDE-STORE",
          q: "“Could not connect to device” ou “Failed to refresh” no SideStore",
          intro: "Esse é o erro número 1 do SideStore: ele precisa do túnel VPN local ativo no Wi-Fi.",
          steps: [
            "Confira se você está conectado em uma rede <strong>Wi-Fi</strong> (não funciona apenas no 4G/5G).",
            "Abra o app <strong>LocalDevVPN</strong> e garanta que o botão está como <strong>Connected</strong> (ligado). Se já estiver ligado, desligue e ligue novamente.",
            "Se continuar falhando após atualizar o iOS, conecte o iPhone ao PC/Mac, abra o <strong>iloader</strong> e refaça o arquivo de pareamento (<em>Pairing File</em>)."
          ]
        },
        {
          tag: "CERTIFICADO",
          q: "Apareceu “Desenvolvedor Não Confiável” ao tocar no SideStore ou LiveContainer",
          intro: "O iOS exige que você autorize manualmente sua conta Apple na primeira vez.",
          steps: [
            "Abra <strong>Ajustes → Geral → VPN e Gerenciamento de Dispositivos</strong>.",
            "Em <em>App de Desenvolvedor</em>, toque no seu e-mail da conta Apple.",
            "Toque em <strong>Confiar em “seu-email”</strong> e confirme em <strong>Confiar</strong>."
          ]
        },
        {
          tag: "DESENVOLVEDOR",
          q: "“Modo de Desenvolvedor Necessário” (ou a opção não aparece nos Ajustes)",
          intro: "A opção só fica visível no iPhone depois de instalar o primeiro app pelo computador/iloader.",
          steps: [
            "Abra <strong>Ajustes → Privacidade e Segurança</strong>, role até o final da página e toque em <strong>Modo de Desenvolvedor</strong>.",
            "Ligue a chave, toque em <strong>Reiniciar</strong> e, quando o iPhone ligar de volta, confirme em <strong>Ativar</strong> digitando a senha da tela.",
            "Se a opção não existir ainda, instale o SideStore via <strong>iloader</strong> no PC/Mac primeiro que o menu aparece na hora."
          ]
        },
        {
          tag: "LIMITE 3 APPS",
          q: "“Maximum number of apps for free developer profile reached” (limite de 3 apps)",
          intro: "Contas Apple gratuitas só permitem até 3 apps assinados simultaneamente (o SideStore já conta como 1) e 10 App IDs por semana.",
          steps: [
            "Use a <strong>Opção 2: LiveContainer</strong>! Remova outros apps extras do SideStore deixando só o SideStore + LiveContainer, e rode o Lume TV dentro do LiveContainer.",
            "Se atingiu o limite de <em>10 App IDs semanais</em>, basta aguardar os dias expirarem (o SideStore mostra a contagem regressiva em <em>View App IDs</em>)."
          ]
        },
        {
          tag: "EXPIROU 7 DIAS",
          q: "“Lume TV não está mais disponível” ou fecha imediatamente ao abrir",
          intro: "Passaram 7 dias desde a última renovação da assinatura gratuita da Apple.",
          steps: [
            "Conecte no Wi-Fi, abra o <strong>LocalDevVPN</strong> e toque em <strong>Connect</strong>.",
            "Abra o <strong>SideStore → My Apps</strong> e toque em <strong>Refresh All</strong> (ou no botão verde de dias ao lado do app).",
            "Se o próprio SideStore também expirou por passar de 7 dias sem abrir, basta reinstalar o SideStore 1x pelo <strong>iloader</strong> no PC/Mac (sem precisar apagar os dados)."
          ]
        },
        {
          tag: "LIVECONTAINER",
          q: "Erro de certificado / “Failed to sign” dentro do LiveContainer",
          intro: "O LiveContainer ainda não recebeu o certificado do SideStore ou o certificado foi renovado.",
          steps: [
            "Ligue o <strong>LocalDevVPN</strong>, abra o SideStore e clique em <strong>Refresh All</strong> no LiveContainer.",
            "Depois abra o <strong>LiveContainer → Settings → Import Certificate from SideStore</strong>.",
            "Se um IPA não abrir direto, toque e segure no Lume TV dentro do LiveContainer e teste alternar o modo de lançamento em <em>Settings → Launch Mode</em>."
          ]
        },
        {
          tag: "ANISETTE",
          q: "Erro de login Apple ID ou “Anisette server failed” no SideStore",
          intro: "O servidor Anisette padrão pode estar temporariamente instável.",
          steps: [
            "No SideStore, vá em <strong>Settings → Anisette Server</strong> e escolha outro servidor disponível na lista.",
            "Confira se data e hora do iPhone estão em <strong>Automático</strong> (Ajustes → Geral → Data e Hora)."
          ]
        }
      ]
    },

    firestick: {
      summary: "<strong>Amazon Fire TV Stick:</strong> use sempre o arquivo especial <strong>Fire Stick (32-bit · 25,1 MB)</strong> — ele é feito para rodar liso a 60 fps com pouca memória. Todo o processo é feito direto pelo controle remoto.",
      steps: [
        {
          title: "1. Libere as Opções para Desenvolvedores",
          desc: "Na TV, vá em <strong>Configurações → Minha Fire TV → Sobre</strong>. Selecione <strong>Fire TV Stick</strong> e aperte o botão central (OK) <strong>7 vezes seguidas</strong> até aparecer “Você já é um desenvolvedor”.",
          mock: {
            head: "Fire TV · Sobre",
            rows: [
              { label: "Fire TV Stick (aperte OK 7x seguidas)", target: true },
              { label: "Você já é um desenvolvedor!", toggle: true, target: false }
            ],
            hint: "Sem apertar 7 vezes em “Sobre”, o menu de desenvolvedor fica escondido."
          }
        },
        {
          title: "2. Instale o app Downloader e dê permissão",
          desc: "Na lupa da loja Amazon, baixe o app gratuito <strong>Downloader</strong> (ícone laranja). Depois volte em <strong>Configurações → Minha Fire TV → Opções para desenvolvedores → Instalar apps desconhecidos</strong> e mude o Downloader para <strong>ATIVADO</strong>.",
          mock: {
            head: "Opções para desenvolvedores",
            rows: [
              { label: "Instalar apps desconhecidos → Downloader", toggle: true, target: true }
            ],
            hint: "Deixe o Downloader como ATIVADO para ele poder abrir o APK."
          }
        },
        {
          title: "3. Baixe o Lume TV pelo Downloader",
          desc: "Abra o <strong>Downloader</strong>, toque na barra de endereço, digite <code>lume-tv-be0.pages.dev</code> e aperte <strong>Go</strong>. Role até a aba <strong>Fire TV Stick</strong> e clique em <strong>Baixar versão Fire Stick (.apk)</strong>.",
          mock: {
            head: "Downloader · Navegador",
            rows: [
              { label: "https://lume-tv-be0.pages.dev", target: true }
            ],
            actions: [
              { label: "Go", type: "target" }
            ],
            hint: "Ou use o link direto do APK na barra do Downloader."
          }
        },
        {
          title: "4. Instale, apague o APK e ative HJUZJ4",
          desc: "Clique em <strong>Instalar</strong> → <strong>Concluído</strong>. Na tela do Downloader, clique em <strong>Delete</strong> para liberar espaço da memória. Abra o Lume TV em <em>Seus Aplicativos</em> e digite <strong class=\"mono\">HJUZJ4</strong>.",
          mock: {
            head: "Downloader · Limpeza",
            rows: [
              { label: "Lume TV instalado com sucesso!" }
            ],
            actions: [
              { label: "Delete (apagar instalador)", type: "target" },
              { label: "Abrir Lume TV", type: "link" }
            ],
            hint: "Apagar o .apk depois de instalar economiza memória no Fire Stick."
          }
        }
      ],
      errorsTitle: "Erros mais comuns no Amazon Fire TV Stick",
      errors: [
        {
          tag: "OCULTO",
          q: "Não encontro “Opções para desenvolvedores” em Minha Fire TV",
          intro: "A Amazon esconde esse menu de fábrica nos Fire Sticks mais novos.",
          steps: [
            "Vá em <strong>Configurações → Minha Fire TV → Sobre</strong>.",
            "Deixe o foco no primeiro item (<strong>Fire TV Stick</strong>) e aperte o botão central do controle <strong>7 vezes seguidas</strong>.",
            "Aperte Voltar 1 vez e o menu <strong>Opções para desenvolvedores</strong> vai aparecer logo abaixo de Sobre."
          ]
        },
        {
          tag: "BLOQUEIO",
          q: "Downloader baixou, mas ao clicar em Instalar não acontece nada ou dá erro",
          intro: "Faltou ligar a permissão específica para o app Downloader.",
          steps: [
            "Vá em <strong>Configurações → Minha Fire TV → Opções para desenvolvedores → Instalar apps desconhecidos</strong>.",
            "Encontre o <strong>Downloader</strong> na lista e deixe como <strong>ATIVADO</strong>.",
            "Se já estiver ativado, reinicie o Fire Stick (segure <em>Play/Pause + Botão Central</em> por 5 segundos) e abra o Downloader em <em>Files</em> para instalar de novo."
          ]
        },
        {
          tag: "ESPAÇO / VERSÃO",
          q: "Apareceu “App não instalado” ou “Armazenamento insuficiente”",
          intro: "O Fire Stick tem pouca memória interna e rejeita APKs pesados ou se não houver espaço livre.",
          steps: [
            "Certifique-se de baixar a versão <strong>Fire Stick (25,1 MB · 32 bits)</strong> em vez da Universal (47,8 MB).",
            "Vá em <strong>Configurações → Aplicativos → Gerenciar aplicativos instalados</strong> e limpe o cache de apps grandes (ou desinstale apps que não usa) deixando pelo menos <strong>500 MB livres</strong>.",
            "Se havia uma versão muito antiga do Lume TV instalada, desinstale-a antes de instalar a nova."
          ]
        },
        {
          tag: "TELA INICIAL",
          q: "Instalei o Lume TV, mas ele não aparece na barra inicial da TV",
          intro: "Apps instalados por fora ficam na grade completa de Aplicativos até você fixar nos favoritos.",
          steps: [
            "Na tela inicial, vá até o ícone dos <strong>3 quadradinhos +</strong> (<em>Seus aplicativos e jogos</em>) e aperte OK.",
            "Desça até o final da lista e selecione o <strong>Lume TV</strong>.",
            "Aperte o botão de <strong>Menu (☰ três risquinhos)</strong> no controle e clique em <strong>Mover para a frente</strong>."
          ]
        },
        {
          tag: "DOWNLOADER",
          q: "O navegador do Downloader não carrega o botão ou trava na página",
          intro: "O controle remoto do Fire Stick às vezes fica preso no modo scroll.",
          steps: [
            "No Downloader, aperte <strong>Menu (☰)</strong> se precisar alternar o ponteiro, ou use o botão de <strong>Seta para baixo</strong> até destacar o botão laranja de download.",
            "Alternativa ainda mais rápida: baixe o APK no celular Android e envie sem cabo para o Fire Stick usando o app gratuito <strong>Send Files to TV</strong>."
          ]
        }
      ]
    },

    androidtv: {
      summary: "<strong>Android TV &amp; Google TV (TCL, Philips, Sony, Mi Box, Chromecast):</strong> o jeito mais fácil é baixar pelo <strong>Downloader</strong> direto na TV ou enviar o arquivo do celular para a TV em segundos com o <strong>Send Files to TV</strong>.",
      steps: [
        {
          title: "1. Instale o Send Files to TV (ou Downloader) na Play Store da TV",
          desc: "Abra a <strong>Google Play Store</strong> na sua TV e instale o app gratuito <strong>Send Files to TV</strong> (instale também no seu celular se quiser enviar do telefone).",
          mock: {
            head: "Google Play Store · TV",
            rows: [
              { label: "Send Files to TV (Grátis)", target: true },
              { label: "Downloader by AFTVnews (Alternativa)" }
            ],
            hint: "Os dois funcionam perfeitamente em qualquer Android TV / Google TV."
          }
        },
        {
          title: "2. Envie ou baixe o APK na TV",
          desc: "Pelo <strong>Send Files to TV</strong>: abra <em>Receive</em> na TV e envie o APK que você baixou no celular. Pelo <strong>Downloader</strong>: digite <code>lume-tv-be0.pages.dev</code> e baixe direto na TV.",
          mock: {
            head: "Send Files to TV",
            rows: [
              { label: "Lume-TV-Android.apk (47,8 MB) — Recebido" }
            ],
            actions: [
              { label: "Send (Celular)", type: "link" },
              { label: "Receive (TV)", type: "target" }
            ],
            hint: "Celular e TV precisam estar no mesmo Wi-Fi."
          }
        },
        {
          title: "3. Permita “Instalar apps desconhecidos” na TV",
          desc: "Quando clicar para abrir o APK na TV, o sistema pede permissão. Vá em <strong>Configurações → Segurança e restrições → Fontes desconhecidas</strong> (ou <em>Acesso especial</em>) e ative para o app usado.",
          mock: {
            head: "Google TV · Segurança",
            rows: [
              { label: "Send Files to TV / Downloader", toggle: true, target: true }
            ],
            hint: "Permita uma única vez e volte para concluir a instalação."
          }
        },
        {
          title: "4. Fixe na tela inicial e ative com HJUZJ4",
          desc: "Instale o app, toque em <strong>Abrir</strong> e digite o código <strong class=\"mono\">HJUZJ4</strong>. Na tela inicial do Google TV, toque no <strong>+</strong> de <em>Seus apps</em> se quiser fixar o Lume TV logo na primeira fileira.",
          mock: {
            head: "Android TV · Início",
            rows: [
              { label: "Lume TV Player ativado (HJUZJ4)", target: true }
            ],
            hint: "Navegação 100% pronta para o controle remoto."
          }
        }
      ],
      errorsTitle: "Erros mais comuns em Android TV / Google TV / TV Box",
      errors: [
        {
          tag: "PERMISSÃO",
          q: "Google TV / TCL bloqueia a instalação e não abre a tela de permissão",
          intro: "Em algumas versões do Google TV (Android 12/14), o caminho fica em Acesso especial.",
          steps: [
            "Vá na engrenagem <strong>Configurações → Apps → Segurança e restrições → Fontes desconhecidas</strong> (ou <em>Acesso especial a apps → Instalar apps desconhecidos</em>).",
            "Ative para o <strong>Send Files to TV</strong>, <strong>Downloader</strong> ou gerenciador de arquivos (ex.: <em>Cx File Explorer</em>).",
            "Se não abrir pelo Send Files to TV, abra o APK usando o app <strong>Cx File Explorer</strong> ou <strong>File Commander</strong> da Play Store da TV."
          ]
        },
        {
          tag: "TV BOX ANTIGA",
          q: "TV Box antiga deu “Erro ao analisar o pacote” ou “App não instalado”",
          intro: "Muitas TV Boxes antigas usam processador 32-bit ou Android bem antigo.",
          steps: [
            "Se você baixou o APK ARM64, troque para o <strong>APK Universal (47,8 MB)</strong> ou para a versão <strong>32-bit Leve (25,1 MB)</strong> na aba Fire Stick.",
            "Confira se há pelo menos 400 MB de espaço livre nas configurações de Armazenamento da Box."
          ]
        },
        {
          tag: "WIFI",
          q: "Send Files to TV não encontra minha TV na lista do celular",
          intro: "Os dois aparelhos precisam enxergar a mesma rede local.",
          steps: [
            "Confirme que o celular está no mesmo Wi-Fi da TV (não no 4G/5G e nem na rede “Convidados”).",
            "Garanta que o app está aberto na tela <strong>Receive</strong> na TV antes de clicar em <strong>Send</strong> no celular.",
            "Se o roteador isolar aparelhos, baixe direto pela TV usando o app <strong>Downloader</strong> em <code>lume-tv-be0.pages.dev</code>."
          ]
        },
        {
          tag: "ÍCONE",
          q: "O app instalou, mas não aparece na página inicial da Google TV",
          intro: "A Google TV oculta apps novos na aba Aplicativos.",
          steps: [
            "No menu do topo da TV, vá na aba <strong>Apps</strong> → role até <em>Seus apps → Ver tudo</em>.",
            "Segure o botão OK em cima do <strong>Lume TV</strong> e escolha <strong>Mover</strong> para trazê-lo para a frente."
          ]
        }
      ]
    },

    windows: {
      summary: "<strong>Windows (7 sem SP1, 8, 10 e 11 — 32 e 64 bits):</strong> baixe o instalador em 1 clique <code>Instalar-Lume-TV-2.1.2.exe</code>. Ele já instala tudo o que o sistema precisa (inclusive todas as DLLs necessárias no Windows 7 antigo).",
      steps: [
        {
          title: "1. Baixe e execute o Instalador Universal (.exe)",
          desc: "Na aba <strong>Windows</strong> acima, clique em <strong>Baixar Instalador Windows (.exe)</strong> e dê dois cliques em <code>Instalar-Lume-TV-2.1.2.exe</code> na pasta Downloads.",
          mock: {
            head: "Explorador de Arquivos · Downloads",
            rows: [
              { label: "Instalar-Lume-TV-2.1.2.exe (95,2 MB)", target: true }
            ],
            hint: "Dê dois cliques no instalador oficial (.exe)."
          }
        },
        {
          title: "2. Se aparecer a tela azul do Windows SmartScreen",
          desc: "Como o instalador é independente e gratuito, o Windows mostra a tela <em>“O Windows protegeu o computador”</em> na primeira vez. Clique no texto <strong>Mais informações</strong> e depois no botão <strong>Executar assim mesmo</strong>.",
          mock: {
            head: "Windows Defender SmartScreen",
            smartscreen: true,
            rows: [
              { label: "O Windows protegeu o computador — Editor desconhecido" }
            ],
            actions: [
              { label: "Mais informações (1º clique aqui)", type: "link" },
              { label: "Executar assim mesmo (2º clique)", type: "target" }
            ],
            hint: "O botão “Executar assim mesmo” só aparece depois de clicar em “Mais informações”."
          }
        },
        {
          title: "3. Conclua o instalador em 1 clique",
          desc: "Siga o assistente clicando em <strong>Avançar / Instalar</strong>. No Windows 7/8/10/11 ele configura automaticamente os componentes necessários e cria o atalho na Área de Trabalho.",
          mock: {
            head: "Instalação · Lume TV 2.1.2",
            rows: [
              { label: "Configurando player, certificados e atalho..." }
            ],
            actions: [
              { label: "Instalar", type: "target" }
            ],
            hint: "Não precisa instalar VLC nem Java por fora — já vai tudo dentro."
          }
        },
        {
          title: "4. Permita no Firewall (se pedir) e ative HJUZJ4",
          desc: "Na primeira abertura, se o Firewall do Windows perguntar, marque redes privadas e clique em <strong>Permitir acesso</strong>. Depois entre com o código <strong class=\"mono\">HJUZJ4</strong>.",
          mock: {
            head: "Firewall do Windows Defender",
            rows: [
              { label: "LumeTV.exe solicita acesso à rede local" }
            ],
            actions: [
              { label: "Permitir acesso", type: "target" }
            ],
            hint: "Depois disso é só digitar HJUZJ4 e aproveitar."
          }
        }
      ],
      errorsTitle: "Erros mais comuns no Windows (7 ao 11)",
      errors: [
        {
          tag: "SMARTSCREEN",
          q: "Tela azul: “O Windows protegeu o computador” (só aparece o botão Não executar)",
          intro: "Acontece com qualquer aplicativo novo que não paga certificado caro da Microsoft.",
          steps: [
            "Nessa própria janela azul, clique no link sublinhado <strong>Mais informações</strong> (logo abaixo do texto).",
            "Um segundo botão chamado <strong>Executar assim mesmo</strong> vai aparecer no rodapé — clique nele para iniciar a instalação normalmente."
          ]
        },
        {
          tag: "ANTIVÍRUS",
          q: "O Windows Defender ou antivírus apagou o instalador ou o LumeTV.exe",
          intro: "Alguns antivírus dão falso positivo em executáveis novos.",
          steps: [
            "Abra <strong>Segurança do Windows → Proteção contra vírus e ameaças → Histórico de proteção</strong>.",
            "Clique no item bloqueado recentemente, escolha <strong>Ações → Restaurar / Permitir no dispositivo</strong>.",
            "Se preferir, baixe a versão <strong>Portátil (.zip)</strong> e adicione a pasta extraída nas exclusões do antivírus."
          ]
        },
        {
          tag: "WINDOWS 7",
          q: "Erro de DLL no Windows 7 (api-ms-win-crt-runtime-l1-1-0.dll / ucrtbase.dll)",
          intro: "Ocorre no Windows 7 sem Service Pack 1 quando se tenta rodar versão antiga.",
          steps: [
            "Baixe sempre a versão <strong>2.1.2</strong> aqui do site: ela já embute as <strong>41 DLLs oficiais do Universal CRT</strong> ao lado do player para rodar até no Windows 7 sem SP1.",
            "Se você atualizou de uma versão antiga e ainda apareceu aviso de player, baixe e execute o <strong>Instalador Universal 2.1.2 (.exe)</strong> por cima para reparar automaticamente."
          ]
        },
        {
          tag: "PORTÁTIL ZIP",
          q: "Baixei a versão Portátil (.zip), abri de dentro do WinRAR/ZIP e deu erro",
          intro: "O Windows não deixa o player rodar corretamente de dentro de um arquivo compactado sem extrair.",
          steps: [
            "Clique com o botão direito no arquivo <code>.zip</code> e escolha <strong>Extrair tudo...</strong> para uma pasta normal (ex.: <code>C:\\LumeTV</code>).",
            "Entre na pasta extraída e abra o <code>LumeTV.exe</code> de lá."
          ]
        },
        {
          tag: "TELA / VÍDEO",
          q: "Janela abriu branca ou o vídeo fechou no PC antigo sem placa de vídeo moderna",
          intro: "Drivers antigos de vídeo no Windows 7/8 podem rejeitar aceleração padrão.",
          steps: [
            "A versão <strong>2.1.2</strong> já detecta automaticamente Windows 7/8 e ativa o modo de vídeo seguro.",
            "Se o PC estiver sem WebView2 no Windows 10/11, execute o <strong>Instalador Universal 2.1.2 (.exe)</strong> que ele baixa e instala o runtime oficial automaticamente."
          ]
        },
        {
          tag: "REDE / FIREWALL",
          q: "O aplicativo abre, mas não conecta ou o player trava no carregamento",
          intro: "O Firewall do Windows ou antivírus bloqueou o motor local.",
          steps: [
            "Se você clicou em “Cancelar” no aviso do Firewall, vá em <strong>Painel de Controle → Firewall do Windows Defender → Permitir um aplicativo</strong> e marque <code>LumeTV.exe</code>.",
            "Em seguida abra <strong>Ajustes → Testar conexão</strong> dentro do próprio Lume TV."
          ]
        }
      ]
    }
  };

  let currentGuidePlatform = "android";
  let currentIosMethod = "sidestore";

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

  // 4. Copiar código de acesso em qualquer botão
  document.querySelectorAll(".copy-code-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const code = btn.dataset.code || activeAccessCode;
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
        const prevHtml = label.innerHTML;
        label.textContent = "Copiado ✓";
        setTimeout(() => {
          label.innerHTML = prevHtml.replace(/[A-Z0-9]{4,16}/g, (m) => (m === prevHtml ? activeAccessCode : m));
          label.querySelectorAll("[data-access-code]").forEach((el) => {
            el.textContent = activeAccessCode;
          });
        }, 2000);
      }
      showToast(`Código ${code} copiado! Use ao abrir o Lume TV Player.`);
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

  // 6. Guia Interativo YouTube (Celular vs TV)
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

  // 7. Central de Download & QR Code Dinâmico
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
    activeDownloadPlatform = key;
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
      dlSteps.innerHTML = data.steps.map((s) => `<li>${withActiveCode(s)}</li>`).join("");
    }

    if (dlQrImg) dlQrImg.src = data.qr;
    if (dlQrTitle) dlQrTitle.textContent = data.qrTitle;
    if (dlQrSub) dlQrSub.textContent = data.qrSub;
    if (qrSwitch) qrSwitch.style.display = data.showQrSwitch ? "flex" : "none";

    // Mantém o guia visual sincronizado com a plataforma escolhida na área de download
    renderGuide(key, currentIosMethod);
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

  // 8. Guia Visual Passo a Passo + Solução de Erros
  const iphoneMethodTabs = document.getElementById("iphoneMethodTabs");
  const guideSummary = document.getElementById("guideSummary");
  const guideStepsGrid = document.getElementById("guideStepsGrid");
  const troubleshootTitle = document.getElementById("troubleshootTitle");
  const errorCountPill = document.getElementById("errorCountPill");
  const errorList = document.getElementById("errorList");

  function buildMockHtml(mock) {
    if (!mock) return "";
    const rowsHtml = (mock.rows || [])
      .map((r) => {
        const toggleHtml = r.toggle !== undefined ? `<span class="mock-toggle ${r.toggle ? "is-on" : ""}" aria-hidden="true"></span>` : "";
        return `<div class="mock-row ${r.target ? "is-target" : ""}"><span>${r.label}</span>${toggleHtml}</div>`;
      })
      .join("");
    const actionsHtml = (mock.actions || []).length
      ? `<div class="mock-actions">${mock.actions
          .map((a) => {
            let cls = "mock-btn";
            if (a.type === "target") cls += " is-target";
            else if (a.type === "link") cls += " is-link-target";
            else if (a.type === "vpn") cls += " is-vpn-on";
            return `<span class="${cls}">${a.label}</span>`;
          })
          .join("")}</div>`
      : "";
    const hintHtml = mock.hint ? `<div class="mock-hint">👆 ${mock.hint}</div>` : "";

    return `
      <div class="ui-mock ${mock.smartscreen ? "mock-smartscreen" : ""}" aria-hidden="true">
        <div class="mock-head">
          <span>${withActiveCode(mock.head)}</span>
          <span class="mock-dots"><i></i><i></i><i></i></span>
        </div>
        <div class="mock-body">
          ${withActiveCode(rowsHtml)}
          ${withActiveCode(actionsHtml)}
          ${withActiveCode(hintHtml)}
        </div>
      </div>
    `;
  }

  function renderGuide(platform, iosMethod) {
    const data = INSTALL_GUIDES[platform];
    if (!data) return;
    currentGuidePlatform = platform;
    if (iosMethod) currentIosMethod = iosMethod;

    document.querySelectorAll(".guide-tab").forEach((t) => {
      const active = t.dataset.guide === platform;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });

    const isIos = platform === "iphone";
    if (iphoneMethodTabs) {
      iphoneMethodTabs.hidden = !isIos;
      if (isIos) {
        iphoneMethodTabs.querySelectorAll(".guide-subtab").forEach((b) => {
          const active = b.dataset.iosMethod === currentIosMethod;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-selected", String(active));
        });
      }
    }

    const activeView = isIos ? data.methods[currentIosMethod] : data;
    if (guideSummary) guideSummary.innerHTML = activeView.summary;

    if (guideStepsGrid) {
      guideStepsGrid.innerHTML = activeView.steps
        .map(
          (step, i) => `
          <article class="guide-step-card">
            <div>
              <span class="guide-step-num">PASSO 0${i + 1}</span>
              <h4>${withActiveCode(step.title)}</h4>
              <p>${withActiveCode(step.desc)}</p>
            </div>
            ${buildMockHtml(step.mock)}
          </article>
        `
        )
        .join("");
    }

    if (troubleshootTitle) troubleshootTitle.textContent = data.errorsTitle;
    if (errorCountPill) errorCountPill.textContent = `${data.errors.length} soluções`;

    if (errorList) {
      errorList.innerHTML = data.errors
        .map(
          (err, idx) => `
          <div class="error-item ${idx === 0 ? "is-open" : ""}">
            <button type="button" class="error-q" aria-expanded="${idx === 0 ? "true" : "false"}">
              <span class="error-q-left">
                <span class="error-badge">${err.tag}</span>
                <span>${err.q}</span>
              </span>
              <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="error-a" ${idx === 0 ? "" : "hidden"}>
              <p>${err.intro}</p>
              <ol>${err.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
            </div>
          </div>
        `
        )
        .join("");

      errorList.querySelectorAll(".error-item").forEach((item) => {
        const btn = item.querySelector(".error-q");
        const ans = item.querySelector(".error-a");
        if (!btn || !ans) return;
        btn.addEventListener("click", () => {
          const willOpen = ans.hidden;
          ans.hidden = !willOpen;
          item.classList.toggle("is-open", willOpen);
          btn.setAttribute("aria-expanded", String(willOpen));
        });
      });
    }
  }

  document.querySelectorAll(".guide-tab").forEach((tab) => {
    tab.addEventListener("click", () => renderGuide(tab.dataset.guide, currentIosMethod));
  });

  document.querySelectorAll(".guide-subtab").forEach((sub) => {
    sub.addEventListener("click", () => renderGuide("iphone", sub.dataset.iosMethod));
  });

  renderGuide("android", "sidestore");

  // 8.5 Sincronização automática do código com o painel (/api/codigo)
  function applyAccessCode(newCode) {
    const clean = String(newCode || "").trim().toUpperCase();
    if (!/^[A-Z0-9]{4,16}$/.test(clean) || clean === activeAccessCode) return;
    activeAccessCode = clean;

    document.querySelectorAll("[data-access-code]").forEach((el) => {
      el.textContent = clean;
    });
    document.querySelectorAll(".copy-code-btn").forEach((btn) => {
      btn.dataset.code = clean;
      if (btn.getAttribute("aria-label")) {
        btn.setAttribute("aria-label", `Copiar código de ativação ${clean}`);
      }
    });

    selectPlatform(activeDownloadPlatform);
    renderGuide(currentGuidePlatform, currentIosMethod);
  }

  (async () => {
    try {
      const res = await fetch("/api/codigo", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.code) applyAccessCode(data.code);
    } catch (_) {
      // Mantém o código padrão em caso de ambiente offline ou local sem Function
    }
  })();

  // 9. Brilho reativo no Hero (Notebook + iPhone) ao mover e aproximar do centro dos ícones Play
  const heroStage = document.querySelector(".hero-stage");
  const heroDeviceRender = document.querySelector(".hero-device-render");
  const reducedMotionQuery = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  if (heroStage && heroDeviceRender && !(reducedMotionQuery && reducedMotionQuery.matches)) {
    const updateHeroGlow = (e) => {
      const rect = heroDeviceRender.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const ny = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

      // Centros relativos do botão Play no notebook (52%, 47%) e no iPhone (77%, 58%)
      const dNotebook = Math.hypot((nx - 0.52) * 1.15, ny - 0.47);
      const dIphone = Math.hypot((nx - 0.77) * 1.15, ny - 0.58);
      const d = Math.min(dNotebook, dIphone);
      const prox = Math.pow(Math.max(0, 1 - d / 0.32), 1.6);

      heroStage.classList.add("is-hovering");
      heroStage.style.setProperty("--hx", `${(nx * 100).toFixed(2)}%`);
      heroStage.style.setProperty("--hy", `${(ny * 100).toFixed(2)}%`);
      heroStage.style.setProperty("--hover", "1");
      heroStage.style.setProperty("--prox", prox.toFixed(3));
    };

    const resetHeroGlow = () => {
      heroStage.classList.remove("is-hovering");
      heroStage.style.setProperty("--hx", "52%");
      heroStage.style.setProperty("--hy", "47%");
      heroStage.style.setProperty("--hover", "0");
      heroStage.style.setProperty("--prox", "0");
    };

    heroDeviceRender.addEventListener("pointerenter", updateHeroGlow);
    heroDeviceRender.addEventListener("pointermove", updateHeroGlow);
    heroDeviceRender.addEventListener("pointerleave", resetHeroGlow);
  }

  // 9.1 Spotlight especular nos cards Bento e áreas do player
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  // 10. FAQ Accordion
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

  // 11. Reveal on Scroll
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

  // 12. Animação leve Cinema Prism no canvas de fundo
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
