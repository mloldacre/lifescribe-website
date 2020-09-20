import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import BackButton from './BackButton';

describe('BackButton Component', () => {
  //smoke test
  it('renders BackButton component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BackButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
