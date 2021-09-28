import styled from 'styled-components';

import { colors, spacing, font, radius } from '@variables';

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

export const hideLabel = `
  height: 0;
  padding: 0;
  margin: 0;
  width: 0;
  opacity: 0;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${spacing.half};
  cursor: pointer;
`;

export const Field = styled.input`
  width: 100%;
  border: 0;
  background: ${colors.terminal.black};
  padding: ${spacing.default};
  color: ${colors.white};
  font-size: ${font.size.default};
  border: 2px solid ${colors.white};
  border-radius: ${radius.half};
`;

export const Error = styled.span`
  display: block;
  margin: ${spacing.half} 0;
  font-size: ${font.size.small};
  color: ${colors.terminal.yellow};
`;
