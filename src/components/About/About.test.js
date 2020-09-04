import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import About from './About';

describe('About Component', () => {
  //smoke test
  it('renders About component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
