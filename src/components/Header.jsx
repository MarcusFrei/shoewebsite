import { useEffect, useState } from "react";
import { L } from "./Link.jsx";
import { BOOKING, NAV } from "../data/index.js";

export function Header({ route, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); document.activeElement?.blur?.(); }, [route]);
  const on = (to, sub) => route === to || (sub && sub.some(s => s.slug === route));
  return (
    <header className="hdr"><div className="wrap hdr-in">
      <L to="home" className="logo" aria-label="Schoenatelier Theunissen"><span className="logo-mark">T</span><span>Schoenatelier<br /><b>Theunissen</b></span></L>
      <nav className={"nav" + (open ? " open" : "")} aria-label="Hoofdmenu">
        {NAV.map(n => (
          <div className="nav-item" key={n.to}>
            <L to={n.to} className={on(n.to, n.sub) ? "on" : ""}>{n.label}{n.sub && <i aria-hidden>▾</i>}</L>
            {n.sub && <div className="drop">{n.sub.map(s => <L key={s.slug} to={s.slug}>{s.title}</L>)}</div>}
          </div>
        ))}
        <a className="btn btn-sm nav-cta" href={BOOKING}>Afspraak maken</a>
      </nav>
      <button className="icon-btn" aria-label="Thema wisselen" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "☾" : "☀"}</button>
      <button className="icon-btn burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
    </div></header>
  );
}
