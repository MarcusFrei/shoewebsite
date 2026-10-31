import { Cta } from "../components/Cta.jsx";
import { L } from "../components/Link.jsx";
import { PageHead } from "../components/PageHead.jsx";

export function Overview({ eyebrow, title, lead, items, extra }) {
  return (<>
    <PageHead crumbs={[[title]]} eyebrow={eyebrow} title={title} lead={lead} />
    <section className="sec wrap"><div className="grid4 cols2">{items.map((p, i) => (
      <L to={p.slug} className="card rv" key={p.slug}><span className="num">{p.latin || "0" + (i + 1)}</span><h3>{p.title}</h3><p>{p.short}</p><span className="arrow">Lees meer →</span></L>))}</div></section>
    {extra}<section className="sec wrap"><Cta /></section>
  </>);
}
