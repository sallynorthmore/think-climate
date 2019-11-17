import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export const HTMLContent = ({ content, className }) => (
  <S.Content
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content, className, children, isWide }) => (
  <S.Content className={className}>
    {content}
    {children}
  </S.Content>
);

Content.defaultProps = {};

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
