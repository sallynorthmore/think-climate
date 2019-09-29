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
  animation: ${fadeIn} 0.5s ease-in;
  background: linear-gradient(var(--black), transparent);
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  z-index: 10;
`;

export const Logo = styled.a`
  background: var(--black);
  color: var(--white);
  display: inline-block;
  font: 900 1.4rem/1.8rem var(--font-raleway);
  font-style: italic;
`;

export const Nav = styled.div`
  & ul {
    color: var(--white);
    display: flex;
    list-style: none;

    & a {
      color: var(--white);
    }
  }
`;
