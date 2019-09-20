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

  /* stylelint-disable selector-no-universal, selector-no-type, selector-max-specificity, selector-max-universal, selector-max-type */
  font: 400 var(--type-0) var(--font-ivar-regular);
  margin: 0 auto;
  max-width: 720px;
  padding: 3rem 2rem;
  text-align: left;

  & * + * {
    color: var(--black);
    font: inherit; /* stylelint-disable-line */
    margin-top: 3rem;
  }

  & h1 {
    color: var(--black);
    font: 400 var(--type-4) var(--font-value-bold);
    margin-top: 0;
  }

  & h2 {
    color: var(--black);
    font: 400 var(--type-2) var(--font-value-bold);
  }

  & h3 {
    color: var(--black);
    font: 400 var(--type-1) var(--font-value-bold);
  }

  & p {
    font: 400 var(--type-0) var(--font-ivar-regular);

    &:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  & * > li {
    margin-top: 0.75rem;
  }

  & ul {
    & > li {
      list-style: square;
    }
  }

  & ol {
    & li {
      list-style: decimal;
    }

    & ol {
      margin-left: 3rem;
      margin-top: 0;
    }
  }

  & table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }

  & tr {
    color: var(--black);
    margin: 0;
    padding: 1rem 0;

    & td {
      border: 1px solid var(--mist);
      border-collapse: collapse;
      margin: 0;
      padding: 0.25rem;
      vertical-align: text-top;
    }
  }

  & strong {
    font-family: var(--font-value-bold);
    font-weight: 400;
  }

  /* <a> tags within <p>, <ol><li> and <ul><li> */
  & * > a,
  & * > * > a {
    color: var(--plum);
    font: inherit; /* stylelint-disable-line */
    text-decoration: underline;

    &:hover {
      color: var(--purple);
      text-decoration: none;
    }
  }
`;
