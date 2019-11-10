import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const AboutPage = styled.div``;

export const Main = styled.main`
  background: var(--white);
  font: 400 var(--type-0) var(--font-questrial);
  padding: 2rem 0 1rem;

  @media (min-width: ${props => props.theme.tablet}) {
    padding: 2rem 2.5rem;
  }
`;

export const Description = styled.div`
  margin: 2rem auto 0;
  max-width: 60rem;
  text-align: center;
`;

export const Team = styled.ul`
  list-style: none;
  margin: 3rem auto 0;

  @media (min-width: ${props => props.theme.tablet}) {
    max-width: 60rem;
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

export const TeamMate = styled.li`
  list-style: none;
  margin-top: 2rem;
  text-align: left;
  width: 100%;

  @media (min-width: ${props => props.theme.tablet}) {
    display: flex;

    ${ifProp(
      'isImageRight',
      css`
        flex-direction: row-reverse;
      `
    )}
  }
`;

export const Image = styled.div`
  & img {
    max-width: 20rem;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    flex: 0 0 50%;

    & img {
      max-width: 100%;
    }
  }
`;

export const Bio = styled.div`
  flex: 1;

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
