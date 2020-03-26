import styled from 'styled-components';

import { font, spacing, colors } from '@gabrieluizramos/preferences/variables';

export const Breadcrumb = styled.ul`
  padding: ${spacing.default} 0;

  a {
    color: ${colors.white};
  }
`;

export const Item = styled.li`
  display: inline;
  position: relative;
  font-size: ${font.size.small};

  &:not(:first-child) {
    margin-left: ${spacing.half};

    &:before {
      content: '»';
      color: ${colors.terminal.purple};
      margin-right: ${spacing.half};
    }
  }
`;
