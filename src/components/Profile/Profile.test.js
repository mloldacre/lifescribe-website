import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

describe('Profile Component', () => {
  //smoke test
  it('renders Profile component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
