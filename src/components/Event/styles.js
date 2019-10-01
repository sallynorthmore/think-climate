import styled from 'styled-components';

export const Event = styled.article`
  margin: 0 auto;
  max-width: 720px;
  text-align: center;

  @media (min-width: ${props => props.theme.tablet}) {
    display: flex;
    text-align: left;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;

  & .title {
    color: var(--coal);
    font: 900 var(--type-2) var(--font-questrial);
  }

  & .body {
    margin: 2rem auto 0;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    flex: 1;
    margin-left: 2rem;
    margin-top: 0;
  }
`;

export const Image = styled.div`
  @media (min-width: ${props => props.theme.tablet}) {
    flex: 0 0 40%;
  }
`;

export const Footer = styled.ul`
  box-shadow: inset 0 1px #eee;
  color: var(--coal);
  list-style-type: none;
  margin: 2rem 0 0;
  padding: 0.5rem 0;

  & li {
    font: 900 var(--type--2) var(--font-questrial);
    margin: 0.5rem auto 0;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    & li {
      margin: 0.5rem 0 0 2rem;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
