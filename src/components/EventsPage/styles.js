import styled from 'styled-components';

export const EventsPage = styled.div`
  /* ... */
`;

export const Main = styled.main`
  background: var(--white);
  font: 400 var(--type-0) var(--font-questrial);
  min-height: 40vh;
  padding: 2rem 0 1rem;
  text-align: center;

  @media (min-width: ${props => props.theme.tablet}) {
    padding: 5rem 2.5rem;
  }
`;
