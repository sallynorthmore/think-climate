import styled from 'styled-components';

interface IProps {
  color?: string;
}

export const Contact = styled.ul`
  font: 400 var(--type-0) var(--font-value-regular);
  list-style: none;
  text-align: center;

  @media (min-width: ${props => props.theme.desktop}) {
    text-align: left;
  }
`;

export const Item = styled.li`
  margin: 1rem auto 0;

  & .iconLink {
    display: inline-block;
    margin: 1rem 2rem;
    opacity: 0.8;
    text-decoration: none;
    transform: scale(1.5);

    &:not(:first-child) {
      margin-left: 0.5rem;
    }

    &:hover {
      opacity: 1;
      transition: 0.5s opacity let(--ease-outQuint);
    }
  }

  @media (min-width: ${props => props.theme.tablet}) {
    & .iconLink {
      margin: auto;
      transform: scale(1);
    }
  }
`;

export const Link = styled.a`
  color: ${(props: IProps) => (props.color ? props.color : `var(--purple)`)};
  font: 400 var(--type-1) var(--font-value-regular);

  /* stylelint-disable-next-line */
  & strong {
    font-family: var(--font-value-bold);
    font-weight: 400;
  }
`;
