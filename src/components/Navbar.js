import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import halfmoon from 'halfmoon';

const Navbar = (props) => {

    const {
        handleDropDown,
        workSelected,
        setWorkSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        projectSelected,
        setProjectSelected
    } = props;

    const [darkModeBtn, setDarkModeBtn] = useState('');

    const handleDarkMode = () => {
        const darkModeBtnEl = document.querySelector('.dark-mode-icon');
        if (!darkModeBtnEl.classList.contains('fa-sun')) {
            setDarkModeBtn('fa-sun');
        } else {
            setDarkModeBtn('fa-moon');
        }
    }

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && darkModeBtn === '') {
            handleDarkMode();
            halfmoon.toggleDarkMode();
        }
        document.addEventListener("mousedown", handleDropDown);
        return () => {
            document.removeEventListener("mousedown", handleDropDown);
        };
    });

    return (
        <nav className='navbar'>
            <div className='navbar-content'>
                <a onClick={() => {
                    setWorkSelected(false);
                    setResumeSelected(false);
                    setProjectSelected(false);
                    setContactSelected(false);
                }} className='navbar-brand'>Zach Yarbrough</a>
                <ul className='navbar-nav d-none d-sm-flex'>
                    <Link to='/about' className={`nav-item ${(!workSelected && !resumeSelected && !projectSelected && !contactSelected) && 'navActive'}`}>
                            <a onClick={() => {
                                setWorkSelected(false);
                                setResumeSelected(false);
                                setProjectSelected(false);
                                setContactSelected(false);
                            }} className='nav-link'>
                                <span>About</span>
                            </a>
                    </Link>
                    <Link to='/work' className={`nav-item ${workSelected && 'navActive'}`}>
                        <a onClick={() => {
                            setWorkSelected(true);
                            setResumeSelected(false);
                            setProjectSelected(false);
                            setContactSelected(false);
                        }} className='nav-link'>
                            <span>Work</span>
                        </a>
                    </Link>
                    <Link to='/contact' className={`nav-item ${contactSelected && 'navActive'}`}>
                        <a onClick={() => {
                            setWorkSelected(false);
                            setResumeSelected(false);
                            setProjectSelected(false);
                            setContactSelected(true);
                        }} className='nav-link'>
                            <span>Contact</span>
                        </a>
                    </Link>
                    <Link to ='/resume' className={`nav-item ${resumeSelected && 'navActive'}`}>
                        <a onClick={() => {
                            setWorkSelected(false);
                            setResumeSelected(true);
                            setProjectSelected(false);
                            setContactSelected(false);
                        }} className='nav-link'>
                            <span>Resume</span>
                        </a>
                    </Link>
                    <li className='nav-item'>
                        <a href='https://github.com/ZachYarbrough/react-portfolio' target="_" className='nav-link'>
                            <i className='fa fa-code-fork mr-5' />
                            <span>Source</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='navbar-content ml-auto'>
                <button className='btn btn-square' type='button' onClick={() => {
                    handleDarkMode();
                    halfmoon.toggleDarkMode();
                }}>
                    <i className={`far ${darkModeBtn} dark-mode-icon`} aria-hidden="true" />
                    <span className="sr-only">Toggle dark mode</span>
                </button>
            </div>

            <div className="navbar-content d-sm-none">
                <div className="dropdown">
                    <button className=" btn btn-square" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1" aria-label="dropdown">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right w-200 z-50" aria-labelledby="navbar-dropdown-toggle-btn-1">
                        <a onClick={() => {
                            setWorkSelected(false);
                            setResumeSelected(false);
                            setProjectSelected(false);
                            setContactSelected(false);
                        }} className="dropdown-item is-dropdown">
                            <span className='is-dropdown'>About</span>
                        </a>
                        <a onClick={() => {
                            setWorkSelected(true);
                            setResumeSelected(false);
                            setProjectSelected(false);
                            setContactSelected(false);
                        }} className="dropdown-item is-dropdown">
                            <span className='is-dropdown'>Work</span>
                        </a>
                        <a onClick={() => {
                            setWorkSelected(false);
                            setResumeSelected(false);
                            setProjectSelected(false);
                            setContactSelected(true);
                        }} className="dropdown-item is-dropdown">
                            <span className='is-dropdown'>Contact</span>
                        </a>
                        <a onClick={() => {
                            setWorkSelected(false);
                            setResumeSelected(true);
                            setProjectSelected(false);
                            setContactSelected(false);
                        }} className="dropdown-item is-dropdown">
                            <span className='is-dropdown'>Resume</span>
                        </a>
                        <a href="https://github.com/ZachYarbrough/react-portfolio" target='_' className="dropdown-item is-dropdown">
                            <i className='fa fa-code-fork mr-5 is-dropdown' aria-hidden='true' />
                            <span className='is-dropdown'>Source</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;