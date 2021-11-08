import 'halfmoon/css/halfmoon-variables.min.css';
import './App.css';
import React, { useState, useRef } from 'react';
import StickyAlerts from './components/StickyAlerts';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Project from './components/Project';
import Header from './components/Header';
import Resume from './components/Resume';
import About from './components/About';
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';
import { useEffect } from 'react/cjs/react.development';

function App() {

  const [workSelected, setWorkSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [topBtnVisible, setTopBtnVisible] = useState(false);

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleVisible = () => {
    if (windowDimensions.height < document.querySelector('.content-wrapper').scrollHeight) {
      setTopBtnVisible(true);
    } else {
      setTopBtnVisible(false);
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [workSelected, resumeSelected, projectSelected]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('click', () => {
      setTopBtnVisible(false);
      handleVisible();
    });
    window.addEventListener('resize', () => {
      handleResize();
      handleVisible();
    });

    return () => {
      window.removeEventListener('resize', () => {
        handleResize();
        handleVisible();
      });
      window.removeEventListener('click', () => {
        setTopBtnVisible(false);
        handleVisible();
      });
    }
  }, []);

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
        <ScrollButton topBtnVisible={topBtnVisible} />
        <Footer />
        <div className='navbar-spacer'></div>
      </main>
    </div>
  );
}

export default App;
