import React from "react"
import { Link } from 'gatsby';

import Layout from "@gabrieluizramos/preferences/components/layout"
import { spacing, colors } from '@gabrieluizramos/preferences/variables';
import styled from 'styled-components';

import SEO from "../components/seo"

const Container = styled.div`
  text-align: center;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: ${spacing.double};

  h1 {
    color: ${colors.terminal.yellow};
  }

  a {
    color: ${colors.terminal.purple};
  }

  & > * {
    display: block;

    &:not(:last-child) {
      padding-bottom: ${spacing.default};
    }
    &:last-child {
      padding-top: ${spacing.default};
    }
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>404</h1>
      <p>Eita! Acho que o que você procura não está por aqui...</p>
      <Link to="/">Voltar ao blog</Link>
    </Container>
  </Layout>
)

export default NotFoundPage
