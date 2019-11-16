import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/index.js';
import ParralaxHero from '../ParralaxHero';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import SEO from '../SEO';
import EventRoll from '../EventRoll';
import FeaturedEvent from '../FeaturedEvent';
import * as S from './styles';

const HomePage = ({ hero, profiles, events }) => {
  const featuredEvent = events[0].node;
  console.log('featuredEvent', featuredEvent);
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
          <h2>Coming up</h2>
          <FeaturedEvent
            content={featuredEvent.html}
            link={featuredEvent.fields.slug}
            title={featuredEvent.frontmatter.title}
            date={featuredEvent.frontmatter.date}
            location={featuredEvent.frontmatter.location}
            eventTime={featuredEvent.frontmatter.eventTime}
            eventDate={featuredEvent.frontmatter.eventDate}
            description={featuredEvent.frontmatter.description}
            featuredImage={featuredEvent.frontmatter.featuredImage}
            ticketsLink={featuredEvent.frontmatter.ticketsLink}
          />
        </S.Main>
        <S.Team id="team">
          <S.Title>The team</S.Title>
          <S.Profiles>
            {profiles &&
              profiles.map(profile => (
                <li key={profile.name}>
                  <a
                    href={`/about#${profile.name
                      .toLowerCase()
                      .split(' ')
                      .join('-')}`}
                    className="image"
                  >
                    {profile.image && (
                      <PreviewCompatibleImage
                        className="eventImage"
                        imageInfo={{
                          image: profile.image,
                          alt: `Image of ${profile.name}`
                        }}
                      />
                    )}
                  </a>
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
