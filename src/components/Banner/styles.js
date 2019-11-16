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

export const Banner = styled.div`
  animation: ${fadeIn} 0.5s ease-in;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 8;
`;

export const Logo = styled.a`
  background: none;
  color: var(--white);
  display: inline-block;
  font: 900 var(--type--1) var(--font-questrial);
  letter-spacing: 1px;
  text-align: left;

  & svg {
    margin: 0;
  }
`;

export const SR = styled.span`
  height: 0;
  overflow: hidden;
  visibility: hidden;
  width: 0;
`;

export const NavButton = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.25rem;
  z-index: 10;

  ${ifProp(
    'isFixed',
    css`
      position: fixed;
    `
  )}
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
