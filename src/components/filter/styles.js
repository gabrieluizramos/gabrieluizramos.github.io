import styled from 'styled-components';

import { Field, Fieldset, Error, hideLabel } from '@components/form/input/styles';

import { spacing } from '@variables';

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: ${spacing.default};

  ${Fieldset} {
    flex: 1;
  }

  label {
    ${hideLabel}
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
