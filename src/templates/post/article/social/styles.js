import styled from 'styled-components';

import { spacing, colors } from '@variables';

export const Share = styled.section``;

export const Icons = styled.ul`
  display: flex;
  padding-bottom: ${spacing.half};
`;

export const Icon = styled.li`
  margin-right: ${spacing.half};

  rect,
  path {
    transition: .2s ease-in-out;
  }

  &:hover {
    rect,
    path {
      fill: ${colors.post.color};
    }
  }
`;
