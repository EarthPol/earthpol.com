import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EarthPol',
  tagline: 'The Geopolitical Minecraft Server',
  favicon: 'img/favicon/favicon.ico',
  url: 'https://earthpol.com',
  baseUrl: '/',
  organizationName: 'EarthPol',
  projectName: 'earthpol.com',
  headTags: [
    {
      tagName: 'style',
      attributes: {
        type: 'text/css',
      },
      innerHTML: `
      /* ensure the intro & hero have their transitions on first paint */
      .mainHero, .introContainer {
        opacity: 0;
        transition: opacity 1s ease;
      }
      .mainHeroVisible {
        opacity: 1 !important;
      }
    `,
    },
  ],
  scripts: [
    {
      src: 'https://umami.earthpol.com/script.js',
      defer: true,
      'data-website-id': 'd293e0ae-dcc5-4af8-adee-aa437c652be2',
    },
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-17761889667"',
      async: true,
    },
    {
      // Google Analytics tracking code
      src: '/js/gtag.js',
    },
  ],

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-R4GEM4H142',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/Economy%20&%20Trade/CustomRecipes',
            to: '/docs/economy-trade/custom-recipes',
          },
          {
            from: '/docs/Economy%20&%20Trade/GoldEconomy',
            to: '/docs/economy-trade/GoldEconomy',
          },
          {
            from: '/docs/Economy & Trade/QuickShopOverView',
            to: '/docs/economy-trade/QuickShopOverView',
          },
          {
            from: '/docs/Economy & Trade/TownyPorts',
            to: '/docs/economy-trade/TownyPorts',
          },
          {
            from: '/docs/Economy & Trade/Transportation',
            to: '/docs/economy-trade/Transportation',
          },
          {
            from: '/docs/Getting Started/ServerOverview',
            to: '/docs/getting-started/ServerOverview',
          },
          {
            from: '/docs/Getting Started/HowToJoin',
            to: '/docs/getting-started/HowToJoin',
          },
          {
            from: '/docs/Getting Started/StarterGuide',
            to: '/docs/getting-started/StarterGuide',
          },
          {
            from: '/docs/Getting Started/map',
            to: '/docs/getting-started/map',
          },
          {
            from: '/docs/Towny/TownyOverview',
            to: '/docs/towny/TownyOverview',
          },
          {
            from: '/docs/Towny/Basic/Towns',
            to: '/docs/towny/Basic/Towns',
          },
          {
            from: '/docs/Towny/Basic/Nations',
            to: '/docs/towny/Basic/Nations',
          },
          {
            from: '/docs/Towny/Basic/Nomads',
            to: '/docs/towny/Basic/Nomads',
          },
          {
            from: '/docs/Towny/townycommands',
            to: '/docs/towny/townycommands',
          },
          {
            from: '/docs/Towny/Advanced/PlotPerms',
            to: '/docs/towny/Advanced/PlotPerms',
          },
          {
            from: '/docs/Towny/Advanced/Quarters',
            to: '/docs/towny/Advanced/Quarters',
          },
          {
            from: '/docs/Towny/Advanced/TownyPermissions',
            to: '/docs/towny/Advanced/TownyPermissions',
          },
          {
            from: '/docs/War & Diplomacy/TradeWar',
            to: '/docs/war-diplomacy/TradeWar',
          },
          {
            from: '/docs/War & Diplomacy/SiegeWar',
            to: '/docs/war-diplomacy/SiegeWar',
          },
          {
            from: '/docs/War & Diplomacy/Diplomacy',
            to: '/docs/war-diplomacy/Diplomacy',
          },
          {
            from: '/docs/War & Diplomacy/Headhunters',
            to: '/docs/war-diplomacy/Headhunters',
          },
          {
            from: '/docs/Plugins and Custom Features/FlagsH',
            to: '/docs/Plugins and Custom Features/Optimizations',
          },
          {
            from: '/docs/Support/ServerRules',
            to: '/docs/support/ServerRules',
          },
          {
            from: '/docs/support/Downloads',
            to: '/docs/Support/Downloads',
          },
          {
            from: '/docs/support/EarthPolStaff',
            to: '/docs/Support/EarthPolStaff',
          },
          {
            from: '/docs/support/FAQ',
            to: '/docs/Support/FAQ',
          }
        ],
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark', // Forces dark mode
      disableSwitch: false,  // Prevents users from changing it
      respectPrefersColorScheme: false, // Ignores system preference
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'EarthPol Logo',
        src: 'img/logo-200x200.webp',
        width: 32,
        height: 32,
        href: '/', // optional
      },
      items: [
        // LEFT SIDE
        { to: 'https://earthpol.com/map/#world:-4:0:20:32172:0:0:0:1:flat', label: 'Map', position: 'left' },
        { to: 'https://earthpol.craftingstore.net/category/445275', label: 'Store', position: 'left' },
        { to: '/docs', label: 'Guide', position: 'left' },
    
        // RIGHT SIDE
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          label: 'Community',
          position: 'right',
          items: [
            { label: 'Discord', href: 'https://discord.gg/bURuFxYqkD' },
            { label: 'Wiki', href: 'https://wiki.earthpol.com/' },
            { label: 'YouTube', href: 'https://www.youtube.com/@EarthPol?sub_confirmation=1' },
            { label: 'Instagram', href: 'https://www.instagram.com/earthpolmc/' },
            { label: 'TikTok', href: 'https://www.tiktok.com/@play.earthpol.com' },
            { label: 'X', href: 'https://x.com/earth_pol' },
          ],
        },
        { to: '/docs/events', label: 'Events', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Guide', to: '/docs' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/bURuFxYqkD' },
            { label: 'Wiki', href: 'https://wiki.earthpol.com/' },
            { label: 'YouTube', href: 'https://www.youtube.com/@EarthPol?sub_confirmation=1' },
            { label: 'Instagram', href: 'https://www.instagram.com/earthpolmc/' },
            { label: 'TikTok', href: 'https://www.tiktok.com/@play.earthpol.com' },
            { label: 'X', href: 'https://x.com/earth_pol' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/EarthPol/earthpol.com' },
            { label: 'Bans', href: 'https://bans.earthpol.com' },
            { label: 'Status', href: 'https://status.earthpol.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EarthPol. Built with Docusaurus. Hosted by <a href="https://tinydc.net/" target="__blank">tinydc.net</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
