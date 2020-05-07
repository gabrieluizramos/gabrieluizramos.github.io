import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/seo';
import PostList from '../templates/post/list';
import Layout from '../components/layout';

import { filterDraftNodes, showDrafts  } from '../utils/drafts';

const IndexPage = ({data: {allMarkdownRemark: { edges }}, ...props}) => (
  <Layout>
    <SEO title="Blog" />
    <PostList posts={!showDrafts(props) ? edges.filter(filterDraftNodes) : edges} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
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
