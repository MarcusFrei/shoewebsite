import { PHOTO } from "./config.js";

export const KLACHTEN = [
  { slug: "platvoet", title: "Platvoet", latin: "Pes planus", short: "Pijn, zwelling en vermoeide voeten", photo: PHOTO.platvoet,
    lead: "Platvoeten zijn een aangeboren afwijking aan de voet.",
    symptoms: ["Pijn, zwelling en vermoeidheid in de voet", "Vaak ook klachten aan rug, heupen en knieën"],
    help: ["Speciale zooltjes houden voet en enkel in een rechte stand en verbeteren die", "Het verschil is direct merkbaar"] },
  { slug: "hielspoor", title: "Hielspoor", latin: "Fasciitis plantaris", short: "Felle pijn onder de hiel",
    lead: "Hielspoor ontstaat door overbelasting van hielen en voeten.",
    symptoms: ["Goed aanwijsbare, felle pijn onderaan de hiel", "Een niet-bacteriële ontsteking van het peesblad bij de aanhechting aan het hielbeen"],
    help: ["Rust voor uw voeten is de beste remedie", "Een goede zool helpt u een heel eind op weg en voorkomt dat de klacht terugkomt"] },
  { slug: "holvoet", title: "Holvoet", latin: "Pes cavus", short: "Een te hoge voetboog", photo: PHOTO.holvoet,
    lead: "Een holvoet is het tegenovergestelde van een platvoet; het eerste stadium heet ook wel balvoet. Een normale voetboog is zo’n 1,3 cm hoog, bij een holvoet is die hoger.",
    symptoms: ["Een erg hoge wreef en voetboog", "Gespannen voetzolen en een aangespannen achillespees", "Tenen die neigen tot klauwstand"],
    help: ["Een drukontlastende zool op maat gaat spanning en eeltvorming tegen"] },
  { slug: "metatarsalgie", title: "Metatarsalgie", latin: "Voorvoetklachten", short: "Pijn onder de bal van de voet",
    lead: "Metatarsalgie is een brede naam voor voorvoetklachten: pijn onderaan de voorvoet, vlak voor de plek waar de tenen beginnen.",
    symptoms: ["Overdruk op een of meer kopjes van de middenvoetsbeentjes", "Ontstoken pezen en vlies rond die kopjes"],
    causes: ["Een dunner wordend vetkussen onder de voet (ouderdom)", "Schoenen met een hoge hak", "Een binnenzool die niet goed steunt"],
    help: ["In een persoonlijk gesprek kijken we naar uw voet en schoenen en bepalen we welke zool of aanpassing past"] },
];
