// @flow
import { toJS, useStrict } from 'mobx';

import UIStore from './ui';
import StoryStore from './stories';

import type { Store } from './../types';

useStrict(true);

function initStore(data: Store = {}): Object {
  return {
    ui: new UIStore(data.ui),
    stories: new StoryStore(data.stories),
  };
}

function dehydrate(store: Store): string {
  return JSON.stringify(toJS(store));
}

function rehydrate(data: string): Object {
  return initStore(JSON.parse(data));
}

export { initStore as default, dehydrate, rehydrate };
