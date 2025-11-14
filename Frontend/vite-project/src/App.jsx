import { ToastContainer } from 'react-toastify';
import './App.css';
import React from 'react';

import Register from './Pages/register';
// import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App; // Export App as the default