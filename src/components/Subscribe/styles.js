import styled from 'styled-components';

export const Subscribe = styled.section`
  background: var(--moon);
  color: var(--black);
  padding: 5rem 2.5rem;

  & * + * {
    margin-top: 3rem;
  }

  & h2 {
    font: 400 var(--type-3) var(--font-questrial);
  }

  & p {
    font: 300 var(--type-0) var(--font-raleway);
    margin: 0 auto;
    max-width: 26rem;

    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;
