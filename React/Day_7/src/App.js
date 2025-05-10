import './App.css';
import Login from './login';
import Signup from './signup';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
