import { PRODUCTS } from "./products.js";
import { KLACHTEN } from "./klachten.js";

export const NAV = [
  { label: "Over mij", to: "over-mij" },
  { label: "Diensten", to: "diensten" },
  { label: "Producten", to: "producten", sub: PRODUCTS },
  { label: "Voetklachten", to: "voetklachten", sub: KLACHTEN },
  { label: "Werkwijze", to: "werkwijze" },
  { label: "Galerij", to: "galerij" },
  { label: "Contact", to: "contact" },
];
