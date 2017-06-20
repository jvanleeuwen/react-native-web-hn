import path from 'path';
import fs from 'fs';
import express from 'express';
import compression from 'compression';
import React from 'react';
import { AppRegistry } from 'react-native-web';
import { StaticRouter } from 'react-router';
import { Provider, useStaticRendering } from 'mobx-react';
import { renderToString } from 'react-dom/server';

import { run, getData } from './daemon';

import App from './../src/containers/App';
import initStore, { dehydrate } from './../src/stores';

run();

useStaticRendering(true);

const app = express();

const AppContainer = ({ store, url }) => {
  return (
    <Provider {...store}>
      <StaticRouter context={{}} location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );
};

AppRegistry.registerComponent('App', () => AppContainer);

app.use(compression());

app.get('/', (req: Request, res: Response): void => {
  fs.readFile(
    path.join(__dirname, '..', 'build', 'index.html'),
    'utf8',
    (err, html) => {
      const initialData = { ui: {}, stories: { stories: getData() } };
      const store = initStore(initialData);

      const { element, stylesheet } = AppRegistry.getApplication('App', {
        initialProps: {
          url: req.url,
          store,
        },
      });

      const rendered = renderToString(element);

      const content = html
        .replace('{{app}}', rendered)
        .replace('{{css}}', stylesheet)
        .replace('{{data}}', dehydrate(store));

      res.send(content);
    }
  );
});

app.get('/stories', (req: Request, res: Response): void => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(getData());
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(3001, function(): void {
  console.log('App listening on port 3001!');
});
