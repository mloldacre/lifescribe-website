import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import CurrentScribeReview from './CurrentScribeReview'

describe('Current Scribe Review Component', () => {
  //smoke test
  it('renders App component without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentScribeReview />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
