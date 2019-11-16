import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/index.js';
import Hero from '../Hero';
import Team from '../Team';
import * as S from './styles';

const AboutPage = ({
  title,
  // content,
  contentComponent,
  profiles
}) => {
  // const PageContent = contentComponent || Content;
  return (
    <Layout>
      <S.AboutPage>
        <Hero isEvent headline={title}></Hero>
        <S.Main>
          <Team profiles={profiles} />
        </S.Main>
      </S.AboutPage>
    </Layout>
  );
};

AboutPage.defaultProps = {};

AboutPage.props = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

export default AboutPage;
