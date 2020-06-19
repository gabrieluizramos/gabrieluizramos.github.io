import React from 'react';

import Wrapper from '@components/wrapper';

import Reset from './reset';
import Header from './header';
import Footer from './footer';

import * as S from './styles';

import withKonami from './with-konami';

const Layout = ({ konami, children }) => (
  <>
    <Reset />
    <S.Layout konami={konami}>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </S.Layout>
  </>
);

export default withKonami(Layout);
