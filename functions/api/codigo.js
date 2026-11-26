/**
 * Cloudflare Pages Function: /api/codigo
 * Busca o código público atual do painel via variável de ambiente
 * PANEL_SITE_CODE_URL no Cloudflare Pages (mantendo a URL fora do repo público).
 * Em caso de falha ou ausência da variável, retorna o código padrão HJUZJ4.
 */
const FALLBACK_CODE = "HJUZJ4";
const CODE_PATTERN = /^[A-Z0-9]{4,16}$/;

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
  const targetUrl = String(env?.PANEL_SITE_CODE_URL || "").trim();
  if (!targetUrl.startsWith("https://")) {
    return respond({ ok: true, code: FALLBACK_CODE, updatedAt: null, source: "fallback" });
  }

  try {
    const res = await fetch(targetUrl, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(4000)
    });
    if (res.ok) {
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
    }
  } catch (_) {
    // Fallback silencioso para manter o site sempre funcional
  }

  return respond({ ok: true, code: FALLBACK_CODE, updatedAt: null, source: "fallback" });
}
