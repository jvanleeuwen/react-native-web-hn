import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Button from './../Button';

it('renders <Button />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
