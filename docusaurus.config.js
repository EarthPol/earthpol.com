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
  onBrokenLinks: 'throw',
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
          editUrl:
              'https://github.com/EarthPol/earthpol.com',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
              'https://github.com/EarthPol/earthpol.com',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark', // Forces dark mode
      disableSwitch: true,  // Prevents users from changing it
      respectPrefersColorScheme: false, // Ignores system preference
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EarthPol',
      logo: {
        alt: 'EarthPol Logo',
        src: 'img/logo-200x200.webp',
        width: 32,
        height: 32,
      },
      items: [
        {
          label: 'Community',
          position: 'left',
          items: [
            { label: 'Discord', href: '#' },
            { label: 'Wiki', href: '#' },
            { label: 'X', href: '#' },
            { label: 'YouTube', href: '#' },
          ],
        },
        { to: '/docs', label: 'Guide', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '#', label: 'Store', position: 'left' },
        { to: '#', label: 'Map', position: 'left' },
        { to: '#', label: 'Play Now', position: 'right', className: 'button button--primary' },
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
            { label: 'Discord', href: '#' },
            { label: 'Wiki', href: '#' },
            { label: 'X', href: '#' },
            { label: 'YouTube', href: '#' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/EarthPol/earthpol.com' },
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
        href: '/path/to/custom/theme.css',
        type: 'text/css',
      },
    ],
  },
};

export default config;
