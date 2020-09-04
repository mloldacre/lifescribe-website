import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Landing from './Landing';

describe('Landing Component', () => {
  //smoke test
  it('renders Landing component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
