import React from "react"
import { Link, graphql } from "gatsby"

import SEO from '../../components/seo';

import Layout from '@gabrieluizramos/preferences/components/layout';

import * as S from './styles';

const Template = ({
  data: {
    markdownRemark: { frontmatter, html }
  }
}) => (
  <Layout>
    <SEO title={frontmatter.title} />
    <S.Back>
      <Link to="/">Voltar</Link>
    </S.Back>
    <S.PostArticle>
      <S.PostHeader>
        <S.PostTitle>{frontmatter.title}</S.PostTitle>
        <S.PostSubtitle>{frontmatter.date}</S.PostSubtitle>
      </S.PostHeader>
      <hr />
      <S.PostContent
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </S.PostArticle>
  </Layout>
);

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(locale: "pt-br", formatString: "DD/MM/YYYY")
        path
        title
      }
    }
  }
`
