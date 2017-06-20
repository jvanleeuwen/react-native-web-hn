// @flow
import { extendObservable } from 'mobx';

type Data = {
  ui: Object,
};

class UIStore {
  constructor(ui: Data = {}) {
    extendObservable(this, ui);
  }
}

export default UIStore;
