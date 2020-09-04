import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import LoginSignup from './LoginSignup';

describe('Login Signup Component', () => {
  //smoke test
  it('renders Login Signup component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginSignup />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
