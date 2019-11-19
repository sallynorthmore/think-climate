import styled from 'styled-components';

export const FeaturedEvent = styled.div`
  /* ... */
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
