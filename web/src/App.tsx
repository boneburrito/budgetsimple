import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './state/store';

import Dashboard from './views/Dashboard';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Provider>
  );
}

export default App;
