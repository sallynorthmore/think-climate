import styled from 'styled-components';

export const Content = styled.div`
  /**
   * Content is a special "weak" component used for styling chunks of HTML content.
   *
   * Use case is for WYSIWYG content
   *
   * It uses the "lobotomized owl" technique for whitepace:
   * http://alistapart.com/article/axiomatic-css-and-lobotomized-owls
   *
   * This component should rarely contain other components. However, the child
   * combinator is used to migigate leaky cascading should this have to happen.
   */

  /* stylelint-disable  */
  font: 400 var(--type-0) var(--font-questrial);
  margin: 0;
  max-width: 45rem; /* 720px */
  /* text-align: center; */

  @media (min-width: ${props => props.theme.tablet}) {
    /* text-align: left; */
  }

  & *:first-child {
    margin-top: 0;
  }

  & * + * {
    color: var(--black);
    font: inherit;
    margin-top: 1.5rem;

    @media (min-width: ${props => props.theme.tablet}) {
      margin-top: 2.5rem;
    }
  }

  & h1 {
    color: var(--black);
    font: 900 var(--type-2) var(--font-questrial);

    @media (min-width: ${props => props.theme.tablet}) {
      color: var(--black);
      font: 900 var(--type-4) var(--font-questrial);

      &:not(:first-child) {
        margin-top: 3rem;
      }
    }
  }

  & h2 {
    color: var(--black);
    font: 900 var(--type-1) var(--font-questrial);
    margin-top: 2rem;

    @media (min-width: ${props => props.theme.tablet}) {
      color: var(--black);
      font: 900 var(--type-3) var(--font-questrial);

      &:not(:first-child) {
        margin-top: 3rem;
      }
    }
  }

  & h3 {
    color: var(--black);
    font: 900 var(--type-2) var(--font-questrial);
    margin-top: 3rem;
  }

  & h4 {
    color: var(--black);
    font: 900 var(--type--1) var(--font-raleway);
  }

  & p {
    font: 300 var(--type-0) var(--font-raleway);

    &:not(:first-child) {
      margin-top: 1.25rem;
    }

    @media (min-width: ${props => props.theme.tablet}) {
      &:not(:first-child) {
        margin-top: 2rem;
      }
    }
  }

  & blockquote p {
    color: var(--coal);
    font: 300 var(--type-2) var(--font-raleway);
    line-height: 3rem;
  }

  & blockquote cite {
    color: var(--coal);
    font: 600 var(--type--1) var(--font-raleway);
    display: block;
  }

  & * > li {
    margin-top: 0.75rem;
  }

  & ul {
    & > li {
      list-style: disc inside;
    }
  }

  & ol {
    & li {
      list-style: decimal inside;
    }

    & ol {
      margin-left: 3rem;
      margin-top: 0;
    }
  }

  & strong {
    font-weight: 600;
  }

  /* <a> tags within <p>, <ol><li> and <ul><li> */
  & a,
  & * > a,
  & * > * > a {
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

  & table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }

  & th {
    font: 600 var(--type--1) var(--font-raleway);
    padding: 1rem 0.5rem 0.25rem;
  }

  & tr {
    color: var(--black);
    margin: 0;

    & td {
      border: 1px solid var(--silver);
      border-collapse: collapse;
      background: var(--white);
      margin: 0;
      padding: 1.25rem 0.5rem;
      vertical-align: text-top;
    }
  }

  & img {
    max-width: 100%;
  }
  /* stylelint-enable */
`;
