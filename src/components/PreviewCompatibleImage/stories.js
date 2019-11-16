import React from 'react';
import { storiesOf } from '@storybook/react';
import PreviewCompatibleImage from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|PreviewCompatibleImage', module);

stories.add('default', () => <PreviewCompatibleImage {...storyProps} />);
