import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';
import * as S from './styles';

const SideNav = ({ isActive }) => (
  <S.SideNav isActive={isActive}>
    <S.Content>{isActive && <Nav isActive={isActive} />}</S.Content>
  </S.SideNav>
);

SideNav.defaultProps = {
  isActive: false
};

SideNav.props = {
  isActive: PropTypes.bool
};

export default SideNav;
