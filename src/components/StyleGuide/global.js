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

        --type--3: .75rem/1.25rem; /* Form Errors */
        --type--2: .875rem/1rem; /* Nav Links / Buttons */
        --type--1: 1rem/1.2rem; /* Subheadline, Secondary CTA */
        --type-0: 1rem/2rem; /* Base, Small body*/
        --type-1: 1.125rem/2rem; /* Large body */
        --type-2: 1.5rem/2rem; /* Feature body, Small headline */
        --type-3: 2rem/2.25rem; /* Medium headline, Page intro */
        --type-4: 2.25rem/3.5rem; /* Quote */
        --type-5: 3rem/3.5rem; /* Large headline, Page headline */
        --type-6: 3.5rem/4rem; /* Section headline */
        --type-7: 5rem/5rem; /* marketing figure */

        /* Font Families & Weights */
        --font-questrial: Questrial, sans-serif;
        --font-raleway: Raleway, sans-serif;

        /* Ease functions */
        --ease-inOut: cubic-bezier(0.645, 0.045, 0.355, 1);
        --ease-outQuint: cubic-bezier(0.23, 1, 0.32, 1);

        /* Colors */
        --aqua: #7ff5ff;
        --eggshell: #e0f9fd;
        --black: #343138;
        --silver: #F9F9F9;
        --grey: #d8d8d8;
        --mist: #959398;
        --pink: #ffa4e0;
        --red: #f13b72;
        --plum: #22096f;
        --purple: #431faf;
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
      background: black;
      font-family: var(--font-raleway);
      font-size: 100%; /* 16px base font */
      text-align: center;
    }

    h1, h2 {
      font-family: var(--font-questrial);
      font-weight: 900;
    }

    /* stylelint-enable */

`;
