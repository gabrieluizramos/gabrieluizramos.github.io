import styled from 'styled-components';

import { colors, spacing, font } from '@gabrieluizramos/preferences/variables';

export const Text = styled.div`
  font-size: ${font.size.default};
  margin-bottom: ${spacing.default};
`;

export const Title = styled.h3`
  color: ${colors.terminal.green};
  margin-bottom: ${spacing.default};
`;

export const Newsletter = styled.section``;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;

  .form {
    flex: 2;
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    flex-wrap: wrap;

    > * {
      margin: 2px;
    }
  }

  fieldset {
    flex: 5;
  }

  button {
    flex: 1.5;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    fieldset,
    button {
      flex: initial;
      width: 100%;
    }
  }
`;
