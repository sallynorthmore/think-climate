import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const VideoHero = ({ smallText, headline, isEvent }) => (
  <S.VideoHero isEvent={isEvent}>
    <S.Video autoPlay="true" loop="true" muted>
      <source src="/videos/uploads/waves.mp4" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </S.Video>
    <S.VideoHeroInner>
      {smallText && <p>{smallText}</p>}
      <h1>{headline}</h1>
    </S.VideoHeroInner>
  </S.VideoHero>
);

VideoHero.defaultProps = {
  isEvent: false
};

VideoHero.props = {
  isEvent: PropTypes.bool,
  headline: PropTypes.string,
  smallText: PropTypes.string
};

export default VideoHero;

{
  /* <source src="/videos/uploads/waves.webm"
        type="video/webm"> */
}
