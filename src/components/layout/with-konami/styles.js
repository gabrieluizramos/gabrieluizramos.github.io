import styled from 'styled-components';

import { spacing } from '@variables';
import { cursor } from '@templates/post/list/styles'

export const KONAMI_DURATION = 5000;

export const blackout = `
  @keyframes blackout {
    0, 9% {
      opacity: 1;
    }

    10%, 100% {
      opacity: 0;
    }
  }
`;


export const Konami = styled.div`
  transition: 0.2s ease-in-out;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${spacing.onehalf};
  padding: ${spacing.default};
  animation: blackout 2s 3s;

  &:before {
    width: 200px;
    content: 'sudo rm -rf ~/';
    display: inline-block;
    white-space: nowrap;
    animation: grow 1s steps(15) normal;
    overflow: hidden;
  }

  &:after {
    content: '';
    height: ${spacing.double};
    ${cursor}
  }

  @keyframes grow {
    from {
      width: 0;
    }
    to {
      width: 200px;
    }
  }

  ${blackout};
`;
