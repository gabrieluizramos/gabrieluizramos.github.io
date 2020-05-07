import styled from 'styled-components';

import { spacing, font, colors } from '../../../variables';

export const Button = styled.button`
  cursor: pointer;
  padding: ${spacing.default};
  font-size: ${font.size.default};
  transition: .2s ease-in-out;
  border: 2px solid ${colors.white};
  background: ${colors.white};

  &:not([disabled]) {
    &:hover {
      background: transparent;
      color: ${colors.white};
    }
  }

  &[disabled] {
    cursor: initial;
    background: ${colors.post.color};
    border-color: ${colors.post.color};
  }
`;
