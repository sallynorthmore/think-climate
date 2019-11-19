import React from 'react';
import SubscribeForm from '../SubscribeForm';
import * as S from './styles';

const Subscribe = () => (
  <S.Subscribe id="subscribe">
    <h2>Subscribe</h2>
    <p>Sign up to receive email updates on upcoming events</p>
    <SubscribeForm />
  </S.Subscribe>
);

export default Subscribe;
