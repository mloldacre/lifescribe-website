import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

describe('Contact Component', () => {
  //smoke test
  it('renders Contact component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
