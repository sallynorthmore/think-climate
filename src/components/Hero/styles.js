import styled, { keyframes, css } from 'styled-components';
import { ifProp } from 'styled-tools';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Hero = styled.header`
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
  color: var(--white);
  display: flex;
  min-height: 80vh;
  padding: 2rem 2.5rem;
  text-align: left;

  ${ifProp(
    'isEvent',
    css`
      min-height: 300px;
    `
  )}

  @media (min-width: ${props => props.theme.desktop}) {
    min-height: 100vh;

    ${ifProp(
      'isEvent',
      css`
        min-height: 400px;
        padding: 4rem 2.5rem 1rem;
      `
    )}
  }
`;

export const HeroInner = styled.div`
  margin-bottom: 0;
  padding-top: 5rem;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  & p {
    font: 900 var(--type--2) var(--font-questrial);
    max-width: 100rem;
  }

  & h1 {
    font: 900 var(--type-2) var(--font-questrial);
    margin-top: 1rem;
    max-width: 65rem;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    margin: auto 0;
    padding-top: 0;

    & p {
      font: 900 var(--type-0) var(--font-questrial);
    }

    & h1 {
      font: 900 var(--type-5) var(--font-questrial);
    }
  }
`;
