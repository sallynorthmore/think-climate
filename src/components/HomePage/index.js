import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from '../Layout/index.js';
import ParralaxHero from '../ParralaxHero';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import SEO from '../SEO';
// import EventRoll from '../EventRoll';
// import FeaturedEvent from '../FeaturedEvent';
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
          <S.Events>
            <S.MainEvent>
              <S.Post>
                <Link
                  to="/events/2019-11-20-think-climate/"
                  className="imageLink"
                >
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: 'img/event-hero.png',
                      alt: `Image of event`
                    }}
                  />
                </Link>
                <div className="content">
                  <div className="date">20 Nov 2018</div>
                  <h2 className="title">
                    <span>Event:</span> Think Climate
                  </h2>
                  <div className="speakers">
                    with Jeremy Waite (IBM iX), Dorothy Shaver (Unilever), and
                    Dr. Murray Simpson (IBM Global Lead)
                  </div>
                  <p>
                    On November 20th, we invite you to join us for an event
                    about climate change in association with Al Gore's Climate
                    Reality Project. For a full 24-hour period, Climate Reality
                    leaders around the world trained by former Vice President Al
                    Gore will hold public conversations and presentations.
                    Climate Change is the biggest crisis humanity has ever faced
                    but both its causes and solutions are complex.
                  </p>
                  <Link to="/events/2019-11-20-think-climate/" className="more">
                    More >
                  </Link>
                </div>
              </S.Post>
            </S.MainEvent>

            <S.EventAside>
              <S.Post>
                <Link to="/post/think-climate-agenda" className="imageLink">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: 'img/nasa-night.jpg',
                      alt: `NASA earth`
                    }}
                  />
                </Link>
                <div className="content">
                  <h2 className="title">
                    <span>Event Agenda</span>
                  </h2>
                  <p>Find out who is speaking on Nov 20.</p>
                  <Link to="/post/think-climate-agenda" className="more">
                    More >
                  </Link>
                </div>
              </S.Post>
            </S.EventAside>

            <S.EventAside>
              <S.Post>
                <Link to="/post/think-climate-notes/" className="imageLink">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: 'img/simon-wilkes-unsplash.jpg',
                      alt: `Image of event`
                    }}
                  />
                </Link>
                <div className="content">
                  <h2 className="title">Notes on the talk</h2>
                  <p>
                    Did you attend our talk? Get more info on topics covered.
                  </p>
                  <Link to="/post/think-climate-notes/" className="more">
                    More >
                  </Link>
                </div>
              </S.Post>
            </S.EventAside>
          </S.Events>
        </S.Main>
        <S.Team id="team">
          <S.Title>The team</S.Title>
          <p>
            We are a team of volunteers who are passionate about the planet.{' '}
            <Link to="/about">Get to know us.</Link>
          </p>
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
