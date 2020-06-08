import React from 'react';

import Link from '@components/link';

import * as S from './styles';
import url from './url';

const Menu = () => (
  <S.List>
    {Object.entries(S.icons).map(([social, Icon]) => (
      <S.Item key={`menu-item-${social}`}>
        <Link href={url[social]} target="_blank">
          <Icon />
        </Link>
      </S.Item>
    ))}
  </S.List>
);

export default Menu;
