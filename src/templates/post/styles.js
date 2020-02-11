import styled from 'styled-components';

import { spacing, font, colors } from '@gabrieluizramos/preferences/variables';

export const Back = styled.div`
  padding: ${spacing.default} 0;
  text-align: right;

  a {
    color: ${colors.terminal.purple};
  }
`;

export const PostArticle = styled.article`
  padding: ${spacing.default} 0;
`;

export const PostHeader = styled.header``;

export const PostTitle = styled.h1`
  font-size: ${font.size.big};
  margin-bottom: ${spacing.half};
`;

export const PostSubtitle = styled.h2`
  color: ${colors.terminal.green};
  font-size: ${font.size.default};
  font-weight: normal;
`;

export const PostContent = styled.div`
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  figure,
  image {
    margin-bottom: ${spacing.default};
  }

  li {
    padding-left: ${spacing.default};

    &:before {
      content: '•';
      font-weight: bold;
      display: inline-block;
      margin-right: ${spacing.half};
      color: ${colors.terminal.purple};
    }
  }
`
