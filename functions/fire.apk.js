const RELEASE_APK = "https://github.com/Drill23/lume-tv-atualizacoes/releases/latest/download/Lume-TV-FireStick.apk";
const APK_CONTENT_TYPE = "application/vnd.android.package-archive";

export async function onRequest({ request }) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
  }

  const headers = new Headers();
  for (const name of ["Range", "If-Range"]) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  try {
    const upstream = await fetch(RELEASE_APK, { method: request.method, headers });
    if (upstream.status === 416 && headers.has("Range")) return upstream;
    if (upstream.ok && upstream.headers.get("Content-Type") === APK_CONTENT_TYPE) return upstream;
  } catch {
    // Responde com erro em texto se o servidor de origem estiver fora do ar.
  }

  return new Response(request.method === "GET" ? "Download indisponível. Tente novamente em instantes." : null, {
    status: 502,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" }
  });
}
