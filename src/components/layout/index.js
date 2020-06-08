import React, { useState } from 'react';

import { useKonamiCode } from 'hooks';

import Reset from './reset';
import Wrapper from '../wrapper';
import Header from './header';
import Footer from './footer';

import * as S from './styles';

const Layout = ({ children }) => {
  const [active, setActive] = useState(false);
  const toggleKonami = () => {
    setActive(true)
    setTimeout(() => setActive(false), S.KONAMI_DURATION);
  };
  useKonamiCode(toggleKonami);

  return (
    <>
      <Reset />
      <S.Layout konami={active}>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </S.Layout>
      <S.Konami active={active} />
    </>
  );
};

export default Layout;
