import { Cta } from "../components/Cta.jsx";
import { Gallery } from "../components/Gallery.jsx";
import { L } from "../components/Link.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { Photo } from "../components/Photo.jsx";
import { Rules } from "../components/Rules.jsx";
import { img, PHOTO, GALLERY } from "../data/index.js";

export function OverMij({ open }) {
  return (<>
    <PageHead crumbs={[["Over mij"]]} eyebrow="Over mij" title="Van vakman met een verhaal" lead="Frans Theunissen gelooft in meer dan alleen schoenen maken. Voor hem begint alles bij de mens: zijn verhaal, zijn voeten, zijn leven." />
    <section className="sec wrap split">
      <div className="rv"><p>Al meer dan 30 jaar combineert Frans vakmanschap met een persoonlijke aanpak. Hij luistert eerst, meet daarna. Want ieder mens is anders, en dat verdient maatwerk in de ware zin van het woord.</p>
        <p>Schoenatelier Theunissen is dé specialist op het gebied van orthopedisch maatschoeisel en steunzolen. Persoonlijk contact, snelheid en kwaliteit staan hoog in het vaandel.</p>
        <a className="btn btn-ghost" href="https://www.youtube.com/watch?v=KdjURVuqHEE">▶ Bekijk het interview met Benno Kroese</a></div>
      <Photo className="tall rv" label="Frans Theunissen" src={img(PHOTO.frans)} />
    </section>
    <section className="sec tint"><div className="wrap awards">
      <div className="award rv"><b>🥇</b><h3>Europees kampioen</h3><p>Goud bij de Europese vakwedstrijden voor schoenmakers.</p></div>
      <div className="award rv"><b>🥉</b><h3>3e prijs van Europa</h3><p>Op het onderdeel maatschoenen.</p></div>
      <div className="award rv"><b>30+</b><h3>Jaar vakmanschap</h3><p>Persoonlijk, snel en met oog voor kwaliteit.</p></div>
    </div></section>
    <section className="sec wrap"><div className="sec-head rv"><div><p className="eyebrow">Enkele voorbeelden</p><h2>Mijn werk</h2></div><L to="galerij" className="link">Hele galerij →</L></div>
      <Gallery items={GALLERY.slice(0, 8)} open={open} /></section>
    <Rules />
    <section className="sec wrap"><Cta text="Wilt u weten waarmee ik u van dienst kan zijn? Neem vrijblijvend contact op." /></section>
  </>);
}
