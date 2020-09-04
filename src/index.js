import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";
import { ScribesProvider } from './contexts/ScribeCalendarContext';





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScribesProvider>
      <App />
    </ScribesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

