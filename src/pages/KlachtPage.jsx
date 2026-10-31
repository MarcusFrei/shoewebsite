import { Detail } from "../components/Detail.jsx";
import { InfoList } from "../components/InfoList.jsx";
import { KLACHTEN } from "../data/index.js";

export function KlachtPage({ k }) {
  return (<Detail item={k} parent={["Voetklachten", "voetklachten"]} items={KLACHTEN}>
    <div className="two"><InfoList title="Hoe herkent u het?" items={k.symptoms} /><InfoList title="Wat helpt?" items={k.help} tone="good" /></div>
    <InfoList title="Mogelijke oorzaken" items={k.causes} />
    <p className="note rv">Heeft u deze klachten? Maak een vrijblijvende afspraak, dan bekijkt Frans samen met u uw voeten en schoenen.</p>
  </Detail>);
}
