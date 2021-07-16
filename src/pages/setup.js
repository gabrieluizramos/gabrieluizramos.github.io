import React from 'react';


import SEO from '@components/seo';
import Layout from '@components/layout';
import { PostArticle as Article, PostContent as Content } from '@templates/post/article/styles';
import Setup from '@components/about/setup';


const SetupPage = () => {
  return (
    <Layout post>
      <SEO title="Setup" description="Um pouco mais sobre minhas configurações de hardware, software e ferramentas em geral" />
      <Article>
        <Content>
          <Setup />
        </Content>
      </Article>
    </Layout>
  );
}

export default SetupPage;
