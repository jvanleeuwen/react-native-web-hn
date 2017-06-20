// @flow
import React from 'react';
import { AppRegistry } from 'react-native';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './containers/App';
import { rehydrate } from './stores';

const initialData = process.env.NODE_ENV === 'development'
  ? JSON.stringify({ ui: {}, stories: {} })
  : document.getElementById('data').innerText;

const store = rehydrate(initialData);

const AppContainer = () => (
  <Provider {...store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

AppRegistry.registerComponent('App', () => AppContainer);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
