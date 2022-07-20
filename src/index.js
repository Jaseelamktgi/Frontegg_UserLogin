import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-8rn3fg5u5ezh.frontegg.com',
  clientId: '9d8da0ad-a9e0-4b7c-ab85-658a8a16c674'
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
  <App />
  </FronteggProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
