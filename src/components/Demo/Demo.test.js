import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Demo from './Demo';

describe('Demo Component', () => {
  //smoke test
  it('renders Demo component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demo />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
