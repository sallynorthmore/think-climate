import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import VideoHero from '../VideoHero';
import Content from '../Content';
import * as S from './styles';

const EventPage = ({
  content,
  contentComponent,
  title,
  location,
  date,
  time,
  ticketsLink,
  heroImage,
  heroVideo
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Layout>
      <S.EventPage>
        <VideoHero
          video={heroVideo}
          image={heroImage}
          isEvent
          headline={title}
        ></VideoHero>
        <S.Main>
          <S.Content>
            <PostContent content={content} />
          </S.Content>

          <S.Aside>
            <Content>
              <h2>Event details</h2>
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
          {/* tags && tags.length ? (
          <div>
            <h4>Tags</h4>
            <ul>
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
              ) : null */}
        </S.Main>
      </S.EventPage>
    </Layout>
  );
};

EventPage.defaultProps = {};

EventPage.props = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

export default EventPage;
