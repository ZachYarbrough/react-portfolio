import React, { useState, useEffect } from 'react';
import halfmoon from 'halfmoon';

const Navbar = (props) => {

    const {
        workSelected,
        setWorkSelected
    } = props;

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
        <nav className='navbar justify-content-between'>
            <div className='navbar-content'>
                <a href='#' onClick={() => setWorkSelected(false)} className='navbar-brand'>Zach Yarbrough</a>
                <ul className='navbar-nav d-none d-md-flex'>
                    <li className={`nav-item ${workSelected && 'navActive'}`}>
                        <a href='#work' onClick={() => setWorkSelected(true)} className='nav-link'>Work</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Contact</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
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

            <div className="navbar-content d-md-none">
                <div className="dropdown">
                    <button className="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right w-200 z-50" aria-labelledby="navbar-dropdown-toggle-btn-1">
                        <a href="#" onClick={() => setWorkSelected(false)} className="dropdown-item is-dropdown">About</a>
                        <a href="#work" onClick={() => setWorkSelected(true)} className="dropdown-item is-dropdown">Work</a>
                        <a href="#" className="dropdown-item is-dropdown">Contact</a>
                        <a href="#" className="dropdown-item is-dropdown">
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