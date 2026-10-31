import { Cta } from "../components/Cta.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { LOCS } from "../data/index.js";

export function Contact() {
  return (<><PageHead crumbs={[["Contact"]]} eyebrow="Contact" title="Kom langs, in de buurt" lead="Frans werkt vanuit Tegelen en meet ook aan in Venlo, Oeffelt en Roermond." />
    <section className="sec wrap"><div className="grid4">{LOCS.map(([c, k, a, m], i) => <a className={"loc rv" + (i === 0 ? " main" : "")} href={m} key={c}><small>{k}</small><h3>{c}</h3><p>{a}</p><span>Route →</span></a>)}</div>
      <div className="contact-lines rv"><a href="tel:+31648773971">📞 +31 6 4877 3971</a><a href="mailto:info@schoenateliertheunissen.nl">✉ info@schoenateliertheunissen.nl</a></div></section>
    <section className="sec wrap"><Cta title="Liever direct een afspraak?" text="Kies zelf een moment dat u past." /></section></>);
}
