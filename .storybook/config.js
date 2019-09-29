import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalTheme, GlobalStyle } from '../src/components/StyleGuide/global';

// Load stories from ./src/components/**/stories.js
const req = require.context('../src/components', true, /stories\.js$/);

addDecorator(storyFn => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
