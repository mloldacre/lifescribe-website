import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';

describe('Calendar Component', () => {
  //smoke test
  it('renders Calendar component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calendar />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
