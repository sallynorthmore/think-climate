import styled, { keyframes } from 'styled-components';

export const Hero = styled.div`
  background: var(--black);
  height: 100vh;
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
  left: 20%;
  position: relative;

  @media (min-width: ${props => props.theme.desktop}) {
    background-position: 100% center;
    background-size: contain;
  }
`;

export const Main = styled.main`
  background: var(--white);
  text-align: center;
`;

export const Events = styled.div`
  background: var(--white);
  padding: 5rem 2.5rem;
  text-align: center;

  & > h2 {
    color: var(--black);
    font: 900 var(--type-3) var(--font-questrial);
  }

  & > ol {
    list-style: none;
    margin: 4rem 0 0;

    & > li {
      &:not(:first-of-type) {
        &::before {
          color: var(--silver);
          content: ' • ';
          display: inline-block;
          font-size: 3rem;
          padding: 3rem 0;
        }
      }
    }
  }
`;
