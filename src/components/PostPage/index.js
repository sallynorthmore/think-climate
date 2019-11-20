import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/index.js';
import Hero from '../Hero';
import Content from '../Content';
import SEO from '../SEO';
import * as S from './styles';

const PostPage = ({ children, title, smallText }) => (
  <S.PostPage>
    <SEO description={title} />
    <Layout>
      <Hero isSmall headline={title}></Hero>
      <S.Main>
        <Content className="postPage" content={children} />
      </S.Main>
    </Layout>
  </S.PostPage>
);

PostPage.defaultProps = {};

PostPage.props = {
  exampleProp: PropTypes.string
};

export default PostPage;
