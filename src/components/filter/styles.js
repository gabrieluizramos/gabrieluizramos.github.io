import styled from 'styled-components';

import { Field, Fieldset, Error } from '@components/form/input/styles';

import { grid, spacing } from '@variables';

export const Form = styled.form`
  margin: 0 auto;
  max-width: ${grid.size};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${spacing.triple} ${spacing.double} ${spacing.default};

  ${Fieldset} {
    flex: 1;
  }

  ${Field} {
    background: transparent;
    border: 0;
    font-size: initial;
    padding: 0;
    padding: 0 ${spacing.default};
  }

  ${Error} {
    display: none
  }
`;

export const Command = styled.span``;
