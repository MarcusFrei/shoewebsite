import { Cta } from "../components/Cta.jsx";
import { L } from "../components/Link.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { Process } from "../components/Process.jsx";

export function Werkwijze() {
  return (<><PageHead crumbs={[["Werkwijze"]]} eyebrow="Werkwijze" title="Hoe meet ik uw schoenen op?" lead="Van eerste gesprek tot uw definitieve schoen: u weet altijd waar u aan toe bent." /><Process />
    <section className="sec wrap"><p className="eyebrow rv">Meer over de leest</p><h2 className="rv">De leest is de ziel van de schoen</h2><L to="leest-maken" className="link">Hoe een leest wordt gemaakt →</L></section>
    <section className="sec wrap"><Cta /></section></>);
}
