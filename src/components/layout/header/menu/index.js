import React from 'react';

import { Link as GatsbyLink } from 'gatsby';
import Link from '@components/link';

import * as S from './styles';
import links from './links';

const Item = ({ name, url, description, Icon = S.icons[name] }) => {
  const isInternalLink = url.startsWith('/');
  const LinkWrapper = isInternalLink ? GatsbyLink : Link;
  const props = isInternalLink ? { to: url } : { href: url, target: '_blank' };

  return (
    <S.Item key={`menu-item-${name}`} data-description={description}>
      <LinkWrapper {...props}>
        <Icon />
      </LinkWrapper>
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
