export function linkify(t) {
  return t.split(/(https?:\/\/\S+|[\w.-]+@[\w.-]+\.\w+)/).map((s, i) =>
    i % 2 === 0 ? s : <a key={i} className="inline" href={s.includes("@") ? "mailto:" + s : s} target={s.includes("@") ? undefined : "_blank"} rel="noopener">{s}</a>);
}
