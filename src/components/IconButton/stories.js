import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|IconButton', module);

stories.add('default', () => <IconButton {...storyProps} />);
