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

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3632978599628917',
      async: true,
      crossorigin: 'anonymous',
    },
    {
      src: 'https://umami.earthpol.com/script.js',
      defer: true,
      'data-website-id': 'd293e0ae-dcc5-4af8-adee-aa437c652be2',
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
        // Optional: anonymize IPs for GDPR
        anonymizeIP: true,
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
        { to: 'https://earthpol.com/map/', label: 'Map', position: 'left' },
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
      copyright: `Copyright © ${new Date().getFullYear()} EarthPol. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    stylesheets: [
      {
        href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
        type: 'text/css',
      },
    ],
  },
};

export default config;
