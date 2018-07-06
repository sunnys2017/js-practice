import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('hi ddddddd');


  ReactDOM.unmountComponentAtNode(div);
});
