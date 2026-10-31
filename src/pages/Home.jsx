import { Cta } from "../components/Cta.jsx";
import { Gallery } from "../components/Gallery.jsx";
import { L } from "../components/Link.jsx";
import { Photo } from "../components/Photo.jsx";
import { Process } from "../components/Process.jsx";
import { Rules } from "../components/Rules.jsx";
import { BOOKING, img, PHOTO, GALLERY, PRODUCTS, KLACHTEN } from "../data/index.js";

export function Home({ open }) {
  return (<>
    <section className="hero wrap">
      <div>
        <p className="eyebrow">Orthopedisch schoenmaker · Tegelen</p>
        <h1>Een aangepaste schoen <em>voor iedereen.</em></h1>
        <p className="lead">Van kleine tot grote voetproblemen: er is altijd een oplossing. Jong of oud, Frans helpt u weer op weg.</p>
        <div className="row"><a className="btn" href={BOOKING}>Maak vrijblijvend een afspraak</a><L to="producten" className="btn btn-ghost">Bekijk producten</L></div>
        <ul className="facts"><li><b>30+</b> jaar ervaring</li><li><b>4</b> locaties</li><li><b>EK</b> goud schoenmakers</li></ul>
      </div>
      <div className="hero-img"><Photo className="tall" label="Frans Theunissen" src={img(PHOTO.frans)} /><div className="badge">Europees kampioen<br />schoenmaker</div></div>
    </section>

    <section className="sec wrap split">
      <Photo className="sq rv" i={1} label="In het atelier" src={img(PHOTO.atelier)} />
      <div className="rv"><p className="eyebrow">Over mij</p><h2>Puur vakwerk en kwaliteit</h2>
        <p>Bij Schoenatelier Theunissen zijn de mogelijkheden eindeloos. Frans luistert eerst en meet daarna, want ieder mens is anders.</p>
        <p>Blijf niet met klachten rondlopen en maak vrijblijvend een afspraak.</p><L to="over-mij" className="link">Lees mijn verhaal →</L></div>
    </section>

    <section className="sec tint"><div className="wrap">
      <div className="sec-head rv"><div><p className="eyebrow">Producten</p><h2>Hiermee kan ik u van dienst zijn</h2></div><L to="diensten" className="link">Alle diensten →</L></div>
      <div className="grid4">{PRODUCTS.map((p, i) => <L to={p.slug} className="card rv" key={p.slug}><span className="num">0{i + 1}</span><h3>{p.title}</h3><p>{p.short}</p><span className="arrow">→</span></L>)}</div>
    </div></section>

    <section className="sec wrap">
      <div className="sec-head rv"><div><p className="eyebrow">Galerij</p><h2>Een greep uit mijn werk</h2></div><L to="galerij" className="link">Hele galerij →</L></div>
      <Gallery items={GALLERY.slice(0, 6)} open={open} />
    </section>

    <section className="sec tint"><div className="wrap">
      <p className="eyebrow rv">Voetklachten</p><h2 className="rv">Herkent u dit?</h2>
      <div className="grid4">{KLACHTEN.map(k => <L to={k.slug} className="chip rv" key={k.slug}><b>{k.title}</b><span>{k.short}</span><em>Lees meer →</em></L>)}</div>
    </div></section>

    <section className="sec wrap"><article className="news rv">
      <Photo className="news-img" i={2} label="Europees kampioen" src={img(PHOTO.news)} />
      <div><p className="eyebrow">In het nieuws</p><h2>“Je moet de spanning in de voet voelen”</h2>
        <p>Frans Theunissen won goud bij de Europese vakwedstrijden voor schoenmakers. De Tegelse schoenmaker deed voor de tweede keer mee; de vorige keer werd hij derde.</p></div>
    </article></section>

    <Process />
    <Rules />
    <section className="sec wrap"><Cta /></section>
  </>);
}
