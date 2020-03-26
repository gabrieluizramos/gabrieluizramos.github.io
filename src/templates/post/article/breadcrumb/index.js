import React from 'react';
import { Link } from 'gatsby';

import * as S from './styles';

const Breadcrumb = ({ current }) => (
  <S.Breadcrumb>
    <S.Item><a href="/">Home</a></S.Item>
    <S.Item><Link to="/">Blog</Link></S.Item>
    <S.Item>{current}</S.Item>
  </S.Breadcrumb>
);

export default Breadcrumb;
