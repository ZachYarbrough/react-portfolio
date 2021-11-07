import 'halfmoon/css/halfmoon-variables.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import StickyAlerts from './components/StickyAlerts';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Project from './components/Project';
import Header from './components/Header';
import Resume from './components/Resume';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [workSelected, setWorkSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);

  return (
    <div className="page-wrapper with-navbar">
      <StickyAlerts />
      <Navbar workSelected={workSelected} setWorkSelected={setWorkSelected} resumeSelected={resumeSelected} setResumeSelected={setResumeSelected} projectSelected={projectSelected} setProjectSelected={setProjectSelected} />
      <main className='content-wrapper'>
        {projectSelected ? (
            <Project projectSelected={projectSelected} setProjectSelected={setProjectSelected} setWorkSelected={setWorkSelected} />
        ) : (
          workSelected ? (
            <Work projectSelected={projectSelected} setProjectSelected={setProjectSelected} />
          ) : (
            resumeSelected ? (
              <div>
                <Header />
                <Resume />
              </div>
            ) : (
              <div>
                <Header />
                <About workSelected={workSelected} setWorkSelected={setWorkSelected} />
              </div>
            )
          )
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;
