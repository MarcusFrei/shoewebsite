import { Detail } from "../components/Detail.jsx";
import { InfoList } from "../components/InfoList.jsx";
import { PRODUCTS } from "../data/index.js";

export function ProductPage({ p }) {
  return (<Detail item={p} parent={["Producten", "producten"]} items={PRODUCTS}>
    {p.sections?.map(([h, t]) => <div className="prose rv" key={h}><h3>{h}</h3><p>{t}</p></div>)}
    {p.points && <InfoList title={p.pointsTitle} items={p.points} />}
    {p.note && <p className="note rv">{p.note}</p>}
  </Detail>);
}
