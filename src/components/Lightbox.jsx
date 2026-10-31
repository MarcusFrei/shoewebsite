import { useEffect } from "react";
import { Photo } from "./Photo.jsx";
import { img, GALLERY } from "../data/index.js";

export function Lightbox({ i, set }) {
  const n = GALLERY.length;
  useEffect(() => {
    if (i == null) return;
    const k = e => { if (e.key === "Escape") set(null); if (e.key === "ArrowRight") set((i + 1) % n); if (e.key === "ArrowLeft") set((i + n - 1) % n); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [i]);
  if (i == null) return null;
  const [f, c] = GALLERY[i];
  const go = d => e => { e.stopPropagation(); set((i + d + n) % n); };
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Foto" onClick={() => set(null)}>
      <button className="lb-btn lb-x" aria-label="Sluiten">✕</button>
      <button className="lb-btn lb-p" aria-label="Vorige" onClick={go(-1)}>‹</button>
      <figure onClick={e => e.stopPropagation()}><Photo className="lb-img" i={i} src={img(f)} label={c} /><figcaption>{c} · {i + 1}/{n}</figcaption></figure>
      <button className="lb-btn lb-n" aria-label="Volgende" onClick={go(1)}>›</button>
    </div>
  );
}
