import React from 'react';
import { graphql } from 'gatsby';


import SEO from '@components/seo';
import Layout from '@components/layout';
import { PostArticle as Article, PostContent as Content } from '@templates/post/article/styles';
import Setup from '@components/about/setup';


const SetupPage = ({ data }) => {
  return (
    <Layout post>
      <SEO title="Setup" description="Um pouco mais sobre minhas configurações de hardware, software e ferramentas em geral" banner={{image: data.setup}} />
      <Article>
        <Content>
          <Setup images={data} />
        </Content>
      </Article>
    </Layout>
  );
}

export default SetupPage;

export const pageQuery = graphql`
  query {
    cableDown: file(relativePath: { eq: "setup/cable-down.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 850) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    cableUp: file(relativePath: { eq: "setup/cable-up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 850) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    devices: file(relativePath: { eq: "setup/devices.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 850) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    peripherals: file(relativePath: { eq: "setup/peripherals.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 850) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    setup: file(relativePath: { eq: "setup/setup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 850) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    software: file(relativePath: { eq: "setup/software.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 850) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
