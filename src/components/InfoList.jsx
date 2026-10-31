export const InfoList = ({ title, items, tone }) => items?.length ? <div className={"panel rv " + (tone || "")}><h3>{title}</h3><ul>{items.map(s => <li key={s}>{s}</li>)}</ul></div> : null;
