import React from 'react';

import type { Decorator } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../../src/store/store';

const Base: Decorator = (Story) => {
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

export default Base;
