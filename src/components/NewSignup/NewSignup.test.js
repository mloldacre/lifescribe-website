import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import NewSignup from './NewSignup';

describe('New Signup Component', () => {
  //smoke test
  it('renders New Signup component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewSignup />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
