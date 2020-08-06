import styled from 'styled-components';

import { grid, spacing } from '@variables';

export const Bio = styled.article`
  display: flex;
  flex-direction: column;
  max-width: ${grid.content};
  margin: 0 auto;
  line-height: 1.7;

  header,
  section {
    padding-bottom: ${spacing.double};
  }

  p {
    padding-bottom: ${spacing.default};
  }
`;

export const Avatar = styled.figure`
  text-align: center;
  padding-top: ${spacing.double};

  img {
    border-radius: 50%;
  }
`;
