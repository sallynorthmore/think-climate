import styled from 'styled-components';

export const HomePage = styled.div``;

export const Main = styled.main`
  background: var(--white);
  text-align: center;
`;

export const Team = styled.div`
  background: var(--silver);
  padding: 2rem 2.25rem;
`;

export const Title = styled.h2`
  color: var(--black);
  font: 400 var(--type-3) var(--font-questrial);
`;

export const Profiles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 2rem auto 0;
  max-width: 45rem;

  & li {
    flex: 0 0 50%;
    padding: 1rem;
  }

  & .image {
    border-radius: 100%;
    overflow: hidden;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    max-width: 60rem;

    & li {
      flex: 0 0 20%;
      padding: 0.5rem;
    }

    & .image {
      border-radius: 0;
    }
  }
`;
