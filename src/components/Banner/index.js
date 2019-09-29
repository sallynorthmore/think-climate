import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Banner = ({ text }) => (
  <S.Banner>
    <S.Logo href="/" title="Home">
      {text}
    </S.Logo>
    {/* <S.Nav>
      <ul>
        <li>
          <a href="#">Program</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </ul>
    </S.Nav> */}
  </S.Banner>
);

Banner.defaultProps = {
  text: 'ThinkClimate'
};

Banner.props = {
  text: PropTypes.string
};

export default Banner;
