const { author } = require('../../package.json');

const email = author.split('<').pop().slice(0, -1)

module.exports = [
  {
    resolve: `gatsby-source-gravatar`,
    options: {
      emails: [
        { email, query: `?size=240` }
      ]
    }
  }
]
