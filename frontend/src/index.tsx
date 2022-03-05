import { Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { getProvider } from './utils/provider';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from "./screens/Dashboard";

// import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getProvider}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/dashboard"  element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


