import { RULES } from "../data/index.js";

export function Rules() {
  return (<section className="sec wrap"><p className="eyebrow rv">10 regels van Frans</p><h2 className="rv">Waar ik voor sta</h2>
    <ul className="rules">{RULES.map((r, i) => <li className="rv" key={r}><small>{String(i + 1).padStart(2, "0")}</small>{r}</li>)}</ul></section>);
}
