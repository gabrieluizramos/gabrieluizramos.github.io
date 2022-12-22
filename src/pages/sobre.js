import React from 'react';

import SEO from '@components/seo';
import Layout from '@components/layout';
import { PostArticle as Article, PostContent as Content } from '@templates/post/article/styles';
import Bio from '@components/about/bio';

const AboutPage = () => {
  return (
    <Layout post>
      <SEO title="Sobre" description="Um pouco mais sobre mim" />
      <Article>
        <Content>
          <Bio />
        </Content>
      </Article>
    </Layout>
  );
}

export default AboutPage;
