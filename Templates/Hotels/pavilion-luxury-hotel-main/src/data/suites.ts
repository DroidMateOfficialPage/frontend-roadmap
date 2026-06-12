import suiteImg from "@/assets/suite.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import poolImg from "@/assets/pool.jpg";
import terraceImg from "@/assets/terrace.jpg";
import bathImg from "@/assets/bath.jpg";
import spaImg from "@/assets/spa.jpg";

export type Suite = {
  slug: string;
  name: string;
  tagline: string;
  size: string;
  occupancy: string;
  bed: string;
  view: string;
  rate: number; // EUR / night
  img: string;
  gallery: string[];
  desc: string;
  longDesc: string;
  amenities: string[];
};

export const SUITES: Suite[] = [
  {
    slug: "deluxe-sea-view",
    name: "Deluxe Sea View",
    tagline: "An intimate retreat above the Adriatic.",
    size: "52 m²",
    occupancy: "2 guests",
    bed: "King · Egyptian cotton",
    view: "Sea & coastline",
    rate: 480,
    img: suiteImg,
    gallery: [suiteImg, bathImg, poolImg],
    desc: "King bed, marble bath, private balcony framing the Adriatic.",
    longDesc:
      "Forty-two square meters of quiet sophistication. Floor-to-ceiling glass opens to a private balcony above the sea; the marble bath is appointed with a deep soaking tub and Diptyque amenities. Each evening, a turndown ritual prepares the suite for the night ahead.",
    amenities: [
      "King bed, Egyptian cotton linens",
      "Private balcony · sea view",
      "Marble bath with soaking tub",
      "Diptyque amenities",
      "Nespresso & curated minibar",
      "In-suite check-in",
    ],
  },
  {
    slug: "garden-pavilion-suite",
    name: "Garden Pavilion Suite",
    tagline: "A walled garden, a private terrace, a separate salon.",
    size: "78 m²",
    occupancy: "2 guests · +1 child",
    bed: "King · separate salon",
    view: "Cypress garden",
    rate: 720,
    img: lobbyImg,
    gallery: [lobbyImg, suiteImg, spaImg],
    desc: "Living salon, walk-in dressing room, and private terrace.",
    longDesc:
      "A two-room residence with a separate salon, walk-in dressing, and a private terrace opening onto the cypress garden and reflecting pool. Designed for longer stays, the suite includes a dedicated workspace and an evening canapé service.",
    amenities: [
      "Separate living salon",
      "Walk-in dressing room",
      "Private garden terrace",
      "Workspace with high-speed wifi",
      "Evening canapé service",
      "Complimentary breakfast for two",
    ],
  },
  {
    slug: "rooftop-terrace-suite",
    name: "Rooftop Terrace Suite",
    tagline: "Sunset, cypress, and a private plunge pool.",
    size: "96 m²",
    occupancy: "2 guests",
    bed: "King · with daybed",
    view: "Open sea, west-facing",
    rate: 1180,
    img: terraceImg,
    gallery: [terraceImg, bathImg, poolImg],
    desc: "Private plunge pool, west-facing terrace, panoramic horizon.",
    longDesc:
      "A west-facing rooftop residence with a private plunge pool and sun deck overlooking the open sea. Ideal for sunset stays; the terrace is privately served by your butler for breakfast in bed under the cypress.",
    amenities: [
      "Private plunge pool",
      "West-facing terrace · sunset",
      "Butler service",
      "Breakfast served on the terrace",
      "Bath ritual on arrival",
      "Sunset apéritif daily",
    ],
  },
  {
    slug: "royal-pavilion",
    name: "The Royal Pavilion",
    tagline: "The house signature. By private invitation.",
    size: "140 m²",
    occupancy: "4 guests",
    bed: "Two bedrooms · two baths",
    view: "Sea & garden",
    rate: 1950,
    img: poolImg,
    gallery: [poolImg, lobbyImg, terraceImg, bathImg],
    desc: "Two bedrooms, a private plunge pool and dedicated butler.",
    longDesc:
      "The Pavilion's signature residence. Two bedrooms, two marble baths, a formal dining room for eight, a grand salon, and a private plunge pool. A dedicated butler and chef-on-call are included. Available by request only.",
    amenities: [
      "Two bedrooms, two baths",
      "Formal dining for eight",
      "Private plunge pool",
      "Dedicated butler · 24h",
      "Private chef on call",
      "Airport transfer included",
    ],
  },
];

export const getSuite = (slug: string) => SUITES.find((s) => s.slug === slug);
