import styled from 'styled-components';

export const EventPage = styled.div`
  /* ... */
`;

export const Main = styled.main`
  background: var(--white);
  display: flex;
  flex-direction: column-reverse;
  padding: 2rem 2.5rem;

  @media (min-width: ${props => props.theme.tablet}) {
    display: flex;
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex: 0 0 60%;
  margin-top: 2rem;
  text-align: left;

  @media (min-width: ${props => props.theme.tablet}) {
    flex: 0 0 60%;
    margin-top: 0;
  }
`;

export const Aside = styled.aside`
  text-align: left;

  & p {
    margin-top: 1rem !important;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    flex: 0 0 40%;
    margin-left: 4rem;

    & p {
      margin-top: 1rem !important;
    }
  }
`;
