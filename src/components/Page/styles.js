import styled, { keyframes } from 'styled-components';
// import { ifProp } from 'styled-tools';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Earth = styled.div`
  animation: ${fadeIn} 5s ease-in;
  background-repeat: no-repeat;
  background-position: 100px -80%;
  background-size: 125%;
  min-height: 100vh;

  @media (min-width: ${props => props.theme.desktop}) {
    background-position: 100% center;
    background-size: contain;
  }
`;

export const Hero = styled.header`
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
  color: white;
  display: flex;
  min-height: 100vh;
  padding: 2rem 2.5rem;
  text-align: left;
`;

export const HeroInner = styled.div`
  text-align: left;

  & p {
    font: 900 1rem/1rem var(--font-questrial);
  }

  & h1 {
    font: 900 3rem/3rem var(--font-questrial);
    margin-top: 1rem;
    max-width: 600px;
  }
`;

export const Content = styled.main`
  background: white;
  color: black;
  min-height: 100vh;
  padding: 2rem 2.5rem;
  text-align: center;
`;

export const ContentInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: left;

  & * + * {
    margin: 2rem 0 0;
  }

  & h2 {
    margin: 2rem 0 0;
    font-size: 2rem;
  }

  & p {
    font-size: 1.25rem;
  }
`;
