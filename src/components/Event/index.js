import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Content from '../Content/';
import * as S from './styles';

const Event = ({ image, title, date, time, children, location }) => {
  console.log(`image`, image);
  return (
    <S.Event>
      {image && (
        <S.Image className="image">
          <Img
            className="eventImage"
            alt={image}
            fluid={image.childImageSharp.fluid}
          />
        </S.Image>
      )}
      <S.Content>
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
          {date && <div className="date">{date}</div>}
          {time && <div className="time">{time}</div>}
          {location && <div className="location">{location}</div>}
        </S.Footer>
      </S.Content>
    </S.Event>
  );
};

Event.defaultProps = {};

Event.props = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  children: PropTypes.node
};

export default Event;
