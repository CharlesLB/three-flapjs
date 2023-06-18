//  @ts-nocheck

import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';

export default memo(createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: var(--fonts) !important;
    z-index: 1;
  }

  html,
  body,
  #root {
    height: 100vh;
    width: 100%;
    position: relative;
    background: var(--color-primary);
    font-family: var(--fonts) !important;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  button,
  a,
  div,
  i {
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    font-size: 16px !important;
    font-display: swap;

    --color-primary: #313638;
    --color-primary-dark: #232628;
    --color-primary-light: #4f5457;
    --color-success: #00c851;
    --color-error: #ff4444;
    --color-warning: #ffbb33;
    --header-height: 26px;

    --z-fixed: 100;

    --font-medium: 500;
    --font-semi-bold: 600;
    --z-fixed: 100;

    --fonts: "Source Sans Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
  }
`);
