import { Cta } from "../components/Cta.jsx";
import { Gallery } from "../components/Gallery.jsx";
import { PageHead } from "../components/PageHead.jsx";

export function Galerij({ open }) {
  return (<><PageHead crumbs={[["Galerij"]]} eyebrow="Galerij" title="Voorbeelden van mijn werk" lead="Aangepaste schoenen, steunzolen en vakwerk uit het atelier. Klik op een foto om hem groot te bekijken." />
    <section className="sec wrap"><Gallery open={open} /></section><section className="sec wrap"><Cta /></section></>);
}
