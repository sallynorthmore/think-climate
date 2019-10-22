import React from 'react';
import { storiesOf } from '@storybook/react';
import BlogRoll from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|BlogRoll', module);

stories.add('default', () => <BlogRoll {...storyProps} />);
