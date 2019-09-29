import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Event = ({ image, title, date, time, children, location }) => (
  <S.Event>
    {image && <div className="image">{image}</div>}
    <h3 className="title">{title}</h3>
    <p className="date">{date}</p>
    <p className="time">{time}</p>
    {location && <p className="location">{location}</p>}
    {children && <div className="body">{children}</div>}
  </S.Event>
);

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
