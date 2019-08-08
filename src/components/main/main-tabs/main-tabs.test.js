import React from 'react';
import ReactDOM from 'react-dom';
import MainTabs from './main-tabs';

it('MainTabs renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainTabs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
