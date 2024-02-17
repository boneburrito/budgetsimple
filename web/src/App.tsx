import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './state/store';
import { requestGet } from 'utils/request';

import Dashboard from './views/Dashboard';
import Patterns from './views/Patterns';
import Transactions from './views/Transactions';

import './App.css';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    requestGet('users/me/').catch(() => {
      navigate('/login');
    });
  }, [navigate]);

  return (
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/patterns" element={<Patterns />} />
      </Routes>
    </Provider>
  );
}

export default App;
