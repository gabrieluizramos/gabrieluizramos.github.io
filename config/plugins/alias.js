module.exports = [
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@components': 'src/components',
        '@variables': 'src/variables',
        '@templates': 'src/templates'
      },
      extensions: ['js']
    },
  },
];
