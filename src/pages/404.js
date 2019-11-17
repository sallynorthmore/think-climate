import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';

const NotFoundPage = () => (
  <Layout>
    <NotFound>
      <h2>Page not found</h2>
      <p>You just hit a route that doesn&#39;t exist... </p>
      <p>
        <Link to="/">Return home</Link>
      </p>
    </NotFound>
  </Layout>
);

export default NotFoundPage;
