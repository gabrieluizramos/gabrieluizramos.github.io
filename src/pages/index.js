import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/seo';
import PostList from '../templates/post/list';
import { Layout } from '@gabrieluizramos/preferences/components';

import { showDrafts } from '../utils/query-string';

const filterDrafts = edges => edges.filter(({ node: { fields: { sourceName } } }) => sourceName !== 'drafts');

const IndexPage = ({data: {allMarkdownRemark: { edges }}, ...props}) => (
  <Layout>
    <SEO title="Posts" />
    <PostList posts={!showDrafts(props) ? filterDrafts(edges) : edges} />
  </Layout>
);

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
            tags
          }
          fields {
            sourceName
          }
        }
      }
    }
  }
`
