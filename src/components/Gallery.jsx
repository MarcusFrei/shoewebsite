import { Photo } from "./Photo.jsx";
import { img, GALLERY } from "../data/index.js";

export function Gallery({ items = GALLERY, open }) {
  return (
    <div className="masonry">{items.map(([f, c], i) => (
      <button key={f} className="tile rv" onClick={() => open(GALLERY.findIndex(g => g[0] === f))} aria-label={"Open foto: " + c}>
        <Photo i={i} className={"h" + (i % 3)} src={img(f)} label={c} />
      </button>))}</div>
  );
}
