import React from 'react';
import { storiesOf } from '@storybook/react';
import EventsPage from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|EventsPage', module);

stories.add('default', () => <EventsPage {...storyProps} />);
