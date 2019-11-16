import React from 'react';
import Layout from '../../components/Layout';
import EventRoll from '../../components/EventRoll';

export default class EventIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Events</h1>

        <section className="section">
          <EventRoll />
        </section>
      </Layout>
    );
  }
}
