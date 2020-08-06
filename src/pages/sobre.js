import React from 'react';
import { graphql } from 'gatsby';

import SEO from '@components/seo';
import Layout from '@components/layout';
import Bio from '@components/bio';

const AboutPage = ({
  data: {
    gravatar: { url: avatar }
  }
}) => {
  return (
    <Layout>
      <SEO title="Sobre mim" />
      <Bio avatar={avatar} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    gravatar(email: { eq: "gabriel.luiz.ramos@gmail.com" }) {
      url
    }
  }
`;
