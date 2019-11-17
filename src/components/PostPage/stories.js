import React from 'react';
import { storiesOf } from '@storybook/react';
import PostPage from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|PostPage', module);

stories.add('default', () => <PostPage {...storyProps} />);
