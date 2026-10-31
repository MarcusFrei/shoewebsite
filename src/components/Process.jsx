import { STEPS } from "../data/index.js";

export function Process() {
  return (<section className="sec tint"><div className="wrap">
    <p className="eyebrow rv">Werkwijze</p><h2 className="rv">Hoe meet ik uw schoenen op?</h2>
    <ol className="steps">{STEPS.map(([t, d], i) => <li className="rv" key={t}><span className="step-n">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
  </div></section>);
}
