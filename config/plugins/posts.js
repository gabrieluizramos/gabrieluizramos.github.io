module.exports = [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            className: 'post-anchor',
            isIconAfterHeader: true,
            removeAccents: true,
          }
        },
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
]
