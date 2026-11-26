/**
 * Cloudflare Pages Function: /api/releases
 * Busca automaticamente as últimas versões publicadas no GitHub Releases
 * (mobile/TV: tag vX.Y.Z · Windows: tag windows-vX.Y.Z) para manter o site
 * sempre sincronizado sem precisar editar links manualmente a cada release.
 */
const REPO = "Drill23/lume-tv-atualizacoes";
const GH_RELEASES_API = `https://api.github.com/repos/${REPO}/releases?per_page=15`;
const DL_BASE = `https://github.com/${REPO}/releases`;

const FALLBACK = {
  ok: true,
  source: "fallback",
  mobileVersion: "2.1.0",
  windowsVersion: "2.2.0",
  mobileTag: "v2.1.0",
  windowsTag: "windows-v2.2.0",
  assets: {
    androidUniversal: {
      url: `${DL_BASE}/latest/download/Lume-TV-Android.apk`,
      sizeMb: "49,2"
    },
    androidArm64: {
      url: `${DL_BASE}/latest/download/Lume-TV-ARM64.apk`,
      sizeMb: "25,3"
    },
    fireStick: {
      url: `${DL_BASE}/latest/download/Lume-TV-FireStick.apk`,
      sizeMb: "25,9"
    },
    iphone: {
      url: `${DL_BASE}/latest/download/Lume-TV-iPhone.ipa`,
      sizeMb: "46,0"
    },
    windowsInstaller: {
      url: `${DL_BASE}/download/windows-v2.2.0/Instalar-Lume-TV-2.2.0.exe`,
      file: "Instalar-Lume-TV-2.2.0.exe",
      sizeMb: "95,2"
    },
    windowsPortable64: {
      url: `${DL_BASE}/download/windows-v2.2.0/LumeTV-2.2.0-Win64.zip`,
      sizeMb: "63,9"
    },
    windowsPortable32: {
      url: `${DL_BASE}/download/windows-v2.2.0/LumeTV-2.2.0-Win7-x86.zip`,
      sizeMb: "59,8"
    }
  }
};

function fmtMb(bytes, fallbackMb) {
  if (!Number.isFinite(bytes) || bytes <= 0) return fallbackMb;
  return (bytes / (1024 * 1024)).toFixed(1).replace(".", ",");
}

function findAsset(release, regex) {
  const list = Array.isArray(release?.assets) ? release.assets : [];
  return list.find((a) => regex.test(String(a?.name || ""))) || null;
}

function respond(payload) {
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

export async function onRequestGet() {
  try {
    const res = await fetch(GH_RELEASES_API, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "LumeTV-Site"
      },
      signal: AbortSignal.timeout(4500)
    });
    if (!res.ok) return respond(FALLBACK);
    const releases = await res.json();
    if (!Array.isArray(releases)) return respond(FALLBACK);

    const mobileRel = releases.find(
      (r) => !r.draft && !r.prerelease && /^v(\d+\.\d+\.\d+)$/.test(String(r.tag_name || ""))
    );
    const winRel = releases.find(
      (r) => !r.draft && !r.prerelease && /^windows-v(\d+\.\d+\.\d+)$/.test(String(r.tag_name || ""))
    );

    const mobileVersion = mobileRel
      ? String(mobileRel.tag_name).replace(/^v/, "")
      : FALLBACK.mobileVersion;
    const windowsVersion = winRel
      ? String(winRel.tag_name).replace(/^windows-v/, "")
      : FALLBACK.windowsVersion;

    const aUni = findAsset(mobileRel, /^Lume-TV-(?:\d+\.\d+\.\d+-)?Android\.apk$/i);
    const aArm = findAsset(mobileRel, /^Lume-TV-(?:\d+\.\d+\.\d+-)?ARM64\.apk$/i);
    const aFs = findAsset(mobileRel, /^Lume-TV-(?:\d+\.\d+\.\d+-)?FireStick\.apk$/i);
    const aIos = findAsset(mobileRel, /^Lume-TV-(?:\d+\.\d+\.\d+-)?iPhone\.ipa$/i);

    const wExe = findAsset(winRel, /^Instalar-Lume-TV-.*\.exe$/i);
    const wZip64 = findAsset(winRel, /^LumeTV-.*-Win64\.zip$/i);
    const wZip32 = findAsset(winRel, /^LumeTV-.*-Win7-x86\.zip$/i);

    return respond({
      ok: true,
      source: "github",
      mobileVersion,
      windowsVersion,
      mobileTag: mobileRel ? mobileRel.tag_name : FALLBACK.mobileTag,
      windowsTag: winRel ? winRel.tag_name : FALLBACK.windowsTag,
      assets: {
        androidUniversal: {
          url: aUni?.browser_download_url || `${DL_BASE}/latest/download/Lume-TV-Android.apk`,
          sizeMb: fmtMb(aUni?.size, FALLBACK.assets.androidUniversal.sizeMb)
        },
        androidArm64: {
          url: aArm?.browser_download_url || `${DL_BASE}/latest/download/Lume-TV-ARM64.apk`,
          sizeMb: fmtMb(aArm?.size, FALLBACK.assets.androidArm64.sizeMb)
        },
        fireStick: {
          url: aFs?.browser_download_url || `${DL_BASE}/latest/download/Lume-TV-FireStick.apk`,
          sizeMb: fmtMb(aFs?.size, FALLBACK.assets.fireStick.sizeMb)
        },
        iphone: {
          url: aIos?.browser_download_url || `${DL_BASE}/latest/download/Lume-TV-iPhone.ipa`,
          sizeMb: fmtMb(aIos?.size, FALLBACK.assets.iphone.sizeMb)
        },
        windowsInstaller: {
          url: wExe?.browser_download_url || FALLBACK.assets.windowsInstaller.url,
          file: wExe?.name || `Instalar-Lume-TV-${windowsVersion}.exe`,
          sizeMb: fmtMb(wExe?.size, FALLBACK.assets.windowsInstaller.sizeMb)
        },
        windowsPortable64: {
          url: wZip64?.browser_download_url || FALLBACK.assets.windowsPortable64.url,
          sizeMb: fmtMb(wZip64?.size, FALLBACK.assets.windowsPortable64.sizeMb)
        },
        windowsPortable32: {
          url: wZip32?.browser_download_url || FALLBACK.assets.windowsPortable32.url,
          sizeMb: fmtMb(wZip32?.size, FALLBACK.assets.windowsPortable32.sizeMb)
        }
      }
    });
  } catch (_) {
    return respond(FALLBACK);
  }
}
