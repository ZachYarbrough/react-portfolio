import 'halfmoon/css/halfmoon-variables.min.css';
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  const [workSelected, setWorkSelected] = useState(false);

  return (
    <div className="page-wrapper with-navbar">
      <Navbar workSelected={workSelected} setWorkSelected={setWorkSelected} />
      <main className='content-wrapper ml-20 mr-20'>
        {!workSelected ? (
          <About workSelected={workSelected} setWorkSelected={setWorkSelected} />
        ) : (
          <Work />
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;
