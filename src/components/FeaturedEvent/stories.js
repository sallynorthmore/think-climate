import React from 'react';
import { storiesOf } from '@storybook/react';
import FeaturedEvent from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|FeaturedEvent', module);

stories.add('default', () => <FeaturedEvent {...storyProps} />);
