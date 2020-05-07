module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `posts/published`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `drafts`,
      path: `posts/drafts`,
    },
  },
  `gatsby-remark-source-name`,
]
