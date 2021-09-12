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
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `posts/published/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `posts/drafts/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `src/images`,
    },
  },
]
