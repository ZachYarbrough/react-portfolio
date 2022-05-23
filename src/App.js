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


import reploy0 from './assets/images/projects/1.png';
import reploy1 from './assets/images/reploy/1.png';
import weatherDashboard0 from './assets/images/projects/3.png';
import rnr0 from './assets/images/projects/1.png';
import lyricado0 from './assets/images/projects/4.png';
import lyricado1 from './assets/images/lyricado/1.png';
import taskinator0 from './assets/images/projects/5.png';
import cards0 from './assets/images/projects/0.png';
import cards1 from './assets/images/10kcards/2.png';
import cards2 from './assets/images/10kcards/3.png';
import cards3 from './assets/images/10kcards/4.png';
import cards4 from './assets/images/10kcards/5.png';
import cards5 from './assets/images/10kcards/6.png';

function App() {

  const [projectSelected, setProjectSelected] = useState(false);
  const [topBtnVisible, setTopBtnVisible] = useState(false);
  const [breadcrumbState, setBreadcrumbState] = useState('Work');

  const currentProjects = [
    {
      name: '10K Cards',
      shortDescription: "Digital Busniess Cards for Professionals",
      description: "Freelance work for the company 10k Cards. They wanted an edit form that is similar to their product so I recreated it with interactive inputs and I also integrated stripe payments. I built and deployed this app using AWS services (EC2, ACM, ELB, etc.)",
      website: 'http://54.90.58.65/',
      platform: ['Web'],
      images: [
        cards0,
        cards1,
        cards2,
        cards3,
        cards4,
        cards5
      ],
      stack: ['React', 'MUI', 'ExpressJS', 'NodeJS', 'Stripe', 'Multer', 'AWS' ]
    },
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
      name: 'Relief and Rotation',
      shortDescription: "A relief scheduling application",
      description: "A calendar that makes it easy for employees to keep track of employee's schedules and relief requests.",
      website: 'https://www.reliefandrotations.com',
      source: 'https://github.com/itorres60/Project_III',
      platform: ['Web'],
      images: [
        rnr0
      ],
      stack: ['React', 'MongoDB', 'GraphQL', 'Express']
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
    },
    {
      name: 'Lyricado',
      shortDescription: "A music lyric quiz",
      description: "An application that utilizes the MusixMatch and Giphy APIs to quiz the user on how well they can guess the genre of a song based on a lyric snippet.",
      website: 'https://zachyarbrough.github.io/music-lyric-quiz/index.html',
      source: 'https://github.com/ZachYarbrough/music-lyric-quiz',
      platform: ['Web'],
      images: [
        lyricado0,
        lyricado1
      ],
      stack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Taskinator',
      shortDescription: "A kanban styled task manager",
      description: "A kanban styled to do list that utilizes javascript and local storage to store information.",
      website: 'https://zachyarbrough.github.io/taskinator/',
      source: 'https://github.com/ZachYarbrough/taskinator',
      platform: ['Web'],
      images: [
        taskinator0
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
    } else if (dropdown.classList.contains('show') && !event.target.classList.contains('is-dropdown')) {
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
