import React from 'react';

import Link from '@components/link';

import * as S from './styles';
import links from './links';

const Menu = () => (
  <S.List>
    {links.map(({ name, url, description, Icon = S.icons[name] }) => (
      <S.Item key={`menu-item-${name}`} data-description={description}>
        <Link href={url} target="_blank">
          <Icon />
        </Link>
      </S.Item>
    ))}
  </S.List>
);

export default Menu;
