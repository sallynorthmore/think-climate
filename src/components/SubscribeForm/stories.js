import React from 'react';
import { storiesOf } from '@storybook/react';
import SubscribeForm from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|SubscribeForm', module);

stories.add('default', () => <SubscribeForm {...storyProps} />);
