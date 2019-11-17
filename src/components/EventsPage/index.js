import React from 'react';
// import PropTypes from 'prop-types';
import Layout from '../Layout';
import EventRoll from '../EventRoll';
import Hero from '../Hero';
import * as S from './styles';

const EventsPage = () => (
  <S.EventsPage>
    <Layout>
      <Hero isSmall headline="Events"></Hero>
      <S.Main>
        <EventRoll />
      </S.Main>
    </Layout>
  </S.EventsPage>
);

export default EventsPage;
