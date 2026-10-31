import { BOOKING } from "../data/index.js";

export const Cta = ({ title = "Klachten aan uw voeten?", text = "Maak vrijblijvend een afspraak met Frans." }) => (
  <div className="cta rv"><div><h3>{title}</h3><p>{text}</p></div><a className="btn btn-light" href={BOOKING}>Afspraak maken</a></div>
);
