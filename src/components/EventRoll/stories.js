import React from 'react';
import { storiesOf } from '@storybook/react';
import EventRoll from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|EventRoll', module);

stories.add('default', () => <EventRoll {...storyProps} />);
