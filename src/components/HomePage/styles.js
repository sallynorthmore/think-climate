import styled from 'styled-components';

export const HomePage = styled.div``;

export const Main = styled.main`
  background: var(--white);
  text-align: center;
`;

export const Events = styled.div`
  background: var(--silver);
  padding: 1rem;
`;

export const MainEvent = styled.div`
  /* margin: 1rem 0 0; */
`;

export const Post = styled.div`
  margin: 1rem 0 0;
  text-align: left;

  & a.imageLink {
    display: block;
  }

  & img {
    display: block;
  }

  & .date {
    color: var(--silver);
    font: 600 var(--type--2) var(--font-raleway);
  }

  & .title {
    color: #cd282d;
    font: 600 var(--type--1) var(--font-raleway);
    margin: 0.25rem 0 0;
  }

  & .speakers {
    color: var(--coal);
    font: 600 var(--type--2) var(--font-raleway);
    margin: 0.25rem 0 0;
  }

  & .more {
    color: var(--coal);
    display: inline-block;
    font: 600 var(--type--2) var(--font-raleway);
    margin: 0.5rem 0 0;
  }

  & .content {
    background: var(--white);
    border-radius: 0 0 8px 8px;
    padding: 1rem;

    & p {
      font: 300 var(--type-0) var(--font-raleway);
      margin: 0.5rem 0 0;

      @media (min-width: ${props => props.theme.tablet}) {
        margin: 0.5rem 0 0;
      }
    }
  }
`;

export const EventAside = styled.div`
  /* margin: 1rem 0 0;

  @media (min-width: ${props => props.theme.tablet}) {
    margin: 0;

    & div:not(:first-child) {
      margin: 1rem 0 0;
    }
  } */
`;

export const Team = styled.div`
  background: var(--silver);
  padding: 2rem 2.25rem;

  & p {
    font: 300 var(--type-0) var(--font-raleway);

    &:not(:first-child) {
      margin-top: 1.25rem;
    }

    @media (min-width: ${props => props.theme.tablet}) {
      &:not(:first-child) {
        margin-top: 2rem;
      }
    }
  }

  @media (min-width: ${props => props.theme.tablet}) {
    padding: 5rem 2.5rem;
  }
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
    display: block;
    overflow: hidden;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    max-width: 60rem;

    & li {
      flex: 0 0 20%;
      padding: 0.5rem;
    }

    & .image {
      /* border-radius: 0; */
    }
  }
`;
