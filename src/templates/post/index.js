import React from "react"
import { Link as GLink, graphql } from "gatsby"
import Img from 'gatsby-image';

import SEO from '../../components/seo';

import { Layout, Link } from '@gabrieluizramos/preferences/components';

import * as S from './styles';

const Template = ({
  data: {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: {
        title, date, banner
      }
    }
  }
}) => (
  <Layout>
    <SEO title={title} />
    <S.Back>
      <GLink to="/">Voltar</GLink>
    </S.Back>
    <S.PostArticle>
      <S.PostHeader>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostTime>{timeToRead} min. de leitura</S.PostTime>
        <S.PostDate>{date}</S.PostDate>
        {
          banner && (
             <S.Banner>
              <Img fluid={banner.image.childImageSharp.fluid} />
              <S.Caption>
                Photo by <Link href={banner.href} target="_blank">{banner.author}</Link>
              </S.Caption>
            </S.Banner>
          )
        }
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
        banner {
          author
          href
          image {
            childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      timeToRead
    }
  }
`
