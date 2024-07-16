import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import halfmoon from 'halfmoon';

const Navbar = (props) => {

    const {
        handleDropDown
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
        } else if (darkModeBtn === '') {
            setDarkModeBtn('fa-moon')
        }
    }, [])

    return (
        <nav className='navbar'>
            <div className='navbar-content'>
                <NavLink to='/' className='navbar-brand'>Zach Yarbrough</NavLink>
                <ul className='navbar-nav d-none d-sm-flex'>
                    <NavLink to='/' className='nav-item nav-link' activeClassName='navActive'>
                        <span>About</span>
                    </NavLink>
                    <NavLink to='/work' className='nav-item nav-link' activeClassName='navActive'>
                        <span>Work</span>
                    </NavLink>
                    <NavLink to='/resume' className='nav-item nav-link' activeClassName='navActive'>
                        <span>Resume</span>
                    </NavLink>
                    <li className='nav-item'>
                        <a href='https://github.com/ZachYarbrough/zachyarbrough.github.io' target="_" className='nav-link'>
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
                <div className='dropdown'>
                    <button className=" btn btn-square" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1" aria-label="dropdown" onClick={handleDropDown}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right w-200 z-50" aria-labelledby="navbar-dropdown-toggle-btn-1">
                        <NavLink to='/' className="dropdown-item is-dropdown" onClick={handleDropDown}>
                            <span className='is-dropdown'>About</span>
                        </NavLink>
                        <NavLink to='/work' className="dropdown-item is-dropdown" onClick={handleDropDown}>
                            <span className='is-dropdown'>Work</span>
                        </NavLink>
                        <NavLink to='/resume' className="dropdown-item is-dropdown" onClick={handleDropDown}>
                            <span className='is-dropdown'>Resume</span>
                        </NavLink>
                        <a href="https://github.com/ZachYarbrough/zachyarbrough.github.io" target='_' className="dropdown-item is-dropdown">
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