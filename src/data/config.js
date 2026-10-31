export const BOOKING = "https://schoenateliertheunissen.uwvragenlijst.nl/Agenda.aspx";

const BASE = "https://schoenateliertheunissen.nl/wp-content/uploads/";

// В превью (VITE_PREVIEW) картинки не грузим; в вашем проекте они берутся со старого сайта.
// Когда сайт переедет — скачайте файлы в /public/images и поменяйте BASE.
export const img = (p) => (import.meta.env.VITE_PREVIEW ? undefined : BASE + p);

export const PHOTO = {
  frans: "2025/10/Theunissen-schoenatelier-We4Media-7-Frans-699x1024.jpg",
  atelier: "2025/10/Theunissen-schoenatelier-We4Media-8.jpg",
  atelier2: "2025/10/Theunissen-schoenatelier-We4Media-3.jpg",
  news: "2025/10/df105d19-935f-4c53-9918-6bd5f3d9f005.jpeg",
  platvoet: "2021/06/schoenatelier-theunissen-platvoet-1024x294.jpg",
  holvoet: "2021/06/schoenatelier-theunissen-holvoet-scaled-1-1024x683.jpg",
};
