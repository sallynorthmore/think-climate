import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const IconButton = ({ onClick, isActive }) => (
  <S.IconButton onClick={onClick} type="button">
    <S.Icon isActive={isActive}>
      <span className="top" />
      <span className="middle" />
      <span className="bottom" />
    </S.Icon>
  </S.IconButton>
);

IconButton.defaultProps = {};

IconButton.props = {
  icon: PropTypes.node
};

export default IconButton;
