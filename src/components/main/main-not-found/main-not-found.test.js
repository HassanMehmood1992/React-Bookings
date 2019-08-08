import React from 'react';
import ReactDOM from 'react-dom';
import MainNotFound from './main-not-found';

it('MainNotFound renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainNotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});
