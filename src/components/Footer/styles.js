import styled from 'styled-components';

export const Footer = styled.div`
  background: var(--coal);
  color: var(--white);
  margin-bottom: 0;
  padding: 3rem 2.5rem;

  & ul {
    list-style: none;
  }

  & li {
    margin: 1rem 0 0;
  }

  & a {
    background: none;
    color: var(--white);
    opacity: 0.5;
    padding: 1rem 0;

    &:hover {
      opacity: 1;
    }
  }

  & p {
    margin: 2rem 0;
    opacity: 0.5;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    padding: 3rem 2.5rem 2rem;

    & ul {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      margin: 0 auto;
    }

    & li {
      margin: 1rem;
    }

    & p {
      margin: 0;
    }
  }
`;
