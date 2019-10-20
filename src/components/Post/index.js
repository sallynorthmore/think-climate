import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Post = ({
  image,
  title,
  children,
  isImageRight,
  date,
  time,
  location
}) => (
  <S.Post>
    {image && (
      <S.Image className="image">
        <Img
          className="eventImage"
          alt={title}
          fluid={image.childImageSharp.fluid}
        />
      </S.Image>
    )}
    <S.Content isImageRight={isImageRight}>
      <h3 className="title">{title}</h3>
      {children && (
        <Content>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: children }}
          ></div>
        </Content>
      )}
      <S.Footer className="footer">
        {date && <li>{date}</li>}
        {time && <li>{time}</li>}
        {location && <li>{location}</li>}
      </S.Footer>
    </S.Content>
  </S.Post>
);

Post.defaultProps = {};

Post.props = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  children: PropTypes.node
};

export default Post;
