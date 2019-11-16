import styled from 'styled-components';

export const AboutPage = styled.div``;

export const Main = styled.main`
  background: var(--white);
  font: 400 var(--type-0) var(--font-questrial);
  padding: 2rem 0 1rem;

  @media (min-width: ${props => props.theme.tablet}) {
    padding: 2rem 2.5rem;
  }
`;

export const Title = styled.h2`
  color: var(--black);
  font: 900 var(--type-2) var(--font-questrial);
  margin-top: 2rem;

  @media (min-width: ${props => props.theme.tablet}) {
    margin-top: 3rem;
  }
`;

export const Description = styled.div`
  margin: 2rem auto 0;
  max-width: 60rem;
  text-align: center;
`;
