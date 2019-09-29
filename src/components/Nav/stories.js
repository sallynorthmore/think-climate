import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from './index';

// const storyProps = {};

const stories = storiesOf('Components|Nav', module);

stories.add('default', () => <Nav />);
