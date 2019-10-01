import styled from 'styled-components';

export const Home = styled.div``;

export const Main = styled.main`
  background: var(--white);
  text-align: center;
`;

export const Events = styled.div`
  background: var(--white);
  padding: 5rem 2.5rem;
  text-align: center;

  & > h2 {
    color: var(--black);
    font: 900 var(--type-3) var(--font-questrial);
  }

  & > ol {
    list-style: none;
    margin: 4rem 0 0;

    & > li {
      &:not(:first-of-type) {
        &::before {
          color: var(--silver);
          content: ' • ';
          display: inline-block;
          font-size: 3rem; /* stylelint-disable-line */
          padding: 3rem 0;
        }
      }
    }
  }
`;
