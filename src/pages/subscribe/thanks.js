import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import * as S from '../../components/ContactPage/styles.js';

export default () => (
  <Layout noSubscribe>
    <Hero isSmall headline="Subscribe"></Hero>
    <S.Main>
      <Content>
        <h2>Thank you for subscribing!</h2>
      </Content>
    </S.Main>
  </Layout>
);
