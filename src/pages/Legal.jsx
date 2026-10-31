import { PageHead } from "../components/PageHead.jsx";
import { linkify } from "../utils/linkify.jsx";

export function Legal({ d }) {
  return (<>
    <PageHead crumbs={[[d.title]]} eyebrow="Juridisch" title={d.title} />
    <section className="sec wrap"><div className="doc">
      {d.blocks.map((b, i) => (
        <div key={i} className="rv">
          {b.h && <h2>{b.h}</h2>}
          {b.p?.map(t => <p key={t}>{linkify(t)}</p>)}
          {b.ul && <ul>{b.ul.map(t => <li key={t}>{t}</li>)}</ul>}
        </div>))}
      <p className="note">Vragen over deze pagina? Mail naar <a className="inline" href="mailto:info@schoenateliertheunissen.nl">info@schoenateliertheunissen.nl</a> of bel <a className="inline" href="tel:+31648773971">+31 6 4877 3971</a>.</p>
    </div></section>
  </>);
}
