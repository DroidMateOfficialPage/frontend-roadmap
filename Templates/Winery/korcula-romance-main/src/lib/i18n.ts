import { createContext, useContext } from "react";

export type Lang = "hr" | "en";

type Dict = {
  nav: { story: string; collection: string; experiences: string; reviews: string; contact: string; cta: string };
  hero: { eyebrow: string; title: string; sub: string; scroll: string };
  story: { eyebrow: string; title: string; p1: string; p2: string; p3: string; signature: string };
  collection: {
    eyebrow: string; title: string; sub: string; tasting: string; pairing: string; vintage: string;
    items: ReadonlyArray<{ name: string; kind: string; tasting: string; pairing: string; vintage: string }>;
  };
  experiences: {
    eyebrow: string; title: string; sub: string; from: string; perPerson: string; book: string;
    items: ReadonlyArray<{ name: string; desc: string; duration: string; price: string }>;
  };
  reviews: { eyebrow: string; title: string; items: ReadonlyArray<{ quote: string; author: string; source: string }> };
  booking: {
    title: string; sub: string; experience: string; date: string; time: string; guests: string;
    name: string; email: string; phone: string; notes: string; submit: string; sent: string; sentDesc: string;
  };
  footer: {
    tagline: string; hours: string; hoursVal: string; visit: string; visitVal: string;
    newsletter: string; newsletterDesc: string; newsletterPh: string; subscribe: string; rights: string;
  };
};

