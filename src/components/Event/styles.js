import styled from 'styled-components';

export const Event = styled.article`
  margin: 0 auto;
  max-width: 640px;
  text-align: center;

  & .title {
    color: var(--coal);
    font: 900 var(--type-2) var(--font-questrial);
  }

  & .body {
    margin: 2rem auto 0;

    p {
      text-align: center;
    }
  }

  @media (min-width: ${props => props.theme.desktop}) {
    display: flex;
  }
`;

export const Content = styled.div``;

export const Image = styled.div`
  @media (min-width: ${props => props.theme.desktop}) {
    margin-left: 1rem;
  }
`;

export const Footer = styled.footer`
  box-shadow: inset 0 1px #eee;
  color: var(--coal);
  list-style-type: none;
  margin: 2rem 0 0;
  padding: 0.5rem 0;

  & > div {
    font: 900 var(--type--1) var(--font - questrial);
    margin: 0.5rem auto 0;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & > div {
      margin: 0.5rem 0 0 2rem;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
