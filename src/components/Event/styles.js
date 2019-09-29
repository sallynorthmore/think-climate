import styled from 'styled-components';

export const Event = styled.div`
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

  & .footer {
    align-items: center;
    box-shadow: inset 0 1px #eee;
    color: var(--coal);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 2rem 0 0;
    padding: 0.5rem 0;

    & li {
      font: 900 var(--type--1) var(--font-questrial);
      margin: 0.5rem 0 0 2rem;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
