import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const Team = styled.div`
  & h2 {
    color: var(--black);
    font: 900 var(--type-1) var(--font-questrial);

    @media (min-width: ${props => props.theme.tablet}) {
      color: var(--black);
      font: 900 var(--type-3) var(--font-questrial);

      &:not(:first-child) {
        margin-top: 3rem;
      }
    }
  }
`;

export const Profiles = styled.ul`
  margin: 1rem auto 0;

  @media (min-width: ${props => props.theme.tablet}) {
    margin: 5rem auto 0;
    max-width: 70rem;
  }
`;

export const Profile = styled.li`
  list-style: none;
  margin-top: 2rem;
  text-align: left;
  width: 100%;

  @media (min-width: ${props => props.theme.tablet}) {
    display: flex;
    margin-top: 3rem;

    ${ifProp(
      'isImageRight',
      css`
        flex-direction: row-reverse;
      `
    )}
  }
`;

export const Image = styled.div`
  @media (min-width: ${props => props.theme.tablet}) {
    flex: 0 0 50%;

    & img {
      max-width: 100%;
    }
  }
`;

export const Bio = styled.div`
  flex: 1;
  padding: 1rem 2rem;

  & h3 {
    color: var(--black);
    font: 900 var(--type-1) var(--font-questrial);
    margin-top: 1.5rem;
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

  & li {
    font: 300 var(--type-0) var(--font-raleway);
    list-style-type: disc;
    margin: 0.5rem 0 0 1rem;
  }

  & strong {
    font-weight: 600;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    padding: 2rem 0 2rem 3rem;

    ${ifProp(
      'isImageRight',
      css`
        padding: 2rem 3rem 2rem 0;
      `
    )}

    & h3 {
      margin-top: 0;
    }
  }
`;
