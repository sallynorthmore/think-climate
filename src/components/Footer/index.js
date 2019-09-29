import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Footer = ({ exampleProp }) => (
  <S.Footer>
    <div>{exampleProp}</div>
    <p>&copy; 2019</p>
  </S.Footer>
);

Footer.defaultProps = {};

Footer.props = {
  exampleProp: PropTypes.string
};

export default Footer;
