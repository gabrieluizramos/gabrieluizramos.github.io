import React from 'react';

import Img from 'gatsby-image';

import Link from '@components/link';
import Divider from '@components/layout/divider';

import * as S from './styles';

const Banner = ({ image, href, author }) => image ? (
  <>
    <S.Banner>
      <Img fluid={image.childImageSharp.fluid} />
      <S.Caption>
        Foto por <Link href={href} target="_blank">{author}</Link>
      </S.Caption>
    </S.Banner>
    <Divider />
  </>
) : null;

export default Banner;
