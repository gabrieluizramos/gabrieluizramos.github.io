import styled from 'styled-components';

import { grid, spacing, colors } from '@variables';

export const Wrapper = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ post }) => !post && grid.size};
  padding: ${({ post }) => post ? spacing.double : `${spacing.triple} ${spacing.double} ${spacing.onehalf}` };
  background: ${({ post }) => post && colors.post.background};
`;
