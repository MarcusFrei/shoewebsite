import { useState } from "react";

export function Photo({ label, className = "", src, i = 0 }) {
  const [bad, setBad] = useState(false);
  return <div className={`photo ph${i % 4} ${className}`}>{src && !bad ? <img src={src} alt={label} loading="lazy" onError={() => setBad(true)} /> : <span>{label}</span>}</div>;
}
