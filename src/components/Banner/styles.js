import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Banner = styled.div`
  background: linear-gradient(black, transparent);
  animation: ${fadeIn} 0.5s ease-in;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  z-index: 10;
`;

export const Logo = styled.a`
  background: black;
  color: white;
  display: inline-block;
  font-style: italic;
  font: 900 1.4rem/1.8rem var(--font-raleway);
`;

export const Nav = styled.div`
  & ul {
    color: white;
    display: flex;
    list-style: none;

    & a {
      color: white;
    }
  }
`;
