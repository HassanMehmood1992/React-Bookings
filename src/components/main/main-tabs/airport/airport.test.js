import React from 'react';
import ReactDOM from 'react-dom';
import Airport from './airport';

it('Airport renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Airport />, div);
  ReactDOM.unmountComponentAtNode(div);
});
