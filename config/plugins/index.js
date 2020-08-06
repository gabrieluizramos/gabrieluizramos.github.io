const plugins = [
  'alias',
  'manifest',
  'helmet',
  'images',
  'posts',
  'components',
  'analytics',
  'sitemap',
  'feed',
  'mailchimp',
  'disqus',
  'gravatar'
];

module.exports = plugins
  .map(plugin => require(`./${plugin}`))
  .reduce((acc, plugin) => [...acc, ...plugin], []);
