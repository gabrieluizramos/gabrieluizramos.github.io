import styled from 'styled-components';

import { blackout } from './with-konami/styles';

export const Layout = styled.div`
  transition: .2s ease-in-out;
  opacity: ${({ konami }) => konami && 0.25};
  filter: ${({ konami }) => konami && 'blur(5px)'};
  animation: ${({ konami }) => konami && 'blackout 2s 3s'};
  ${blackout};
`;
