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


import reploy0 from './assets/images/reploy/0.png';
import reploy1 from './assets/images/reploy/1.png';
import weatherDashboard0 from './assets/images/weather-dashboard/0.png';

function App() {

  const [workSelected, setWorkSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [topBtnVisible, setTopBtnVisible] = useState(false);
  const [breadcrumbState, setBreadcrumbState] = useState('Work');

  const currentProjects = [
    {
      name: 'Reploy',
      shortDescription: "A job application tracker",
      description: "A job application tracker that stores the user's applications in a database",
      website: 'https://reploy.herokuapp.com',
      source: 'https://github.com/abjj1999/Job-Tracker',
      platform: ['Web'],
      images: [
        reploy0,
        reploy1
      ],
      stack: ['Handlebars', 'MySQL', 'ExpressJS', 'NodeJS']
    },
    {
      name: 'Weather Dashboard',
      shortDescription: "A weather tracker that forecasts the next 5 days",
      description: "An application that utilizes the Open Weather API to fetch the weather for the next 5 days based on location.",
      website: 'https://zachyarbrough.github.io/weather-dashboard/',
      source: 'https://github.com/ZachYarbrough/weather-dashboard',
      platform: ['Web'],
      images: [
        weatherDashboard0
      ],
      stack: ['HTML', 'CSS', 'JavaScript']
    }
  ]

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
          <Project projectSelected={projectSelected} setProjectSelected={setProjectSelected} setResumeSelected={setResumeSelected} setWorkSelected={setWorkSelected} breadcrumbState={breadcrumbState} />
        ) : (
          workSelected ? (
            <Work projectSelected={projectSelected} setProjectSelected={setProjectSelected} currentProjects={currentProjects} setBreadcrumbState={setBreadcrumbState}/>
          ) : (
            resumeSelected ? (
              <div>
                <Header />
                <Resume resumeSelected={resumeSelected} setResumeSelected={setResumeSelected} setProjectSelected={setProjectSelected} currentProjects={currentProjects} setBreadcrumbState={setBreadcrumbState} />
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
