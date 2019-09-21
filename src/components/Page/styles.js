import styled, { keyframes } from 'styled-components';

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
  position: relative;
  left: 20%;

  @media (min-width: ${props => props.theme.desktop}) {
    /* background-position: 100% center;
    background-size: contain; */
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
  margin-bottom: 0;
  padding-top: 5rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  & p {
    font: 900 1rem/1rem var(--font-questrial);
  }

  & h1 {
    font: 900 3rem/3rem var(--font-questrial);
    margin-top: 1rem;
    max-width: 600px;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    margin: auto 0;
    padding-top: 0;
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
  text-align: center;

  & * + * {
    margin: 2rem auto 0;
  }

  & h2 {
    margin: 2rem 0 0;
    font-size: 2rem;
  }

  & p {
    font-size: 1.25rem;
    line-height: 2rem;
    max-width: 620px;
  }

  & a {
    color: purple;
  }
`;
