import styled from 'styled-components';

import { colors, spacing } from '@variables';

export const createDivider = ({ color = colors.white, size = spacing.default }) => `
  display: block;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    ${color} 25%,
    transparent 25%,
    transparent 75%,
    ${color} 75%
  );
  background-size: ${size};
  background-position: calc(-${size} / 1.5);
`;

export const Divider = styled.hr`
 ${({ color = colors.white }) => createDivider({ color })}
`;
