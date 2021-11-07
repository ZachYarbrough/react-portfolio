import 'halfmoon/css/halfmoon-variables.min.css';
import './App.css';
import React, { useState } from 'react';
import halfmoon from 'halfmoon';
import About from './components/About';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Footer from './components/Footer';
import StickyAlerts from './components/StickyAlerts';

function App() {
  const [workSelected, setWorkSelected] = useState(false);

  return (
    <div className="page-wrapper with-navbar">
      <StickyAlerts />
      <Navbar workSelected={workSelected} setWorkSelected={setWorkSelected} />
      <main className='content-wrapper'>

        {workSelected ? (
          <Work />
        ) : (
          <About workSelected={workSelected} setWorkSelected={setWorkSelected} />
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;
