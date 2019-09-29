import { createGlobalStyle } from 'styled-components';

export const GlobalTheme = {
  desktop: '64rem',
  maxWidth: '1260px',
  tablet: '45rem'
};

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Questrial|Raleway:300,400,400i,600,600i,900,900i&display=swap');
    /* stylelint-disable */

   /*
    * Shared CSS custom properties
    */

  :root {
    /*  Type scale
    *
    *  Type and verticle spacing adheres to an 8px baseline grid
    *  We are using a 1rem = 16px baseline for setting font-size and line-height
    *
    *  Baseline body copy font is 16px/24px = 1rem/1.5rem
    *
    *  Usage:
    *  font: 400 var(--type-0) var(--font-sans);
    *
    *  or,
    *  font-size: 1rem;
    */

    --type--2: .707rem/1rem;
    --type--1: 1rem/1.25rem;
    --type-0: 1rem/1.5rem; /* Base, Small body*/
    --type-1: 1.414rem/2rem;
    --type-2: 1.99rem/2.25rem;
    --type-3: 2.827rem/3rem;
    --type-4: 3.99rem/4.25rem;
    --type-5: 5.65rem/5.75rem;

    /* Font Families & Weights */
    --font-questrial: Questrial, sans-serif;
    --font-raleway: Raleway, sans-serif;

    /* Ease functions */
    --ease-inOut: cubic-bezier(0.645, 0.045, 0.355, 1);
    --ease-outQuint: cubic-bezier(0.23, 1, 0.32, 1);

    /* Colors */
    --black: #000;
    --coal: #38383B;
    --silver: #A8A6A0;
    --moon: #F7F7F7;
    --white: #fff;
  }

  /**
  * Spacing and type sizes can be proportionally scaled by:
  * - using the rem unit within components
  * - specifying a percentage value for the font - size property on the html selector
  */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    background: var(--moon);
    color: (--black);
    font-family: var(--font-raleway);
    font-size: 100%; /* 16px base font */
    text-align: center;
  }

  a {
    color: var(--coal);
    background-repeat: repeat-x;
    background-image: linear-gradient(
      to right,
      currentColor 100%,
      currentColor 0
    );
    background-size: 1px 1px;
    background-position: 0 100%;
    font: inherit;
    text-decoration: none;
    transition: 200ms background-size var(--ease-inOut);
    white-space: initial;

    &:hover {
      background-size: 1px 2px;
      text-decoration: none;
    }
  }
  /* stylelint-enable */
`;
