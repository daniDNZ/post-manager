import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<></>} />
        <Route path='/' element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
