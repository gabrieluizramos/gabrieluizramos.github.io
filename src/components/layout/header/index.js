import React from 'react';

import { Link } from 'gatsby';

import Menu from './menu';

import * as S from './styles';

const Header = () => (
  <>
    <S.Header>
      <Link to="/">
        <S.Title>
          Gabriel / Ramos
        </S.Title>
        <S.Subtitle>
          ⟨ pintor de pixel ⟩
        </S.Subtitle>
      </Link>
    </S.Header>
    <Menu />
  </>
);

export default Header;
