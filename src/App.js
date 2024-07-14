import 'halfmoon/css/halfmoon-variables.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import StickyAlerts from './components/StickyAlerts';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';

import Resume from './pages/Resume';
import About from './pages/About';
import Project from './pages/Project';
import Work from './pages/Work';
import NoMatch from './pages/NoMatch';


import reploy1 from './assets/images/reploy/1.png';
import reploy2 from './assets/images/reploy/2.png';
import weatherDashboard1 from './assets/images/weatherDashboard/1.png';
import cards1 from './assets/images/10kcards/1.png';
import cards2 from './assets/images/10kcards/2.png';
import cards3 from './assets/images/10kcards/3.png';
import cards4 from './assets/images/10kcards/4.png';
import cards5 from './assets/images/10kcards/5.png';
import cards6 from './assets/images/10kcards/6.png';

function App() {

  const [projectSelected, setProjectSelected] = useState(false);
  const [topBtnVisible, setTopBtnVisible] = useState(false);
  const [breadcrumbState, setBreadcrumbState] = useState('Work');

  const currentProjects = [
    {
      name: '10K Cards',
      link: '10kcards',
      shortDescription: "Digital Busniess Cards for Professionals",
      description: "Freelance work for the company 10k Cards. They wanted an edit form that is similar to their product so I recreated it with interactive inputs and I also integrated stripe payments and a checkout.",
      website: 'https://10k-cards.vercel.app',
      source: 'https://github.com/ZachYarbrough/10k-cards',
      isDemo: true,
      platform: ['Web'],
      images: [
        cards1,
        cards2,
        cards3,
        cards4,
        cards5,
        cards6
      ],
      stack: ['React', 'MUI', 'ExpressJS', 'NodeJS', 'Stripe', 'Multer' ]
    },
    {
      name: 'Reploy',
      link: 'reploy',
      shortDescription: "A job application tracker",
      description: "A job application tracker that stores the user's applications in a database",
      website: 'https://reploy.herokuapp.com',
      source: 'https://github.com/abjj1999/Job-Tracker',
      platform: ['Web'],
      images: [
        reploy1,
        reploy2
      ],
      stack: ['Handlebars', 'MySQL', 'ExpressJS', 'NodeJS']
    },
    {
      name: 'Weather Dashboard',
      link: 'weatherDashboard',
      shortDescription: "A weather tracker that forecasts the next 5 days",
      description: "An application that utilizes the Open Weather API to fetch the weather for the next 5 days based on location.",
      website: 'https://zachyarbrough.github.io/weather-dashboard/',
      source: 'https://github.com/ZachYarbrough/weather-dashboard',
      platform: ['Web'],
      images: [
        weatherDashboard1
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

    const dropdown = document.querySelector('.dropdown');

    if (window.innerWidth > 576 && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }

  const handleDropDown = (event) => {
    const dropdownBtn = document.querySelector('[data-toggle=dropdown]');
    const dropdown = document.querySelector('.dropdown');
    if (event.target === dropdownBtn || event.target === dropdown || event.target.classList.contains('fa-bars')) {
      dropdown.classList.toggle('show');
    } else if (dropdown.classList.contains('show')) {
      dropdown.classList.toggle('show');
    }
  }

  useEffect(() => {
    console.log(breadcrumbState);
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('click', () => {
      setTopBtnVisible(false);
      handleVisible();
    });

    window.addEventListener('scroll', () => {
      handleVisible();
    });

    window.addEventListener('resize', () => {
      handleResize();
      handleVisible();
    });

    return () => {
      window.removeEventListener('click', () => {
        setTopBtnVisible(false);
        handleVisible();
      });

      window.removeEventListener('scroll', () => {
        handleVisible();
      });

      window.removeEventListener('resize', () => {
        handleResize();
        handleVisible();
      });
    }
  }, []);

  return (
    <div className="page-wrapper with-navbar">
      <StickyAlerts />
      <Navbar handleDropDown={handleDropDown} />
      <main className='content-wrapper'>
        <Routes>
          <Route index element={
            <div>
              <Header />
              <About />
            </div>
          } />
          <Route path='/work' element={
            <Work projectSelected={projectSelected} setProjectSelected={setProjectSelected} currentProjects={currentProjects} setBreadcrumbState={setBreadcrumbState} />
          } />
          <Route path={`/${breadcrumbState}/:project`} element={
            <Project projectSelected={projectSelected} setProjectSelected={setProjectSelected} currentProjects={currentProjects} breadcrumbState={breadcrumbState} />
          } />
          <Route path={`/resume`} element={
            <div>
              <Header />
              <Resume setProjectSelected={setProjectSelected} currentProjects={currentProjects} setBreadcrumbState={setBreadcrumbState} />
            </div>
          } />

          <Route path='*' element={<NoMatch />} />
        </Routes>
        <ScrollButton topBtnVisible={topBtnVisible} />
        <Footer />
        <div className='navbar-spacer'></div>
      </main>
    </div>
  );
}

export default App;
