import React from 'react';

import * as S from './styles';

const Wrapper = ({ children, post }) => (
  <S.Wrapper post={post}>
    {children}
  </S.Wrapper>
);

export default Wrapper;
