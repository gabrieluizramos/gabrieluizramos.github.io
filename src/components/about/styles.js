import styled from 'styled-components';

import { spacing, colors, transition } from '@variables';

export const Avatar = styled.figure`
  margin: ${spacing.double} auto 0;
  text-align: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${colors.post.color};
  background: url(https://fotografia.gabrieluizramos.com.br/images/crow.thumb.webp) no-repeat center center;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${transition.default};
  }

  &:hover img {
    opacity: 0;
  }
`;

