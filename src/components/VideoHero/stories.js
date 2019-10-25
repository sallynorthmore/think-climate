import * as React from 'react';
import { storiesOf } from '@storybook/react';
import VideoHero from './index';

const storyProps = {
  headline: 'VideoHero headline text',
  smallText: 'The fine print'
};

const stories = storiesOf('Components|VideoHero', module);

stories.add('default', () => <VideoHero {...storyProps} />);
