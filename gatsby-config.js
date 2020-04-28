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
            serialize: ({ query: {
              site: { siteMetadata: { siteUrl, blogUrl } }, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.subtitle,
                  date: edge.node.frontmatter.date,
                  url: `${blogUrl}${edge.node.frontmatter.path}`,
                  guid: `${blogUrl}${edge.node.frontmatter.path}`,
                  custom_elements: [
                    { subtitle: edge.node.frontmatter.subtitle },
                    { image: edge.node.frontmatter.banner && `${siteUrl}${edge.node.frontmatter.banner.image.childImageSharp.fluid.src}` }
                  ],
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
                              fluid(maxWidth: 500, maxHeight: 300) {
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
  ],
}
