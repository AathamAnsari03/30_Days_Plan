import './App.css';
import Login from './login';
import Signup from './signup';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
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
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

      </Routes>
    </div>
  );
}

export default App;
