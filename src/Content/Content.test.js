import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Content from './Content';

describe('Content Component', () => {
  //smoke test
  it('renders Content component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
