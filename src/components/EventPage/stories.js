import React from 'react';
import { storiesOf } from '@storybook/react';
import EventPage from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|EventPage', module);

stories.add('default', () => <EventPage {...storyProps} />);
