import React, { useState, useEffect } from 'react';
import halfmoon from 'halfmoon';

const Navbar = (props) => {

    const {
        workSelected,
        setWorkSelected,
        resumeSelected,
        setResumeSelected,
        setProjectSelected
    } = props;

    const [darkModeBtn, setDarkModeBtn] = useState('');

    const handleDropDown = (event) => {
        const dropdownBtn = document.querySelector('[data-toggle=dropdown]');
        const dropdown = document.querySelector('.dropdown');
        if (event.target === dropdownBtn || event.target === dropdown || event.target.classList.contains('fa-bars')) {
            dropdownBtn.classList.toggle('active');
            dropdown.classList.toggle('show');
        } else if (dropdown.classList.contains('show') && !event.target.classList.contains('is-dropdown')) {
            dropdownBtn.classList.toggle('active');
            dropdown.classList.toggle('show');
        }
    }

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
                }} className='navbar-brand'>Zach Yarbrough</a>
                <ul className='navbar-nav d-none d-sm-flex'>
                    <li className={`nav-item ${workSelected && 'navActive'}`}>
                        <a onClick={() => {
                            setWorkSelected(true);
                            setResumeSelected(false);
                            setProjectSelected(false);
                        }} className='nav-link'>
                            <span>Work</span>
                        </a>
                    </li>
                    <li className={`nav-item ${resumeSelected && 'navActive'}`}>
                        <a onClick={() => {
                            setWorkSelected(false);
                            setResumeSelected(true);
                            setProjectSelected(false);
                        }} className='nav-link'>
                            <i className='far fa-file-text mr-5' />
                            <span>Resume</span>
                        </a>
                    </li>
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
                    <button className=" btn btn-square" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right w-200 z-50" aria-labelledby="navbar-dropdown-toggle-btn-1">
                        <a onClick={() => {
                            setWorkSelected(false);
                            setResumeSelected(false);
                            setProjectSelected(false);
                        }} className="dropdown-item is-dropdown">About</a>
                        <a onClick={() => {
                            setWorkSelected(true);
                            setResumeSelected(false);
                            setProjectSelected(false);
                        }} className="dropdown-item is-dropdown">Work</a>
                        <a onClick={() => {
                            setWorkSelected(false);
                            setResumeSelected(true);
                            setProjectSelected(false);
                        }} className="dropdown-item is-dropdown">
                            <i className='far fa-file-text mr-5 is-dropdown' aria-hidden='true' />
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