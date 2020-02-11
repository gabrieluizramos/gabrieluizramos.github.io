import { createGlobalStyle } from 'styled-components';

import { colors, spacing } from '../variables';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:300,400,500,600,700&display=swap');

  html,
  body{
    height: 100%;
    background: ${colors.black};
    color: ${colors.white};
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
    outline: none;
  }

  a {
    color: ${colors.terminal.blue.default}
  }

  hr {
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent 25%, ${colors.terminal.black} 25%, ${colors.terminal.black} 75%, transparent 75%);
    background-size: ${spacing.default};
    margin: ${spacing.double} 0;
  }
`;
