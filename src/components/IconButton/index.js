import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const IconButton = ({ onClick, icon }) => (
  <S.IconButton onClick={onClick} type="button">
    <div>{icon}</div>
  </S.IconButton>
);

IconButton.defaultProps = {};

IconButton.props = {
  icon: PropTypes.node
};

export default IconButton;
