module.exports = {
  pathPrefix: '/blog',
  siteMetadata: {
    title: `Blog » Gabriel Ramos`,
    description: `Lugar onde eu rabisco umas ideias.`,
    author: `@gabrieluizramos`,
    siteUrl: 'https://gabrieluizramos.com.br',
    facebookAppId: '134327417835817',
    blogUrl: 'https://gabrieluizramos.com.br/blog',
    postUrl: 'https://gabrieluizramos.com.br/blog/post'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/posts/published/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/posts/drafts/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank'
            }
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'images'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
              linkImagesToOriginal: false,
              tracedSVG: true
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog » Gabriel Ramos`,
        short_name: `gabrieluizramos`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/published`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `drafts`,
        path: `${__dirname}/posts/drafts`,
      },
    },
    `gatsby-remark-source-name`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-105850294-1",
      },
    },
    ...require('@gabrieluizramos/preferences/gatsby/config'),
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                blogUrl
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
              site: { siteMetadata: { siteUrl, blogUrl } }, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(({ node: { frontmatter: { banner, ...frontmatter } } }) => {
                const bannerUrl = banner && `${siteUrl}${banner.image.childImageSharp.fluid.src}`;
                const bannerMedia = banner && `media:content url="${bannerUrl}" type="image/jpg"`;

                return Object.assign({}, frontmatter, {

                  description: frontmatter.subtitle,
                  date: frontmatter.date,
                  url: `${blogUrl}${frontmatter.path}`,
                  guid: `${blogUrl}${frontmatter.path}`,
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
                      excerpt
                      html
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gabrieluizramos.us8.list-manage.com/subscribe/post?u=a28aa5218b0f56cc08730dcec&id=e8f87b328e'
      }
    }
  ],
}
