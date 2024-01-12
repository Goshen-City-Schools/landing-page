import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://goshencityschools.com/", // replace this with your deployed domain
  author: "Goshen Group of Schools.",
  desc: "Goshen City and Stars Group of Schools is strategically balanced with the Nation's educational system.",
  title: "Goshen City and Stars Group of Schools",
  ogImage:
    "https://res.cloudinary.com/dx9rpvjcw/image/upload/v1703919606/banners/uqwfgzcicuvh834keynk.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  location: {
    address:
      "Plot 11 - 14, Living Avenue, Opp. Police Detectives College, Enugu.",
    link: "/",
    // TODO: Link address to map
  },
  email: "goshencityschoolschannel@gmail.com",
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
