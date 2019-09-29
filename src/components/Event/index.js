import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content/';
import * as S from './styles';

const Event = ({ image, title, date, time, children, location }) => (
  <S.Event>
    {image && <div className="image">{image}</div>}
    <h3 className="title">{title}</h3>

    {children && (
      <div className="body">
        <Content>{children}</Content>
      </div>
    )}
    <ul className="footer">
      {date && <li className="date">{date}</li>}
      {time && <li className="time">{time}</li>}
      {location && <li className="location">{location}</li>}
    </ul>
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
