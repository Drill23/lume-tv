/**
 * Cloudflare Pages Function: /api/codigo
 * Busca o código público no painel oficial. PANEL_SITE_CODE_URL pode indicar
 * outro endpoint de leitura, com o painel oficial como alternativa.
 * Se as consultas falharem, retorna o código padrão HJUZJ4.
 */
const FALLBACK_CODE = "HJUZJ4";
const CODE_PATTERN = /^[A-Z0-9]{4,16}$/;
const PANEL_URL = "https://lume-tv-acessos.adriano-s-almeida.chatgpt.site/api/public/site-code";

function respond(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=30",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

export async function onRequestGet({ env }) {
  const configuredUrl = String(env?.PANEL_SITE_CODE_URL || "").trim();
  for (const targetUrl of new Set([configuredUrl, PANEL_URL])) {
    if (!targetUrl.startsWith("https://")) continue;
    try {
      const res = await fetch(targetUrl, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(4000)
      });
      if (!res.ok) continue;
      const data = await res.json();
      const raw = String(data && data.code ? data.code : "").trim().toUpperCase();
      if (CODE_PATTERN.test(raw)) {
        return respond({
          ok: true,
          code: raw,
          updatedAt: data.updatedAt || null,
          source: "panel"
        });
      }
    } catch (_) {
      // Tenta a próxima origem antes de retornar o código padrão.
    }
  }

  return respond({ ok: true, code: FALLBACK_CODE, updatedAt: null, source: "fallback" });
}
