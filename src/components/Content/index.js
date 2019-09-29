import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Content = ({ children }) => <S.Content>{children}</S.Content>;

Content.props = {
  children: PropTypes.node
};

export default Content;
