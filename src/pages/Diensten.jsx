import { Cta } from "../components/Cta.jsx";
import { L } from "../components/Link.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { Photo } from "../components/Photo.jsx";
import { img, DIENSTEN } from "../data/index.js";

export function Diensten() {
  return (<>
    <PageHead crumbs={[["Diensten"]]} eyebrow="Diensten" title="Wat kan ik voor u betekenen?" lead="Veel mensen leven dagelijks met voetklachten, en dat kan een enorme impact hebben. De meeste afwijkingen komen door de stand van de voet. Ik verlicht ze graag, of verhelp ze zelfs." />
    <section className="sec wrap"><p className="eyebrow rv">Van klein naar groot</p><h2 className="rv">Welke oplossing past bij uw voet?</h2>
      <p className="muted rv">Afhankelijk van uw voet zijn er drie mogelijkheden. We beginnen zo licht mogelijk en gaan alleen verder als dat nodig is.</p>
      <div className="ladder">{DIENSTEN.map(d => (
        <article className="rung rv" key={d.n}><span className="num">{d.n}</span><div><small>{d.when}</small><h3>{d.title}</h3><p>{d.text}</p><L to={d.to} className="link">Meer over {d.title.toLowerCase()} →</L></div></article>))}</div>
    </section>
    <section className="sec tint"><div className="wrap"><p className="eyebrow rv">Samenwerking</p><h2 className="rv">Ik sta er niet alleen voor</h2>
      <div className="partners">{[["Smeets", "elementor/thumbs/smeets-qrjaqe7awqze3tfi5q236kouer4jtahbfhzxzx6g0w.jpg"], ["Toe", "2024/07/toe.png"], ["Ortho", "2024/07/ortho.jpg"]].map(([n, f], i) => <Photo key={n} i={i} className="partner rv" label={"Logo " + n} src={img(f)} />)}</div></div></section>
    <section className="sec wrap"><Cta /></section>
  </>);
}
