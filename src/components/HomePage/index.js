import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/index.js';
import ParralaxHero from '../ParralaxHero';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import SEO from '../SEO';
import EventRoll from '../EventRoll';
import * as S from './styles';

const HomePage = ({ hero, profiles }) => {
  return (
    <S.HomePage>
      <Layout>
        <SEO
          lang="en"
          title="THINK Climate"
          description="We can build a business, change the world and have fun."
        />
        <ParralaxHero
          headline={hero.title}
          smallText={hero.smalltext}
          image={hero.image}
        ></ParralaxHero>
        <S.Main role="main">
          <EventRoll />
          {/* <Link to="/blog">Read more</Link> */}
          {/* <Link to="/contact">Contact us</Link> */}
        </S.Main>
        <S.Team id="team">
          <S.Title>The team</S.Title>
          <S.Profiles>
            {profiles &&
              profiles.map(profile => (
                <li key={profile.name}>
                  <div className="image">
                    {profile.image && (
                      <PreviewCompatibleImage
                        className="eventImage"
                        imageInfo={{
                          image: profile.image,
                          alt: `Image of ${profile.name}`
                        }}
                      />
                    )}
                  </div>
                </li>
              ))}
          </S.Profiles>
        </S.Team>
      </Layout>
    </S.HomePage>
  );
};

HomePage.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.shape({
    background: PropTypes.string,
    title: PropTypes.string,
    smallText: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
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

export default HomePage;
