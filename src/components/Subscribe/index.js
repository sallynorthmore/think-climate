import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Subscribe = ({ exampleProp }) => (
  <S.Subscribe>
    <h2>Subscribe</h2>
    <p>
      Sign up{' '}
      <a
        href="https://forms.gle/CZp4VcJ5G8VW3wEC7"
        title="Register form"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>{' '}
      with your email address to receive news and updates.
    </p>
  </S.Subscribe>
);

Subscribe.defaultProps = {};

Subscribe.props = {
  exampleProp: PropTypes.string
};

export default Subscribe;
