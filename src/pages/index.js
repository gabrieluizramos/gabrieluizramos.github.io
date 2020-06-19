import React from 'react';
import { graphql } from 'gatsby';

import SEO from '@components/seo';
import PostList from '@templates/post/list';
import Filter, { useFilter } from '@components/filter';
import Layout from '@components/layout';

import { filterDraftNodes, showDrafts } from '../utils/drafts';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  },
  ...props
}) => {
  const [filtered, setFilter] = useFilter({ data: edges, filter: '' });
  const onFilter = e => setFilter(e.target.value);
  const posts = !showDrafts(props)
    ? filtered.filter(filterDraftNodes)
    : filtered;

  return (
    <Layout>
      <SEO title="Blog" />
      <Filter onFilter={onFilter} />
      <PostList posts={posts} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(locale: "pt-br", formatString: "YYYY-MM-DD")
            path
            title
            subtitle
            tags
          }
          fields {
            sourceName
          }
        }
      }
    }
  }
`;
