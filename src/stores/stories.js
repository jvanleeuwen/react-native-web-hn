// @flow
import { action, extendObservable } from 'mobx';

import type { Stories } from './../types';

type Data = {
  isLoading: boolean,
  stories: Stories,
};

class StoryStore {
  constructor({ stories = [], isLoading = false }: Data) {
    extendObservable(this, {
      stories,
      isLoading,
      refresh: function() {
        fetch('http://localhost:3001/stories')
          .then(response => response.json())
          .then(action(stories => (this.stories = stories)));
      },
    });
  }
}

export default StoryStore;
