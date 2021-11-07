import 'halfmoon/css/halfmoon-variables.min.css';
import './App.css';
import React, { useState } from 'react';
import halfmoon from 'halfmoon';
import About from './components/About';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  const [workSelected, setWorkSelected] = useState(false);

  const toastAlert = () => {
    let alertContent = "You have successfully downloaded my resume.";

    halfmoon.initStickyAlert({
      title: "Resume Downloaded",
      content: alertContent
    })
  }

  return (
    <div className="page-wrapper with-navbar">
      <div class="sticky-alerts">
        
      </div>
      <Navbar workSelected={workSelected} setWorkSelected={setWorkSelected} />
      <main className='content-wrapper'>

        {workSelected ? (
          <Work />
        ) : (
          <About workSelected={workSelected} setWorkSelected={setWorkSelected} toastAlert={toastAlert} />
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;
