import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import CurrentScribeEntry from './CurrentScribeEntry';

describe('Current Scribe Entry Component', () => {
  //smoke test
  it('renders App component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentScribeEntry />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
