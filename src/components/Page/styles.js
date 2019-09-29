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

  & ol {
    list-style: none;
  }

  & li {
    margin: 4rem 0 0;
  }
`;
