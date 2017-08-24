import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from './createStore';

const store = createStore();

export default function Provider({ story }) {
  return (
    <ReduxProvider store={store}>
      {story()}
    </ReduxProvider>
  );
};
