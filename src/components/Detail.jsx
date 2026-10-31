import { L } from "./Link.jsx";
import { PageHead } from "./PageHead.jsx";
import { Photo } from "./Photo.jsx";
import { BOOKING, img } from "../data/index.js";

export function Detail({ item, parent, items, children }) {
  return (<>
    <PageHead crumbs={[[parent[0], parent[1]], [item.title]]} eyebrow={item.latin || parent[0]} title={item.title} lead={item.lead} />
    <section className="sec wrap detail">
      <div>
        {item.photo && <Photo className="wide rv" label={item.title} src={img(item.photo)} />}
        {children}
        <div className="more rv"><h4>Ook bekijken</h4><div className="chips">{items.filter(x => x.slug !== item.slug).map(x => <L key={x.slug} to={x.slug} className="pill">{x.title}</L>)}</div></div>
      </div>
      <aside className="side rv"><h3>Persoonlijk advies</h3><p>Weet u niet zeker wat bij u past? Frans denkt graag met u mee.</p>
        <a className="btn" href={BOOKING}>Afspraak maken</a><a className="tel" href="tel:+31648773971">+31 6 4877 3971</a></aside>
    </section>
  </>);
}
