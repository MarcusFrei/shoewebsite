import { IconMail, IconPhone } from "./Icons.jsx";
import { L } from "./Link.jsx";
import { BOOKING, NAV, LOCS } from "../data/index.js";

export function Footer() {
  const doc = "https://schoenateliertheunissen.nl/";
  return (
    <footer className="ftr"><div className="wrap">
      <div className="ftr-grid">
        <div className="ftr-brand">
          <L to="home" className="logo"><span className="logo-mark">T</span><span>Schoenatelier<br /><b>Theunissen</b></span></L>
          <p className="muted">Een aangepaste schoen voor iedereen.</p>
          <a className="btn btn-sm" href={BOOKING}>Afspraak maken →</a>
          <div className="social">
            <a href="https://www.linkedin.com/in/frans-theunissen-a3963565/" aria-label="LinkedIn" target="_blank" rel="noopener">in</a>
            <a href="https://www.facebook.com/Schoenatelier-Theunissen-108172317614573/" aria-label="Facebook" target="_blank" rel="noopener">f</a>
          </div>
        </div>
        <nav aria-label="Footermenu"><h4>Pagina’s</h4><ul className="flinks">{NAV.map(n => <li key={n.to}><L to={n.to}>{n.label}</L></li>)}</ul></nav>
        <div><h4>Contact</h4>
          <a className="fbtn" href="tel:+31648773971"><span aria-hidden><IconPhone /></span>+31 6 4877 3971</a>
          <a className="fbtn" href="mailto:info@schoenateliertheunissen.nl"><span aria-hidden><IconMail /></span><em>info@<wbr />schoenateliertheunissen.nl</em></a>
        </div>
        <div><h4>Locaties</h4><ul className="flocs">{LOCS.map(l => <li key={l[0]}><a href={l[3]} target="_blank" rel="noopener"><b>{l[0]}</b><span>{l[2]}</span><i aria-hidden>↗</i></a></li>)}</ul></div>
      </div>
      <div className="ftr-bot"><span>© Schoenatelier Theunissen · KvK 77748115 · BTW 8611.24.492.B01</span>
        <span className="legal"><L to="disclaimer">Disclaimer</L><L to="privacy">Privacy</L><a href={doc + "wp-content/uploads/2023/11/Klachtenprocedure-en-formulier-Schoenatelier-Theunissen.pdf"}>Klachtenprocedure</a></span></div>
    </div></footer>
  );
}
