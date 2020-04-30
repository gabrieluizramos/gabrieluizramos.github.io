const { parse } = require('query-string');

exports.showDrafts = ({ location: { search } }) => parse(search).draft === 'true';

exports.filterDraftNodes = ({ node: { fields: { sourceName } } }) => sourceName !== 'drafts';

exports.filterDraftPaths = ({ path }) => !path.includes('draft');
