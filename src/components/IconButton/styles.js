import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const IconButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: var(--white);
  cursor: pointer;
  display: flex;
  height: 4.25rem;
  justify-content: center;
  outline: none;
  padding: 0;
  width: 4rem;

  /* stylelint-disable-next-line */
  -webkit-tap-highlight-color: transparent; /* for remove highlight */

  &::-moz-focus-inner {
    border: 0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }

  & .sr-only {
    visibility: hidden;
    width: 0;
  }
`;

export const Icon = styled.div`
  display: inline-block;
  height: 18px;
  margin: auto;
  position: relative;
  width: 25px;

  & .top,
  & .middle,
  & .bottom {
    background: var(--white);
    content: '';
    display: block;
    height: 2px;
    position: relative;
    top: 0;
    transform: rotate(0);
    transform-origin: top right;
    transition: all 0.19s;
    width: 24px;

    ${ifProp(
      'isActive',
      css`
        transform: rotate(-45deg);
        width: 25px;
      `
    )}
  }

  & .middle {
    left: 0;
    opacity: ${ifProp('isActive', '0', '1')};
    position: absolute;
    top: 8px;
  }

  & .bottom {
    bottom: -1px;
    left: 0;
    position: absolute;
    top: auto;
    transform: rotate(0);
    transform-origin: bottom right;

    ${ifProp(
      'isActive',
      css`
        transform: rotate(45deg);
      `
    )}
  }
`;
