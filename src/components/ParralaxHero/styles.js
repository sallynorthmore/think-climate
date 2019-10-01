import styled, { keyframes } from 'styled-components';

export const ParralaxHero = styled.div`
  background: var(--black);
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
`;

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

  @media (min-width: ${props => props.theme.desktop}) {
    background-position: 100% center;
    background-size: contain;
  }
`;

export const HeroText = styled.div`
  animation: ${fadeIn} 2s ease-in;
  position: relative;
  top: 20vh;

  @media (min-width: ${props => props.theme.desktop}) {
    background-position: 100% center;
    background-size: contain;
    top: 10vh;
  }
`;
