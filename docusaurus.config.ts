// docusaurus.config.ts
import { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Enter Quantum',
  tagline: 'Your Chapter-by-Chapter Guide to Quantum Computation',
  url: 'https://yourdomain.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  organizationName: 'yourusername', // GitHub org/user
  projectName: 'quantum-edu', // Repo name

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Enter Quantum',
      logo: {
        alt: 'Quantum Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/chapter-1-introduction', label: 'Chapters', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/yourusername/quantum-edu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Chapter 1',
              to: '/docs/chapter-1-introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/yourusername/quantum-edu/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Enter Quantum.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

export default config;
