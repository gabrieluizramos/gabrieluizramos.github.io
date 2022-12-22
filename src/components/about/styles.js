import styled from 'styled-components';

import { spacing, colors } from '@variables';

export const Avatar = styled.figure`
  margin: ${spacing.double} auto 0;
  text-align: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${colors.post.color};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

