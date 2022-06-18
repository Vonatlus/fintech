import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { FintechProvider } from './FintechContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <FintechProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FintechProvider>
  </Router>
);

