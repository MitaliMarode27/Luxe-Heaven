import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App.jsx';
import UserProvider from '../UserContext.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
        <ToastContainer/>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
   ,
)
