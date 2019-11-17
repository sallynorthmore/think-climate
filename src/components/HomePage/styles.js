import styled from 'styled-components';

export const HomePage = styled.div``;

export const Main = styled.main`
  background: var(--silver);
  text-align: center;
`;

export const Events = styled.div`
  padding: 1rem;

  @media (min-width: ${props => props.theme.desktop}) {
    /* display: flex; */
    margin: 0 auto;
    /* max-width: 80rem; */
    /* display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'main item1' 'main item2'; */
  }
`;

export const MainEvent = styled.div`
  /* margin: 1rem 0 0; */
  @media (min-width: ${props => props.theme.desktop}) {
    /* grid-area: main; */
    /* flex: 0 0 50%; */
  }
`;

export const Quote = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.desktop}) {
    display: flex;
    padding: 3rem;
    flex: 0 0 50%;
  }
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
  & .imageLink {
    max-height: 160px;
    overflow: hidden;
    position: relative;

    & img {
      margin-top: -30%;
      position: relative;
      width: 100%;
    }
  }

  @media (min-width: ${props => props.theme.tablet}) {
    display: inline-block;
    max-width: 50%;

    &:last-of-type {
      padding-left: 1rem;
    }
  }

  @media (min-width: ${props => props.theme.desktop}) {
    display: block;

    /* padding-left: 1rem; */

    &:first-child {
      grid-area: item1;
      /* max-height: 50%; */
    }

    &:last-child {
      grid-area: item2;
      /* max-height: 50%; */
    }

    & ${Post} {
      position: relative;
      max-height: 50%;

      &:not(:first-child) {
        padding-left: 0;
      }
    }

    & .imageLink {
      max-height: 180px;
      overflow: hidden;
      position: relative;

      & img {
        margin-top: -30%;
        width: 100%;
        position: relative;
      }
    }
  }
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
