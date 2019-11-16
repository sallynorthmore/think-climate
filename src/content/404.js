import React from 'react';
import { Link } from 'gatsby';
// import Layout from '../components/Layout';

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... </p>
    <p>
      <Link to="/">Return home</Link>
    </p>
  </div>
);

export default NotFoundPage;
