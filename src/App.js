import 'halfmoon/css/halfmoon-variables.min.css';
import './App.css'
import React, { useEffect } from 'react';
import halfmoon from 'halfmoon';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="page-wrapper with-navbar">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
