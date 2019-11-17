import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Hero = ({ smallText, headline, isEvent, isSmall }) => (
  <S.Hero isEvent={isEvent} isSmall={isSmall}>
    <S.HeroInner isSmall={isSmall}>
      {smallText && <p>{smallText}</p>}
      <h1>{headline}</h1>
    </S.HeroInner>
  </S.Hero>
);

Hero.defaultProps = {
  isEvent: false,
  isSmall: false
};

Hero.props = {
  isEvent: PropTypes.bool,
  isSmall: PropTypes.bool,
  headline: PropTypes.string,
  smallText: PropTypes.string
};

export default Hero;
