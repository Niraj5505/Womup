import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Import Global Stylesheets
import '../styles.css';
import '../how-it-works.css';
import '../for-customers.css';
import '../for-vendors.css';
import '../shop-categories.css';
import '../income-opportunity.css';
import '../womup-mobile-app.css';
import '../contact.css';
import './ux-enhancements.css';
import './animations.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

