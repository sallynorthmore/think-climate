import React from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import * as S from './styles';

// Markdown => html converter
const converter = new showdown.Converter();

const Team = ({ profiles }) => (
  <S.Team>
    <h2>Our Team</h2>
    {profiles.map((profile, i) => (
      <S.TeamMate isImageRight={i % 2 !== 0}>
        <S.Image>
          {profile.image && (
            <PreviewCompatibleImage
              className="eventImage"
              imageInfo={{
                image: profile.image,
                alt: `Profile image of ${profile.name}`
              }}
            />
          )}
        </S.Image>
        <S.Bio isImageRight={i % 2 !== 0}>
          <h3>{profile.name}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(profile.description)
            }}
          ></div>
          {profile.pledge && (
            <div>
              <h4>My pledge</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(profile.pledge)
                }}
              ></div>
            </div>
          )}

          <p>
            {profile.book && (
              <div>
                <strong>Read:</strong>{' '}
                <a href={profile.bookLink}>{profile.book}</a>
              </div>
            )}
            {profile.film && (
              <div>
                <strong>Watch:</strong>{' '}
                <a href={profile.filmLink}>{profile.film}</a>
              </div>
            )}
          </p>
        </S.Bio>
      </S.TeamMate>
    ))}
  </S.Team>
);

Team.defaultProps = {};

Team.props = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      book: PropTypes.string,
      bookLink: PropTypes.string,
      film: PropTypes.string,
      filmLink: PropTypes.string,
      pledge: PropTypes.string
    })
  )
};

export default Team;
