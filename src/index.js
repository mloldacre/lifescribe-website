import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";
import { ScribesCalendarProvider } from './contexts/ScribeCalendarContext';
import { ScribeProvider } from './contexts/ScribeContext';
import { UserProvider } from './contexts/UserContext';





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScribesCalendarProvider>
        <ScribeProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ScribeProvider>
      </ScribesCalendarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

