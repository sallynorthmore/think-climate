import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import Content from '../Content';
import * as S from './styles';

const NotFound = ({ children, title }) => (
  <S.NotFound>
    <Hero headline="404" isSmall />
    <main>
      <Content>{children}</Content>
    </main>
  </S.NotFound>
);

NotFound.defaultProps = {};

NotFound.props = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default NotFound;
