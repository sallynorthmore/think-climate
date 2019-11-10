import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import * as S from './styles';

const VideoHero = ({ smallText, headline, isEvent, video, image }) => (
  <S.VideoHero isEvent={isEvent}>
    <S.Video autoPlay loop muted>
      <source src={video} type="video/mp4" />
    </S.Video>
    <PreviewCompatibleImage
      className="heroImage"
      imageInfo={{
        image: image,
        alt: headline
      }}
    />
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
