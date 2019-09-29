import React from 'react';
import { storiesOf } from '@storybook/react';
import Subscribe from './index';

const storyProps = {
  exampleProp: 'The footer print'
};

const stories = storiesOf('Components|Subscribe', module);

stories.add('default', () => <Subscribe {...storyProps} />);
