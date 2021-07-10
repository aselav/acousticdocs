module.exports = {
  plugins: [require.resolve('docusaurus-lunr-search')],
  title: 'Acoustic',
  tagline: 'Docs',
  url: 'https://docs.acoustic.to',
  baseUrl: '/',
  favicon: 'img/favicon.webp',
  organizationName: 'Acoustic',
  projectName: 'Acoustic-documentation',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    sidebarCollapsible: true,
    hideableSidebar: true,
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'acoustic-logo',
        src: 'img/Acousticlight.webp',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Stay In The Loop ",
          items: [
            {
              label: "Discord",
              to: "https://acoustic.to/support",
            },
            {
              label: "Patreon",
              to: "https://acoustic.to/patreon",
            },
          ],
        },
        {
          title: "Find us online",
          items: [
            {
              label: "Top.gg",
              to: "https://acoustic.to/vote",
            },
            {
              label: "YouTube",
              to: "https://acoustic.to/youtube",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Privacy Policy",
              to: "/privacy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Acoustic.`,
    },
    gtag: {
      trackingID: 'G-C078WP7TYT',
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss: require.resolve('./src/css/normalize.min.css')

        },
        sitemap: {
          changefreq: 'monthly',
          priority: 0.6,
        },
      },
    ],
  ],
};
