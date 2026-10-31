import { useEffect, useState } from "react";

const getRoute = () => location.hash.slice(1) || "home";

export function useRoute() {
  const [r, setR] = useState(getRoute);
  useEffect(() => {
    const f = () => { setR(getRoute()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  return r;
}
