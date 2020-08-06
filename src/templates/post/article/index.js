import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/layout';

import SEO from '@components/seo';

import Header from './header';
import Breadcrumb from './breadcrumb';
import Banner from './banner';
import Share from './share';
import Newsletter from './newsletter';
import Comments from './comments';

import * as S from './styles';

const Article = ({
  data: {
    markdownRemark: {
      id,
      html,
      timeToRead,
      frontmatter: { path, title, subtitle, date, banner }
    }
  }
}) => (
  <Layout post>
    <SEO title={title} description={subtitle} banner={banner} />
    <S.PostArticle>
      <Breadcrumb current={title} />
      <Header title={title} subtitle={subtitle} time={timeToRead} date={date} />
      <Banner {...banner} />
      <S.PostContent dangerouslySetInnerHTML={{ __html: html }} />
      <S.Footer>
        <Share path={path} title={title} id={id} />
        <Newsletter />
        <Comments path={path} title={title} id={id} />
      </S.Footer>
    </S.PostArticle>
  </Layout>
);

export default Article;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      timeToRead
      frontmatter {
        date(locale: "pt-br", formatString: "DD/MM/YYYY")
        path
        title
        subtitle
        banner {
          author
          href
          image {
            childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
              fixed(width: 1200, height: 1200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
