import styled from 'styled-components';

export const Nav = styled.nav`
  display: block;

  & ul {
    list-style: none;
  }

  & li {
    display: flex;
    margin: 2rem 0 0;
    width: 100%;

    & a {
      color: var(--white);
      font: 900 var(--type-1) var(--font-questrial);
      margin: auto 0 auto auto;
    }
  }

  @media (min-width: ${props => props.theme.desktop}) {
    & ul {
      display: flex;
    }

    & li {
      margin: 0 1rem;
    }

    & a {
      color: var(--white);
      font-size: 2rem;
      /* font: 600 var(--type--2) var(--font-questrial); */
      margin: auto 0 auto auto;
    }
  }
`;
