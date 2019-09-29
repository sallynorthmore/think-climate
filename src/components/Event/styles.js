import styled from 'styled-components';

export const Event = styled.div`
  & .title {
    color: var(--coal);
    font: 900 var(--type-2) var(--font-questrial);
  }

  & .date {
    color: var(--coal);
    font: 900 var(--type-0) var(--font-questrial);
    margin-top: 0;
  }

  & .time {
    color: var(--coal);
    font: 900 var(--type--2) var(--font-questrial);
    margin-top: 0;
  }

  & .location {
    color: var(--coal);
    font: 900 var(--type--1) var(--font-questrial);
    margin-top: 0;
  }

  & .body {
    font: 300 var(--type-0) var(--font-raleway);
    margin: 2rem auto 0;
    max-width: 640px;

    & p {
      font: 300 var(--type-0) var(--font-raleway);
      margin-top: 2rem;
    }
  }
`;
