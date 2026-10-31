import { useEffect, useState } from "react";
import { Contact } from "./pages/Contact.jsx";
import { Diensten } from "./pages/Diensten.jsx";
import { Footer } from "./components/Footer.jsx";
import { Galerij } from "./pages/Galerij.jsx";
import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";
import { KlachtPage } from "./pages/KlachtPage.jsx";
import { Legal } from "./pages/Legal.jsx";
import { Lightbox } from "./components/Lightbox.jsx";
import { OverMij } from "./pages/OverMij.jsx";
import { Overview } from "./pages/Overview.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";
import { Werkwijze } from "./pages/Werkwijze.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { useRoute } from "./hooks/useRoute.js";
import { PRODUCTS, KLACHTEN, LEGAL } from "./data/index.js";

export default function App() {
  const route = useRoute();
  const [theme, setTheme] = useState("light"); // standaard licht
  const [lb, setLb] = useState(null);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  useReveal(route);
  const prod = PRODUCTS.find(p => p.slug === route), kl = KLACHTEN.find(k => k.slug === route);
  let page;
  if (prod) page = <ProductPage p={prod} />;
  else if (kl) page = <KlachtPage k={kl} />;
  else if (route === "over-mij") page = <OverMij open={setLb} />;
  else if (route === "diensten") page = <Diensten />;
  else if (route === "producten") page = <Overview eyebrow="Producten" title="Producten" lead="Hiermee kan ik u van dienst zijn." items={PRODUCTS} />;
  else if (route === "voetklachten") page = <Overview eyebrow="Voetklachten" title="Voetklachten" lead="Klik op een klacht om te lezen wat het is, hoe u het herkent en wat kan helpen." items={KLACHTEN} />;
  else if (route === "werkwijze") page = <Werkwijze />;
  else if (route === "galerij") page = <Galerij open={setLb} />;
  else if (route === "contact") page = <Contact />;
  else if (LEGAL[route]) page = <Legal d={LEGAL[route]} />;
  else page = <Home open={setLb} />;
  return (<div id="top"><Header route={route} theme={theme} setTheme={setTheme} /><main key={route}>{page}</main><Footer /><Lightbox i={lb} set={setLb} /></div>);
}
