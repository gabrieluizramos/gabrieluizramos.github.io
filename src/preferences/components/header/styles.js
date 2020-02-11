import styled from 'styled-components';

import { spacing, font } from '../../variables';

export const Header = styled.header`
  margin: 0 auto;
  text-align: center;
  padding: ${spacing.triple} 0;
`;

export const Title = styled.h1`
  font-size: ${font.size.big};
  margin-bottom: ${spacing.half};
`;

export const Subtitle = styled.h2`
  font-size: ${font.size.medium};
`;
