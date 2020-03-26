import styled from 'styled-components';

import { spacing } from '@gabrieluizramos/preferences/variables';

export const Share = styled.section``;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const FacebookContainer = styled(Container)`
  & > div,
  iframe {
    width: 100% !important;
  }
`;

export const Icons = styled.ul`
  display: flex;
  padding: 0 ${spacing.half};
`;

export const Icon = styled.li`
  margin-right: ${spacing.half};
`;
