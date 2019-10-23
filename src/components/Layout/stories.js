import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|Layout', module);

stories.add('default', () => <Layout {...storyProps} />);
