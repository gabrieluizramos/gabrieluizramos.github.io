const { filterDraftPaths } = require('../../src/utils/drafts');

module.exports = [
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
      resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
      serialize: ({ site, allSitePage }) => {
        return allSitePage
          .nodes
          .filter(filterDraftPaths)
          .map(node => ({
            url: `${site.siteMetadata.siteUrl}${node.path}`,
            changefreq: `daily`,
            priority: 0.7,
          }));
      }
    }
  },
];
