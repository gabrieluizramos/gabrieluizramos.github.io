import React from 'react';
import { graphql } from 'gatsby';

import SEO from '@components/seo';
import Layout from '@components/layout';
import { PostArticle as Article, PostContent as Content } from '@templates/post/article/styles';
import Bio from '@components/about/bio';

const AboutPage = ({
  data: {
    gravatar: { url: avatar }
  }
}) => {
  return (
    <Layout post>
      <SEO title="Sobre" description="Um pouco mais sobre mim" />
      <Article>
        <Content>
          <Bio avatar={avatar} />
        </Content>
      </Article>
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
