import React from 'react';
import ReactDOM from 'react-dom';
import Hotels from './hotelsls';

it('Hotels renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hotels />, div);
  ReactDOM.unmountComponentAtNode(div);
});
