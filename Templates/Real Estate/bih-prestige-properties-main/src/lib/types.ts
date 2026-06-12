export type Currency = "KM" | "EUR";

export const EUR_TO_KM = 1.95583;

export type Region =
  | "Sarajevo - Centar"
  | "Sarajevo - Stari Grad"
  | "Sarajevo - Poljine"
  | "Banja Luka - Centar"
  | "Banja Luka - Slatina"
  | "Mostar"
  | "Jahorina"
  | "Bjelašnica"
  | "Trebinje"
  | "Neum"
  | "Tuzla"
  | "Bihać";

export const REGIONS: Region[] = [
  "Sarajevo - Centar",
  "Sarajevo - Stari Grad",
  "Sarajevo - Poljine",
  "Banja Luka - Centar",
  "Banja Luka - Slatina",
  "Mostar",
  "Jahorina",
  "Bjelašnica",
  "Trebinje",
  "Neum",
  "Tuzla",
  "Bihać",
];

export type TransactionType = "Prodaja" | "Najam" | "Investicioni projekat";

export type PropertyType =
  | "Stan"
  | "Vila"
  | "Kuća"
  | "Penthaus"
  | "Poslovni prostor";

export type LandType =
  | "Građevinsko sa dozvolom"
  | "Građevinsko u zoni"
  | "Poljoprivredno"
  | "Industrijska zona";

export type HeatingType =
  | "Toplotne pumpe"
  | "Podno grijanje"
  | "Centralno"
  | "Plin";

export type PremiumAmenity =
  | "Smart Home"
  | "Privatni bazen"
  | "Sauna / Spa"
  | "Privatni lift"
  | "Panoramski pogled"
  | "Garaža sa EV punjačem"
  | "Privatno dvorište"
  | "Portir 24/7";

export type Infrastructure =
  | "Voda"
  | "Struja"
  | "Asfaltni prilaz"
  | "Makadamski prilaz"
  | "Kanalizacija"
  | "Optički internet";

export type Slope = "Ravno" | "Blagi nagib" | "Padina";

export type ViewType =
  | "Pogled na grad"
  | "Pogled na rijeku"
  | "Pogled na more"
  | "Šumska zona"
  | "Planinski pogled";

export interface Agent {
  name: string;
  role: string;
  license: string;
  phone: string;
  whatsapp: string;
  image: string;
}

export interface BaseListing {
  id: string;
  slug: string;
  kind: "property" | "land";
  title: string;
  subtitle: string;
  region: Region;
  microLocation: string;
  transaction: TransactionType;
  priceEur: number;
  area: number; // m²
  badge?: "Ekskluzivna prodaja" | "Provjereno vlasništvo" | "Novogradnja" | "Investicija";
  featured?: boolean;
  images: string[];
  description: {
    about: string;
    interior?: string;
    location: string;
  };
  agent: Agent;
  coordinates: { lat: number; lng: number };
  distances: { label: string; km: number }[];
  legal: {
    vlasnistvo: string;
    uknjizenost: string;
    energetskiCertifikat?: string;
  };
}

export interface Property extends BaseListing {
  kind: "property";
  propertyType: PropertyType;
  rooms: number;
  bathrooms: number;
  floor?: number;
  totalFloors?: number;
  hasLift?: boolean;
  yearBuilt: number;
  heating: HeatingType;
  amenities: PremiumAmenity[];
  buildType: string;
  insulation: string;
}

export interface Land extends BaseListing {
  kind: "land";
  landType: LandType;
  areaDunum?: number;
  infrastructure: Infrastructure[];
  allowedFloors: string; // e.g. "P+2+M"
  occupancyRatio: number; // e.g. 0.4
  slope: Slope;
  view: ViewType;
  permitStatus: string;
  regulationPlan: string;
}

export type Listing = Property | Land;
