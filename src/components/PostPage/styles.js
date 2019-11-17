import styled from 'styled-components';

export const PostPage = styled.div`
  /* ... */
`;
export const Main = styled.main`
  background: var(--white);
  font: 400 var(--type-0) var(--font-questrial);
  padding: 2rem 1rem;

  @media (min-width: ${props => props.theme.tablet}) {
    padding: 5rem 2.5rem;
  }
`;
