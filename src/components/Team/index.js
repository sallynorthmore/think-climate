import React from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import * as S from './styles';

// Markdown => html converter
const converter = new showdown.Converter();

const Team = ({ profiles }) => (
  <S.Team>
    <h2>Our team</h2>
    <S.Profiles>
      {profiles.map((profile, i) => {
        const anchor = profile.name
          .toLowerCase()
          .split(' ')
          .join('-');
        console.log(anchor);
        return (
          <S.Profile
            key={profile.name}
            isImageRight={i % 2 !== 0}
            id={`${anchor}`}
          >
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

              {profile.book && (
                <p>
                  <strong>Read:</strong>{' '}
                  <a href={profile.bookLink}>{profile.book}</a>
                </p>
              )}
              {profile.film && (
                <p>
                  <strong>Watch:</strong>{' '}
                  <a href={profile.filmLink}>{profile.film}</a>
                </p>
              )}
            </S.Bio>
          </S.Profile>
        );
      })}
    </S.Profiles>
  </S.Team>
);

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
