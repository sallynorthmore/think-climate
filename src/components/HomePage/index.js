import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/index.js';
import ParralaxHero from '../ParralaxHero';
import SEO from '../SEO';
import EventRoll from '../EventRoll';
import * as S from './styles';

const HomePage = ({ title, hero }) => (
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
    </Layout>
  </S.HomePage>
);

HomePage.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.shape({
    background: PropTypes.string,
    title: PropTypes.string,
    smallText: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  })
};

export default HomePage;
