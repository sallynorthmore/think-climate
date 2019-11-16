import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';
import * as S from './styles';

const SideNav = ({ onCloseClick }) => (
  <S.SideNav>
    <S.Button onClick={onCloseClick}>X</S.Button>
    <S.Content>
      <Nav />
    </S.Content>
  </S.SideNav>
);

SideNav.defaultProps = {};

SideNav.props = {
  onCloseClick: PropTypes.func
};

export default SideNav;
