import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={(
          <RequireAuth>
            <Home />
          </RequireAuth>
        )} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
