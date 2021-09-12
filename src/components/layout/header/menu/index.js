import React from 'react';

import Link from '@components/link';

import * as S from './styles';
import links from './links';

const Item = ({ name, url, description, Icon = S.icons[name] }) => {
  return (
    <S.Item key={`menu-item-${name}`} data-description={description}>
      <Link href={url}>
        <Icon />
      </Link>
    </S.Item>
  )
}

const Menu = () => (
  <nav>
    <S.List>
      {links.map(Item)}
    </S.List>
  </nav>
);

export default Menu;