export const translations = {
  hr: {
    nav: {
      story: "Priča o nama",
      collection: "Naša Vina & Pivo",
      experiences: "Doživljaji",
      reviews: "Dojmovi",
      contact: "Kontakt",
      cta: "Rezervirajte kušanje",
    },
    hero: {
      eyebrow: "Vinarija Tasovac · Žrnovo, Korčula",
      title: "Tradicija u svakoj kapi,\nstrast u svakom trenutku.",
      sub: "Obiteljska vinarija na otoku Korčuli — gdje sunce, kamen i more pišu priču u svakoj boci.",
      scroll: "Zaviri u priču",
    },
    story: {
      eyebrow: "Naša priča",
      title: "Korijeni duboki kao naši vinogradi.",
      p1: "U srcu Žrnova, gdje vjetar nosi miris smilja i mora, naša obitelj generacijama njeguje lozu. Svaka berba pisana je rukom, svaka boca odiše strpljenjem.",
      p2: "Tlo Korčule — kameno, suho, milovano suncem — daruje nam autohtone sorte čija duša ne može nastati nigdje drugdje na svijetu. Pošip koji pjeva, Plavac Mali koji šapće.",
      p3: "Vinarija Tasovac nije samo mjesto gdje nastaje vino. To je trenutak. Mirisi hrastovih bačvi, tiho kuckanje čaša, pogled koji se zaustavlja na zalasku.",
      signature: "— Obitelj Tasovac",
    },
    collection: {
      eyebrow: "Kolekcija",
      title: "Umjetnost u staklu.",
      sub: "Tri priče. Tri okusa otoka. Svaka boca — pozivnica.",
      tasting: "Bilješke o okusu",
      pairing: "Sljubljivanje",
      vintage: "Godina",
      items: [
        {
          name: "Pošip",
          kind: "Bijelo vino · Autohtona sorta",
          tasting: "Mirisi marelice, lipe i morske soli. Mineralan, svilenkast, dugog završetka.",
          pairing: "Svježa riba, dagnje na buzaru, mladi sirevi.",
          vintage: "2023",
        },
        {
          name: "Plavac Mali",
          kind: "Crno vino · Tradicija Dalmacije",
          tasting: "Zrele višnje, smokva, divlje bilje i nota duhana. Topao, baršunast, snažan.",
          pairing: "Pašticada, janjetina ispod peke, zreli pršut.",
          vintage: "2021",
        },
        {
          name: "Pagvan",
          kind: "Craft pivo · Otočki recept",
          tasting: "Lagana citrusna svježina, suptilna gorčina hmelja, kruška u finišu.",
          pairing: "Ljetne večeri, slane srdele, hladovina pod maslinom.",
          vintage: "Batch No. 04",
        },
      ],
    },
    experiences: {
      eyebrow: "Doživljaji",
      title: "Večer koja se pamti.",
      sub: "Intimni rituali kušanja u našoj vinariji u Žrnovu — pod zvijezdama, među bačvama.",
      from: "od",
      perPerson: "po osobi",
      book: "Rezerviraj",
      items: [
        {
          name: "Klasično kušanje",
          desc: "Pet vrhunskih uzoraka, dalmatinske delicije, priča vinara.",
          duration: "90 minuta",
          price: "35 €",
        },
        {
          name: "Večera pod zvijezdama",
          desc: "Sljubljena večera od četiri slijeda na kamenoj terasi.",
          duration: "3 sata",
          price: "95 €",
        },
        {
          name: "Privatni doživljaj za dvoje",
          desc: "Šetnja vinogradom, kušanje u podrumu, intimna večera uz svijeće.",
          duration: "4 sata",
          price: "240 €",
        },
      ],
    },
    reviews: {
      eyebrow: "Dojmovi gostiju",
      title: "Riječi onih koji su ostali bez riječi.",
      items: [
        { quote: "Najljepše večeri našeg putovanja po Hrvatskoj. Obitelj Tasovac nas je dočekala kao svoje.", author: "Sofia & Marco", source: "TripAdvisor" },
        { quote: "Pošip koji ću pamtiti zauvijek. Pogled, vino, ljubav — sve na jednom mjestu.", author: "Helena K.", source: "TripAdvisor" },
        { quote: "Magija Korčule sažeta u jednu večer. Topla preporuka za sve zaljubljene u život.", author: "James R.", source: "TripAdvisor" },
      ],
    },
    booking: {
      title: "Rezervirajte svoj trenutak",
      sub: "Javit ćemo Vam se osobno u roku od 24 sata.",
      experience: "Doživljaj",
      date: "Datum",
      time: "Vrijeme",
      guests: "Broj osoba",
      name: "Ime i prezime",
      email: "E-mail",
      phone: "Telefon (neobavezno)",
      notes: "Posebne želje",
      submit: "Pošalji rezervaciju",
      sent: "Hvala. Vidimo se uskoro u Žrnovu.",
      sentDesc: "Vaša poruka je zaprimljena. Javit ćemo Vam se uskoro.",
    },
    footer: {
      tagline: "Vinarija Tasovac · Žrnovo, otok Korčula",
      hours: "Radno vrijeme",
      hoursVal: "Svaki dan · 17:00 – 23:00\nPo dogovoru tijekom dana",
      visit: "Posjetite nas",
      visitVal: "Žrnovo, 20275\nOtok Korčula, Hrvatska",
      newsletter: "Pridružite se",
      newsletterDesc: "Sezonske priče, berbe i pozivnice na privatne događaje.",
      newsletterPh: "Vaša e-mail adresa",
      subscribe: "Prijavi se",
      rights: "Sva prava pridržana.",
    },
  },
  en: {
    nav: {
      story: "Our Story",
      collection: "Wines & Beer",
      experiences: "Experiences",
      reviews: "Guests",
      contact: "Contact",
      cta: "Book a tasting",
    },
    hero: {
      eyebrow: "Tasovac Winery · Žrnovo, Korčula",
      title: "Tradition in every drop,\npassion in every moment.",
      sub: "A family winery on the island of Korčula — where sun, stone and sea write a story into every bottle.",
      scroll: "Step into the story",
    },
    story: {
      eyebrow: "Our story",
      title: "Roots as deep as our vines.",
      p1: "In the heart of Žrnovo, where the wind carries the scent of immortelle and sea, our family has tended the vines for generations. Every harvest is written by hand; every bottle breathes patience.",
      p2: "The Korčula terroir — stony, dry, kissed by the sun — gives us native varieties whose soul cannot be born anywhere else. A Pošip that sings, a Plavac Mali that whispers.",
      p3: "Tasovac Winery is not only a place where wine is made. It is a moment. The aroma of oak barrels, the quiet clinking of glasses, a gaze caught by the sunset.",
      signature: "— The Tasovac Family",
    },
    collection: {
      eyebrow: "The collection",
      title: "Art held in glass.",
      sub: "Three stories. Three flavours of the island. Every bottle — an invitation.",
      tasting: "Tasting notes",
      pairing: "Pairing",
      vintage: "Vintage",
      items: [
        {
          name: "Pošip",
          kind: "White wine · Native variety",
          tasting: "Apricot, linden and sea salt. Mineral, silky, with a long finish.",
          pairing: "Fresh fish, mussels buzara, young cheeses.",
          vintage: "2023",
        },
        {
          name: "Plavac Mali",
          kind: "Red wine · Dalmatian tradition",
          tasting: "Ripe cherry, fig, wild herbs and a note of tobacco. Warm, velvety, powerful.",
          pairing: "Pašticada, lamb peka, aged prosciutto.",
          vintage: "2021",
        },
        {
          name: "Pagvan",
          kind: "Craft beer · Island recipe",
          tasting: "Light citrus freshness, subtle hop bitterness, a pear finish.",
          pairing: "Summer evenings, salted sardines, the shade of an olive tree.",
          vintage: "Batch No. 04",
        },
      ],
    },
    experiences: {
      eyebrow: "Experiences",
      title: "An evening to remember.",
      sub: "Intimate tasting rituals at our winery in Žrnovo — under the stars, among the barrels.",
      from: "from",
      perPerson: "per person",
      book: "Reserve",
      items: [
        { name: "Classic tasting", desc: "Five exceptional pours, Dalmatian delicacies, the winemaker's story.", duration: "90 minutes", price: "€35" },
        { name: "Dinner under the stars", desc: "A paired four-course dinner on our stone terrace.", duration: "3 hours", price: "€95" },
        { name: "Private experience for two", desc: "Vineyard walk, cellar tasting, candlelit dinner for two.", duration: "4 hours", price: "€240" },
      ],
    },
    reviews: {
      eyebrow: "Guest impressions",
      title: "Words from those left without them.",
      items: [
        { quote: "The most beautiful evening of our journey through Croatia. The Tasovac family welcomed us as their own.", author: "Sofia & Marco", source: "TripAdvisor" },
        { quote: "A Pošip I will remember forever. The view, the wine, the love — all in one place.", author: "Helena K.", source: "TripAdvisor" },
        { quote: "The magic of Korčula distilled into a single evening. Warmly recommended for everyone in love with life.", author: "James R.", source: "TripAdvisor" },
      ],
    },
    booking: {
      title: "Reserve your moment",
      sub: "We will reply personally within 24 hours.",
      experience: "Experience",
      date: "Date",
      time: "Time",
      guests: "Guests",
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      notes: "Special requests",
      submit: "Send reservation",
      sent: "Thank you. We will see you soon in Žrnovo.",
      sentDesc: "Your request has been received. We will be in touch shortly.",
    },
    footer: {
      tagline: "Tasovac Winery · Žrnovo, Korčula Island",
      hours: "Opening hours",
      hoursVal: "Every day · 5:00 PM – 11:00 PM\nDaytime visits by appointment",
      visit: "Visit us",
      visitVal: "Žrnovo, 20275\nKorčula Island, Croatia",
      newsletter: "Join us",
      newsletterDesc: "Seasonal stories, harvests and invitations to private events.",
      newsletterPh: "Your email address",
      subscribe: "Subscribe",
      rights: "All rights reserved.",
    },
  },
} satisfies Record<Lang, Dict>;

export const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "hr",
  setLang: () => {},
  t: translations.hr,
});

export const useI18n = () => useContext(I18nContext);
