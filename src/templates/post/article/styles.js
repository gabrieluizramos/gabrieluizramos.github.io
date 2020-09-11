import styled from 'styled-components';

import { spacing, font, colors, grid } from '@variables';
import { cursor } from '../list/styles';

export const PostArticle = styled.article`
  width: 100%;
  max-width: ${grid.content};
  margin: 0 auto;

  color: ${colors.post.color};
  line-height: 1.7;
  letter-spacing: 0.5px;
  font-size: 17px;

  hr + h1,
  hr + h2,
  hr + h3,
  hr + h4,
  hr + h5,
  hr + h6 {
    padding-top: 0;
  }

  .post-anchor {
    fill: ${colors.white};
  }
`;

export const Footer = styled.footer`
`;

export const Back = styled.div`
  padding: ${spacing.default} 0;
  text-align: right;

  a {
    color: ${colors.terminal.purple};
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
  color: ${colors.terminal.blue.light};
`;

export const PostDate = styled.time`
  color: ${colors.terminal.green};
  font-size: ${font.size.default};
  font-weight: normal;
`;

export const PostContent = styled.div`
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
  .gatsby-resp-image-wrapper,
  .gatsby-highlight {
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

  h4,
  h5,
  h6 {
    font-size: ${font.size.medium};
  }

  ul,
  ol {
    padding-left: ${spacing.half};
  }

  li {
    &:before {
      content: '•';
      font-weight: bold;
      display: inline-block;
      margin-right: ${spacing.half};
      color: ${colors.terminal.purple};
    }

    &:not(:last-child) {
      margin-bottom: ${spacing.half};
    }
  }

  s,
  del {
    text-decoration: line-through;
  }

  iframe {
    width: 100%;
    min-height: 350px;
  }
`;
