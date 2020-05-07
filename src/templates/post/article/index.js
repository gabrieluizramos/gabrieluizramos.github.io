import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/layout';

import SEO from '@components/seo';

import Header from './header';
import Breadcrumb from './breadcrumb';
import Banner from './banner';
import Newsletter from './newsletter';
import Social from './social';

import * as S from './styles';

const Article = ({
  data: {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: { path, title, subtitle, date, banner }
    }
  }
}) => (
  <Layout>
    <S.Container>
      <SEO title={title} description={subtitle} banner={banner} />
      <S.PostArticle>
        <Breadcrumb current={title} />
        <Header
          title={title}
          subtitle={subtitle}
          time={timeToRead}
          date={date}
        />
        <Banner {...banner} />
        <S.PostContent dangerouslySetInnerHTML={{ __html: html }} />
        <S.Footer>
          <Newsletter />
          <Social path={path} title={title} />
        </S.Footer>
      </S.PostArticle>
    </S.Container>
  </Layout>
);

export default Article;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
