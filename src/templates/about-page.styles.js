import styled from 'styled-components';

export const AboutPage = styled.div``;

export const Main = styled.main`
  background: var(--white);
  font: 400 var(--type-0) var(--font-questrial);
  padding: 2rem 2.5rem;

  @media (min-width: ${props => props.theme.tablet}) {
    /* ... */
  }
`;

export const Team = styled.ul`
  list-style: none;
  margin: 3rem auto 0;
  max-width: 60rem;
`;

export const Title = styled.h2`
  color: var(--black);
  font: 900 var(--type-2) var(--font-questrial);
  margin-top: 2rem;

  @media (min-width: ${props => props.theme.tablet}) {
    margin-top: 3rem;
  }
`;

export const TeamMate = styled.li`
  list-style: none;
  margin-top: 2rem;
  text-align: left;

  @media (min-width: ${props => props.theme.tablet}) {
    display: flex;
  }
`;

export const Image = styled.div`
  @media (min-width: ${props => props.theme.tablet}) {
    flex: 0 0 50%;
  }
`;

export const Bio = styled.div`
  & h3 {
    color: var(--black);
    font: 900 var(--type-1) var(--font-questrial);
    margin-top: 1.5rem;

    @media (min-width: ${props => props.theme.tablet}) {
      margin-top: 0;
    }
  }

  & h4 {
    color: var(--black);
    font: 900 var(--type--1) var(--font-questrial);
    margin-top: 2rem;
  }

  & p {
    font: 300 var(--type-0) var(--font-raleway);

    &:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  & strong {
    font-weight: 600;
  }
`;
