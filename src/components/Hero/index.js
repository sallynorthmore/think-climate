import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Hero = ({ smallText, headline, isEvent }) => (
  <S.Hero isEvent>
    <S.HeroInner>
      {smallText && <p>{smallText}</p>}
      <h1>{headline}</h1>
    </S.HeroInner>
  </S.Hero>
);

Hero.defaultProps = {};

Hero.props = {
  isEvent: PropTypes.bool,
  headline: PropTypes.string,
  smallText: PropTypes.string
};

export default Hero;
