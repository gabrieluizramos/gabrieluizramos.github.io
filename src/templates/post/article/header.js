import React from 'react';

import Divider from '@components/layout/divider';

import * as S from './styles';

const Header = ({ title, subtitle, time, date }) => (
  <>
    <S.PostHeader>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostSubtitle>{subtitle}</S.PostSubtitle>
      <S.PostTime>{time} min. de leitura</S.PostTime>
      <S.PostDate>{date}</S.PostDate>
    </S.PostHeader>
    <Divider />
  </>
);

export default Header;
