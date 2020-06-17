const path = require("path");

module.exports = {
  title: 'Juris',
  tagline: 'Justice. For All.',
  url: 'https://nifty-heisenberg-a6b091.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Juris, PBC', // Usually your GitHub org/user name.
  projectName: 'Juris', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Juris",
      logo: {
        alt: 'Juris Logo',
        src: 'img/Juris-Logo-Badge.png',
      },
      links: [
        {
          to: 'docs',activeBasePath: 'docs/', label: 'Docs', position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: '#',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/getjuris',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jurisproject',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Juris, PBC. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/scss/index.scss'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, "./node_modules/docusaurus-plugin-sass")],
};
