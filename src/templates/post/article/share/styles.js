import styled from 'styled-components';

import { spacing, colors, font, media } from '@variables';

export const Icons = styled.dl`
  display: flex;

  ${media.query.default} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Title = styled.dt`
  display: flex;
  align-items: center;
  padding-right: ${spacing.default};
  font-weight: bold;
  font-size: ${font.size.medium};

  ${media.query.default} {
    flex-basis: 100%;
    padding-right: 0;
    padding-bottom: ${spacing.default};
    justify-content: center;
  }
`;

export const Icon = styled.dd`
  margin-right: ${spacing.half};

  button {
    display: flex;
  }

  rect,
  path {
    transition: .2s ease-in-out;
  }

  &:hover {
    rect,
    path {
      fill: ${colors.post.color};
    }
  }

  ${media.query.default} {
    margin-right: ${spacing.default};
  }
`;
