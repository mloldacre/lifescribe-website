import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import DemoScribeReview from './DemoScribeReview';

describe('Demo Scribe Review Component', () => {
  //smoke test
  it('renders Demo Scribe Review component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoScribeReview />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
