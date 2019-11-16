import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Content from '../Content';

const FeaturedEvent = ({
  link,
  title,
  location,
  content,
  date,
  time,
  ticketsLink
}) => {
  return (
    <S.FeaturedEvent>
      <h3>{title}</h3>
      {link && link}
      <Content content={content} />
      <S.Aside>
        <Content>
          <h2>Details</h2>
          {location && (
            <p>
              <strong>Location</strong>: {location}
            </p>
          )}
          {date && (
            <p>
              <strong>Date</strong>: {date}
            </p>
          )}
          {time && (
            <p>
              <strong>Time</strong>: {time}
            </p>
          )}
          {ticketsLink && (
            <p>
              <strong>Tickets</strong>:{' '}
              <a href={ticketsLink} target="_blank">
                Get tickets
              </a>
            </p>
          )}
        </Content>
      </S.Aside>
    </S.FeaturedEvent>
  );
};

FeaturedEvent.defaultProps = {};

FeaturedEvent.props = {
  exampleProp: PropTypes.string
};

export default FeaturedEvent;
