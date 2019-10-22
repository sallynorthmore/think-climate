import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export const HTMLContent = ({ content, className }) => (
  <S.Content
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.props = {
  children: PropTypes.node
};

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
