const { filterDraftNodes } = require('../../src/utils/drafts');

module.exports = [
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          output: '/feed.xml',
          title: 'Blog » Gabriel Ramos',
          custom_namespaces: {
            media: 'http://search.yahoo.com/mrss/'
          },
          serialize: ({ query: {
            site: { siteMetadata: { siteUrl } }, allMarkdownRemark } }) => {
            return allMarkdownRemark
              .edges
              .filter(filterDraftNodes)
              .map(({ node: { frontmatter: { banner, ...frontmatter } } }) => {
              const bannerUrl = banner && `${siteUrl}${banner.image.childImageSharp.fluid.src}`;
              const bannerMedia = banner && `media:content url="${bannerUrl}" type="image/jpg"`;

              return Object.assign({}, frontmatter, {

                description: frontmatter.subtitle,
                date: frontmatter.date,
                url: `${siteUrl}${frontmatter.path}`,
                guid: `${siteUrl}${frontmatter.path}`,
                custom_elements: banner && [
                  {
                    [bannerMedia]: null,
                  }
                ]
              })
            })
          },
          query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    fields {
                      sourceName
                    }
                    frontmatter {
                      title
                      subtitle
                      date
                      path
                      banner {
                        image {
                          childImageSharp {
                            fluid(maxWidth: 600, maxHeight: 350) {
                              src
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        },
      ],
    },
  },
]
