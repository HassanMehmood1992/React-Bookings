import React from 'react';
import ReactDOM from 'react-dom';
import Catering from './catering';

it('Catering renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Catering />, div);
  ReactDOM.unmountComponentAtNode(div);
});
