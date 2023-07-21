import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CounterProvider } from './components/context/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterProvider>
       <App />
    </CounterProvider>
  </React.StrictMode>
);
