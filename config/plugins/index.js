const plugins = [
  'alias',
  'manifest',
  'helmet',
  'files',
  'posts',
  'components',
  'analytics',
  'sitemap',
  'feed',
  'mailchimp',
  'gravatar'
];

module.exports = plugins
  .reduce((acc, plugin) => [...acc, ...require(`./${plugin}`)], []);
