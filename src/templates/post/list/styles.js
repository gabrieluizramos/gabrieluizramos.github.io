import styled from 'styled-components';

import { colors, spacing, grid } from '@variables';

import { createDivider } from '@components/layout/divider/styles';

export const List = styled.ol`
  width: 100%;
  max-width: ${grid.size};
  margin: 0 auto;
  padding: 0 ${spacing.double} ${spacing.onehalf};
  display: flex;
  flex-direction: column;
`;

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
      position: absolute;
      left: 0;
      bottom: 0;
      ${createDivider({ color: colors.terminal.black })}
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

export const cursor = `
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

export const PostCursor = styled.span`
  ${cursor}
`

export const PostLast = styled.span`
  color: ${colors.terminal.yellow};
`

export const PostTitle = styled.span`
  color: ${colors.white};
`
