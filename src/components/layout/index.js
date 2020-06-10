import React from 'react';

import withKonami from './with-konami';

import Reset from './reset';
import Wrapper from '../wrapper';
import Header from './header';
import Footer from './footer';

import * as S from './styles';

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
