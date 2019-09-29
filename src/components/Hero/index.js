import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Hero = ({ smallText, headline, textColor }) => (
  <S.Hero>
    <S.HeroInner>
      {smallText && <p>{smallText}</p>}
      <h1>{headline}</h1>
    </S.HeroInner>
  </S.Hero>
);

Hero.defaultProps = {};

Hero.props = {
  headline: PropTypes.string,
  smallText: PropTypes.string
};

export default Hero;
