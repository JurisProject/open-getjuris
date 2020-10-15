const path = require("path");

module.exports = {
  title: 'lexDAO',
  tagline: 'Community of Legal Engineers',
  url: 'https://focused-murdock-699fb2.netlify.app/',
  baseUrl: '/',
  favicon: 'img/lexDAO-Logo-White.png',
  organizationName: 'lexDAO', // Usually your GitHub org/user name.
  projectName: 'lexDAO', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      // logo: {
      //   alt: 'lexDAO-Logo',
      //   src: 'img/lexDAO-Substack-Header.png',
      // },
      links: [ 
        {
          href: 'DAOLINK',
          label: 'DAO',
          position: 'right',
        },
        {to: 'docs',activeBasePath: 'docs/', label: 'Handbook', position: 'right'},
        {
          href: 'https://snapshot.page/#/lexdao',
          label: 'Snapshot',
          position: 'right',
        },
        {
          href: 'https://discord.gg/qbUhmH4', // need link in handbook
          label: 'Join',
          position: 'right',
        },
        {
          href: 'https://discord.gg/qbUhmH4',
          label: 'Community',
          position: 'right',
        },
        {
          href: 'https://discord.gg/KmFNEmp',
          label: 'Support',
          position: 'right',
        },
        {
          href: 'https://dapps.lexdao.org',
          label: 'dApps',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '',
          items: [
            {
              label: 'DAO',
              to: 'docs/manifesto',
            },
            {
              label: 'Handbook',
              to: 'docs/doc2/',
            },
            {
              label: 'Snapshot',
              to: 'https://snapshot.page/#/lexdao',
            },
          ],
        },
        {
          title: '',
          items: [
            {
              label: 'Community',
              href: 'https://discord.gg/qbUhmH4',
            },
            {
              label: 'Join',
              href: 'https://discord.gg/qbUhmH4',
            },
              label: 'Support',
              href: 'https://discord.gg/KmFNEmp',
            },
          ],
        },
        {
          title: '',
          items: [
            {
              label: 'Dapps',
              href: 'https://dapps.lexdao.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lexDAO',
            },
            {
              label: 'Blog',
              href: 'https://lexdao.substack.com',
            },
            {
              label: 'Newsletter',
              href: 'https://lexdao.substack.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} lexDAO.`,
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
