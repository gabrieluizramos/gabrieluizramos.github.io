import styled from 'styled-components';

import { spacing, font, colors } from '@gabrieluizramos/preferences/variables';
import { cursor } from '../list/styles';

export const Content = styled.div`
  margin: -${spacing.double} auto;
  background: ${colors.post.background};
  color: ${colors.post.color};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 0 ${spacing.double};
`;

export const Back = styled.div`
  padding: ${spacing.default} 0;
  text-align: right;

  a {
    color: ${colors.terminal.purple};
  }
`;

export const PostArticle = styled.article`
  padding: ${spacing.default} 0;

  hr {
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, ${colors.white} 25%, transparent 25%, transparent 75%, ${colors.white} 75%);
    background-size: ${spacing.default};
    margin: ${spacing.double} 0;
  }
`;

export const Banner = styled.figure``;

export const Caption = styled.figcaption`
  padding-top: ${spacing.half};
  font-size: ${font.size.small};
  text-align: right;

  a {
    color: ${colors.terminal.purple};
  }
`;

export const PostHeader = styled.header`
  > * {
    &:not(:last-child) {
      margin-bottom: ${spacing.half};
    }
  }
`;

export const PostTitle = styled.h1`
  font-size: ${font.size.big};
  margin-bottom: ${spacing.half};
`;

export const PostSubtitle = styled.h2`
  font-size: ${font.size.medium};
  font-weight: normal;
`

export const PostTime = styled.div`
  font-size: ${font.size.small};
  color: ${colors.terminal.blue.default};
`;

export const PostDate = styled.h2`
  color: ${colors.terminal.green};
  font-size: ${font.size.default};
  font-weight: normal;
`;

export const PostContent = styled.div`
  line-height: 1.5;

  .terminal-purple { color: ${colors.terminal.purple}; }
  .terminal-blue-default { color: ${colors.terminal.blue.default}; }
  .terminal-blue-light { color: ${colors.terminal.blue.light}; }
  .terminal-green { color: ${colors.terminal.green}; }
  .terminal-yellow { color: ${colors.terminal.yellow}; }
  .terminal-black { color: ${colors.terminal.black}; }
  .cursor { ${cursor} }

  blockquote {
    padding: ${spacing.default};
    font-style: italic;
    border-left: 2px solid ${colors.terminal.blue.light};

    a {
      color: ${colors.terminal.blue.light};
    }

    > *:last-child {
      margin-bottom: 0;
    }
  }

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
  img,
  blockquote,
  .gatsby-resp-image-wrapper {
    margin-bottom: ${spacing.default};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-top: ${spacing.double};
    color: ${colors.terminal.blue.light};
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
`;
