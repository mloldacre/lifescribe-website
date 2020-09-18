import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Registration from './Registration';

describe('New Signup Component', () => {
  //smoke test
  it('renders New Signup component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Registration />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
