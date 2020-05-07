import React from 'react';

import Link from '@components/link';

import * as S from './styles';
import url from './url';

const Menu = () => (
  <>
    <hr />
    <S.Wrapper>
      <S.List>
        {Object.entries(S.icons).map(([social, Icon]) => (
          <S.Item>
            <Link href={url[social]} target="_blank">
              <Icon />
            </Link>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  </>
);

export default Menu;
