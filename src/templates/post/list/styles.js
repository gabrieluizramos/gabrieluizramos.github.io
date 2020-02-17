import styled from 'styled-components';

import { colors, spacing } from '@gabrieluizramos/preferences/variables';

export const PostItem = styled.li`
  display: block;
  position: relative;
  color: ${colors.terminal.blue.default};
  padding: ${spacing.default} 0;

  &:before {
    content: '~/';
  }

  &:not(:last-child) {
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(to right, transparent 25%, ${colors.terminal.black} 25%, ${colors.terminal.black} 75%, transparent 75%);
      background-size: ${spacing.default};
    }
  }
`

export const PostPath = styled.span`
  &:after {
    content: '»';
    display: inline-block;
    margin: 0 ${spacing.half};
    color: ${colors.terminal.purple}
  }
`

export const PostDate = styled.span`
  color: ${colors.terminal.green};

  &:before,
  &:after {
    color: ${colors.terminal.blue.light};
  }
  &:before {
    content: '(';
  }
  &:after {
    content: ')';
  }
`

export const PostCursor = styled.span`
  width: ${spacing.half};
  display: inline-block;
  background: ${colors.white};
  margin-left: ${spacing.half};
  animation: blink 1s infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`

export const PostLast = styled.span`
  color: ${colors.terminal.yellow};
`

export const PostTitle = styled.span`
  color: ${colors.white};
`
