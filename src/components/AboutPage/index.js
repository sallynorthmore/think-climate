import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/index.js';
import Hero from '../Hero';
import Content from '../Content';
import Team from '../Team';
import * as S from './styles';

const AboutPage = ({ title, content, contentComponent, profiles }) => {
  const PostContent = contentComponent || Content;
  return (
    <Layout>
      <S.AboutPage>
        <Hero isEvent headline={title}></Hero>
        <S.Main>
          <PostContent content={content} />
          <S.Team>
            <Team profiles={profiles} />
          </S.Team>
        </S.Main>
      </S.AboutPage>
    </Layout>
  );
};

AboutPage.defaultProps = {};

AboutPage.props = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
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

export default AboutPage;
