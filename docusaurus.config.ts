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

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    }
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  future: {
    faster: true,
    v4: true,
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/blog",
          // The blog is reachable by direct link only. noindex asks search
          // engines to drop URLs they already hold; robots.txt must not block
          // these routes, or the tag would never be read.
          versions: { current: { noIndex: true } },
          sidebarPath: "./sidebars.ts",
          tagsBasePath: "tags",
          // `docs/` is published at /blog. Keep internal specs and plans out
          // (this replaces Docusaurus's default excludes, so they are repeated).
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
            "superpowers/**",
          ],
        },
        gtag: {
          trackingID: "G-QRPFQQWH20",
          anonymizeIP: true,
        },
        // The sitemap lists only the pages a visitor reaches from the homepage
        // and navbar. The routes below stay reachable by direct link and are
        // kept out of search on purpose: each carries a noindex tag, and
        // static/robots.txt leaves them crawlable so search engines can read it.
        sitemap: {
          ignorePatterns: [
            "/blog",
            "/blog/**",
            "/goals",
            "/goals/**",
            "/years",
            "/years/**",
            "/podcasts",
            "/podcasts/**",
            "/653-timberfalls-for-rent",
            "/653-timberfalls-for-rent/**",
            "/vsaas",
            "/vsaas/**",
          ],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Fallback social card for any page that sets none (each page in the
    // sitemap sets its own; see scripts/og-cards.mjs). No leading "./":
    // Docusaurus joins it onto the site URL, and "./" ends up in the link.
    image: "img/og/home.png",
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
          to: "/case-studies",
          label: "Case Studies",
          position: "left",
        },
        {
          to: "/showcase",
          label: "Showcase",
          position: "left",
        },
        {
          to: "/about",
          label: "About",
          position: "left",
        },
        {
          to: "/card",
          label: "💼",
          ariaLabel: "Digital business card",
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
