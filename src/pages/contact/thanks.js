import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import * as S from '../../components/Contact/Contact.styles.js';

export default () => (
  <Layout>
    <Hero isEvent headline="Contact us"></Hero>
    <S.Main>
      <Content>
        <h2>Thank you for your message.</h2>
        <p> We will endeavour to respond to you promptly.</p>
      </Content>
    </S.Main>
  </Layout>
);
