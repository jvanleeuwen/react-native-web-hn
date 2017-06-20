import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Article from './../Article';

it('renders <Article />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article />, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Article />).toJSON();
  expect(tree).toMatchSnapshot();
});
