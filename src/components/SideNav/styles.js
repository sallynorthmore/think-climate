import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const SideNav = styled.div`
  background: var(--black);
  height: 100vh;
  max-height: 100vh;
  max-width: 50%;
  overflow: hidden;
  padding: 2rem 2.5rem;
  position: fixed;
  right: -50%;
  top: 0;
  transition: 0.2s transform var(--ease-inOut);
  width: 100%;
  z-index: 9;

  ${ifProp(
    'isActive',
    css`
      transform: translateX(-100%);
    `
  )}
`;

export const Content = styled.div`
  margin: 6rem 0 0;
`;
