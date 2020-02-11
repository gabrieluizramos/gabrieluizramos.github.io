import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/seo';
import PostList from '../components/post-list';
import { Layout } from '@gabrieluizramos/preferences/components';

const IndexPage = ({data: {allMarkdownRemark: { edges }}}) => (
  <Layout>
    <SEO title="Posts" />
    <PostList posts={edges} />
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
        }
      }
    }
  }
`
