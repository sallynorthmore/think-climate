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
  /* background: var(--black); */
  /* background: linear-gradient(var(--black), transparent); */
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  position: absolute;
  top: 0;
  z-index: 10;
`;

export const Logo = styled.a`
  background: none;
  color: var(--white);
  display: inline-block;
  font: 900 var(--type--1) var(--font-questrial);
  letter-spacing: 1px;
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
