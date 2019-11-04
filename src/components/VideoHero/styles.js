import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const VideoHero = styled.header`
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
  color: var(--white);
  display: flex;
  min-height: 300px;
  overflow: hidden;
  padding: 2rem 2.5rem;
  position: relative;
  text-align: left;

  & .gatsby-image-wrapper {
    left: 0;
    min-height: 400px;
    opacity: 0.5;
    position: absolute !important; /* stylelint-disable-line */
    top: 0;
    width: 150%;
    z-index: 0;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    min-height: 400px;
    padding: 4rem 2.5rem 1rem;

    & .gatsby-image-wrapper {
      display: none;
    }
  }
`;

export const Video = styled.video`
  display: none;

  @media (min-width: ${props => props.theme.desktop}) {
    display: block;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 150%;
    z-index: 2;
  }
`;

export const VideoHeroInner = styled.div`
  margin-bottom: 0;
  padding-top: 5rem;
  position: relative;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  z-index: 2;

  & p {
    font: 900 var(--type--2) var(--font-questrial);
    max-width: 100rem;
  }

  & h1 {
    font: 900 var(--type-2) var(--font-questrial);
    margin-top: 1rem;
    max-width: 65rem;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    margin: auto 0;
    padding-top: 0;

    & p {
      font: 900 var(--type-0) var(--font-questrial);
    }

    & h1 {
      font: 900 var(--type-5) var(--font-questrial);
    }
  }
`;
