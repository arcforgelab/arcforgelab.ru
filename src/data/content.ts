export type Client = {
  name: string;
  logo: string;
  hue: string;
  link: string;
};

export const clients: Client[] = [
  {
    name: "Технопарк Якутия",
    logo: "/clients/itp.png",
    hue: "from-yellow-200/60 to-amber-200/70",
    link: "https://tpykt.ru",
  },
  {
    name: "ФРИ РС(Я)",
    logo: "/clients/fri.png",
    hue: "from-slate-200/60 to-stone-100/80",
    link: "https://innovationfund14.ru",
  },
  {
    name: "СмартОм",
    logo: "/clients/smartom.png",
    hue: "from-amber-100/70 to-yellow-200/60",
    link: "https://smartom.dev",
  },
  {
    name: "ЦОПП РС(Я)",
    logo: "/clients/copp.png",
    hue: "from-stone-100/70 to-white",
    link: "https://copp14.ru/",
  },
  {
    name: "УзорУтум",
    logo: "/clients/uzorutum.png",
    hue: "from-yellow-100/70 to-amber-50/60",
    link: "https://uzorutum.ru",
  },
  {
    name: "Кэскил",
    logo: "/clients/keskil.png",
    hue: "from-slate-100/80 to-stone-50/70",
    link: "https://keskil14.ru",
  },
  {
    name: "Федерация Волейбола РС(Я)",
    logo: "/clients/volley.png",
    hue: "from-amber-100/70 to-yellow-200/60",
    link: "https://sakhavolley.ru",
  },
  {
    name: "TermoGroup",
    logo: "/clients/termo.png",
    hue: "from-slate-200/60 to-stone-100/80",
    link: "https://www.termogroup.kz",
  },
];
