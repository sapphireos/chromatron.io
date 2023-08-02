export interface Brand {
  name: string;
  nameLegal: string;
  url: string;
  parentCompany: string;
  parentCompanyLegal: string;
  parentCompanyUrl: string;
  email: string;
  social: Social[];
}

interface Social {
  id: string;
  href: string;
  iconClass: string;
}

export const brand = {
  name: "Chromatron",
  nameLegal: "Chromatron",
  url: "https://chromatron.io",
  parentCompany: "Sapphire Open Systems",
  parentCompanyLegal: "Sapphire Open Systems, LLC",
  parentCompanyUrl: "https://sapphireos.com",
  email: "info@sapphireos.com",
  social: [
    {
      id: "github",
      href: "https://github.com/sapphireos/",
      iconClass: "fa-github",
    },
    {
      id: "facebook",
      href: "https://www.facebook.com/sapphireos",
      iconClass: "fa-facebook-official",
    },
    {
      id: "twitter",
      href: "https://twitter.com/sapphireos",
      iconClass: "fa-twitter",
    },
    {
      id: "youtube",
      href: "https://www.youtube.com/user/SapphireOpenSystems",
      iconClass: "fa-youtube",
    },
  ],
} as Brand;
