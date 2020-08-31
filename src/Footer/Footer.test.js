import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  //smoke test
  it('renders Footer component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
