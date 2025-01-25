import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router';
import ContextProvider from './context/contex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
