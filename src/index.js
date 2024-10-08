import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './frontend/App';
import reportWebVitals from './frontend/reportWebVitals';

import axios from 'axios';
import {AuthProvider} from "./frontend/components/auth/AuthContext";

// Set the base URL for Axios
axios.defaults.baseURL = 'http://localhost:5000'; // Change this to your backend's base URL


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


