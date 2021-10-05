import { createGlobalStyle } from 'styled-components';

import { colors, spacing } from '@variables';
import { createDivider } from './divider/styles'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:300,400,500,600,700&display=swap');

  html,
  body{
    height: 100%;
    background: ${colors.black};
    color: ${colors.white};
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style: none;
    vertical-align: baseline;
    box-sizing: border-box;
    z-index: 0;
    font-family: 'Fira Code', monospace, arial;
    font-variant-ligatures: none;
    outline: none;
  }

  a {
    color: ${colors.terminal.blue.default}
  }

  hr {
    ${createDivider({})}
    margin: ${spacing.double} 0;
  }
`;
