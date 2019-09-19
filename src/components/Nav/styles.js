import styled from 'styled-components';

interface IProps {
  isExpanded?: boolean;
}

export const Nav = styled.div`
  background: transparent;
  text-align: center;
`;

export const Items = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  display: block;
  font: 400 var(--type-1) var(--font-value-bold);
  letter-spacing: 1.5px;
  line-height: 1; /* stylelint-disable-line */
  margin: 1.25rem 0 0;
  text-transform: uppercase;

  /* stylelint-disable-next-line */
  & .link {
    color: var(--white);
    display: inline-block;
    overflow: hidden;
    padding: 0;
    position: relative;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;

    &::before {
      background: var(--white);
      bottom: 0;
      content: '';
      display: block;
      height: 2px;
      opacity: 0;
      position: absolute;
      transform: translateY(-1px);
      transition: 0.5s all var(--ease-outQuint);
      width: 100%;
    }

    /* stylelint-disable */
    &:hover,
    &.isActive {
      opacity: 1;
      text-decoration: none;
    }

    &:hover {
      &::before {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &:active,
    &.isActive {
      &::before {
        opacity: 1;
        transform: translateY(0);
      }
    }
    /* stylelint-enable */
  }

  @media (min-width: ${props => props.theme.desktop}) {
    font: 400 var(--type--2) var(--font-value-bold);
    margin: 0 0 0 2.5rem;
    position: relative;

    &.hasSubNav {
      margin-right: 1rem;
    }

    &:hover {
      /* stylelint-disable-next-line */
      & ul {
        opacity: 1;
      }
    }

    &:last-child {
      /* stylelint-disable-next-line */
      & ul {
        width: 15rem; /* hack for extra long nav text */
      }
    }
  }
`;

export const Icon = styled.span`
  display: inline-block;
  padding-left: 0.5rem;
  position: absolute;
  top: 0;
`;

export const SubItems = styled.ul`
  display: block;
  height: ${(props: IProps) => (props.isExpanded ? `auto` : `0`)};
  left: 50%;
  list-style: none;
  margin: 0 auto;
  opacity: ${(props: IProps) => (props.isExpanded ? `1` : `0`)};
  padding: 0.5rem 0 0;
  position: absolute;
  right: 0;
  transform: translate(-50%, 0);
  transition: opacity 0.22s var(--ease-inOut);
  visibility: ${(props: IProps) => (props.isExpanded ? `visible` : `hidden`)};
  width: 12rem;
`;

export const SubItem = styled.li`
  background: var(--plum);
  display: block;
  font: 400 var(--type--1) var(--font-value-regular);
  padding: 0.75rem;
  text-transform: none;

  /* stylelint-disable */
  & .link {
    opacity: 0.8;
    transition: opacity 0.22s var(--ease-inOut);

    &::before {
      display: none;
    }

    &.isActive {
      opacity: 1;
    }
  }
  /* stylelint-enable */
  &:first-child {
    padding-top: 1.5rem;
  }

  &:last-child {
    padding-bottom: 1.5rem;
  }
`;
