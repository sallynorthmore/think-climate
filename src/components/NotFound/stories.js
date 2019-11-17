import React from 'react';
import { storiesOf } from '@storybook/react';
import NotFound from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|NotFound', module);

stories.add('default', () => <NotFound {...storyProps} />);
