import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Mr. Kannah",
  tagline: "Guiding Teams and Individuals to Success",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://mrkannah.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fadeenk", // Usually your GitHub org/user name.
  projectName: "mrKannahV3", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/blog",
          sidebarPath: "./sidebars.ts",
          tagsBasePath: "tags",
        },
        gtag: {
          trackingID: "G-QRPFQQWH20",
          anonymizeIP: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "./img/fadee.jpg",
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "Home",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
        srcDark: "img/logoDark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Blog",
        },
        {
          type: "dropdown",
          label: "Showcase",
          position: "left",
          items: [
            {
              label: "Apps",
              to: "/showcase/Apps",
            },
            {
              label: "Businesses",
              to: "/showcase/Businesses",
            },
            {
              label: "Hardware",
              to: "/showcase/Hardware",
            },
            {
              label: "Other",
              to: "/showcase/Other",
            },
            // {
            //   label: "Websites",
            //   to: "/showcase/Websites",
            // },
          ],
        },
        {
          href: "/about",
          label: "About",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Navigation",
      //     items: [
      //       {
      //         label: "Home",
      //         to: "/",
      //       },
      //       {
      //         label: "Blog",
      //         to: "/blog",
      //       },
      //       {
      //         label: "About",
      //         to: "/about",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Socials",
      //     items: [
      //       {
      //         label: "LinkedIn",
      //         href: "https://www.linkedin.com/in/fadeek/",
      //       },
      //       {
      //         label: "Github",
      //         href: "https://github.com/fadeenk",
      //       },
      //       {
      //         label: "Instagram",
      //         href: "https://www.instagram.com/fadeekannah/",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Fadee Kannah © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
