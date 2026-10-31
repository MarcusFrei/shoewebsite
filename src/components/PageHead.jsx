import { L } from "./Link.jsx";

export const PageHead = ({ eyebrow, title, lead, crumbs }) => (
  <section className="phead"><div className="wrap">
    {crumbs && <nav className="crumbs" aria-label="Kruimelpad"><L to="home">Home</L>{crumbs.map(([t, to]) => [<span key={t + "s"}>/</span>, to ? <L key={t} to={to}>{t}</L> : <b key={t}>{t}</b>])}</nav>}
    <p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{lead && <p className="lead">{lead}</p>}
  </div></section>
);
