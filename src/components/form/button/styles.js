import styled from 'styled-components';

import { spacing, font, colors, radius } from '@variables';

export const Button = styled.button`
  cursor: pointer;
  padding: ${spacing.default};
  font-size: ${font.size.default};
  transition: .2s ease-in-out;
  border: 2px solid ${colors.white};
  border-radius: ${radius.half};
  background: ${colors.white};

  &:not([disabled]) {
    &:hover {
      opacity: 0.9;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    background: ${colors.post.color};
    border-color: ${colors.post.color};
  }
`;
