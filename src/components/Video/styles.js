import styled from 'styled-components';

interface IProps {
  isVideoRight?: boolean;
}

export const Video = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;

  @media (min-width: ${props => props.theme.tablet}) {
    align-items: center;
    display: flex;
    flex-direction: ${(props: IProps) =>
      props.isVideoRight ? `row-reverse` : `row`};
    justify-content: space-between;
  }
`;

export const Media = styled.div`
  margin: 5rem auto;
  max-width: 20.5rem;
  text-align: center;
  z-index: 1;

  & .video {
    box-shadow: 22px 24px 43px 0 rgba(51, 51, 51, 0.2);
    height: 520px;
    width: 324px;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    flex: 0 0 50%;
  }
`;

export const Content = styled.div`
  margin: 2.5rem auto 0;
  max-width: 18.75rem;
  z-index: 2;

  & .title {
    font: 400 var(--type-3) var(--font-ivar-medium);
    margin: 0 auto;
  }

  & .body {
    font: 400 var(--type-0) var(--font-value-regular);
    margin: 1rem auto 0;
  }

  & .link {
    margin: 1rem auto 0;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    flex: 0 0 50%;
    margin-top: 0;
    max-width: 30rem;
    padding: ${(props: IProps) =>
      props.isVideoRight ? `.5rem 2rem .5rem .5rem` : `.5rem .5rem .5rem 2rem`};
    text-align: left;

    & .title {
      font: 400 var(--type-3) var(--font-ivar-medium);
    }
  }
`;
