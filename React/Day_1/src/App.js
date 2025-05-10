
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Greetings from './Greetings';
import VanakamCard from './VanakamCard';
import { StrictMode } from 'react';

function App() {
  return (
    <div className="App">
        <VanakamCard />
    </div>
  );
}

export default App;
