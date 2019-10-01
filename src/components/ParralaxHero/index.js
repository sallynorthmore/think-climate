import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Hero from '../Hero';
import * as S from './styles';

const ParralaxHero = ({ image, headline, smallText }) => {
  const [scrollTop, setScrollTop] = useState(0);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (currPos.y < 0 && currPos.y > -600) {
        setScrollTop(currPos.y);
      }
    },
    [scrollTop]
  );

  let earthStyles = {
    height: '100%',
    left: ' 20%',
    position: 'absolute',
    top: 0,
    width: '100%',
    transform: `translateY(${scrollTop * 0.05}px)`,
    transition: '0.2s transform cubic-bezier(0.075, 0.82, 0.165, 1)'
  };

  let textStyles = {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    transform: `translateY(${scrollTop * -0.1}px)`,
    transition: '0.2s transform cubic-bezier(0.075, 0.82, 0.165, 1)'
  };

  return (
    <S.ParralaxHero>
      {image && (
        <div style={earthStyles}>
          <S.Earth>
            <PreviewCompatibleImage
              imageInfo={{
                image: image,
                alt: `${headline}`
              }}
            />
          </S.Earth>
        </div>
      )}
      <div style={textStyles}>
        <S.HeroText>
          <Hero smallText={smallText} headline={headline}></Hero>
        </S.HeroText>
      </div>
    </S.ParralaxHero>
  );
};

ParralaxHero.defaultProps = {};

ParralaxHero.props = {
  children: PropTypes.string
};

export default ParralaxHero;
