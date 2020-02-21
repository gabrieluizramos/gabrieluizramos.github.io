import React from 'react';

import Img from 'gatsby-image';

import { Link } from '@gabrieluizramos/preferences/components';

import * as S from './styles';

const Banner = ({ image, href, author }) => image ? (
  <>
    <S.Banner>
      <Img fluid={image.childImageSharp.fluid} />
      <S.Caption>
        Foto por <Link href={href} target="_blank">{author}</Link>
      </S.Caption>
    </S.Banner>
    <hr />
  </>
) : null;

export default Banner;
