import styled from 'styled-components';

export const SideNav = styled.div`
  background: var(--black);
  height: 100vh;
  right: 0;
  max-height: 100vh;
  max-width: 50%;
  overflow: hidden;
  padding: 2rem 2.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export const Button = styled.button`
  background: transparent;
  color: var(--white);
  height: 3rem;
  position: absolute;
  right: 2.5rem;
  top: 2rem;
  width: 3rem;
`;

export const Content = styled.div`
  margin: 6rem 0 0;
`;
