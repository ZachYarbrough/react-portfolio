import React from 'react';
import { toggleDarkMode } from 'halfmoon';

const Navbar = () => {

    const handleDropDown = (event) => {
        if(event.target.classList.contains('btn')) {
            event.target.classList.toggle('active');
            event.target.parentNode.classList.toggle('show');
        } else {
            event.target.classList.toggle('active');
            event.target.parentNode.parentNode.classList.toggle('show');
        }
    }

    return (
        <nav className='navbar justify-content-between'>
            <div className='navbar-content'>
                <a href="#" className='navbar-brand'>Zach Yarbrough</a>
                <ul className='navbar-nav d-none d-md-flex'>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Work</a>
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
                        <a href='#' className='nav-link'>
                            <i className='fa fa-code-fork mr-5' />
                            <span>Source</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='navbar-content ml-auto'>
                <button className='btn btn-square' type='button' onClick={toggleDarkMode}>
                    <i className='far fa-moon' aria-hidden="true"/>
                    <span className="sr-only">Toggle dark mode</span>
                </button>
            </div>

            <div className="navbar-content d-md-none">
                <div className="dropdown">
                    <button className="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1" onClick={handleDropDown}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1">
                        <a href="#" className="dropdown-item">About</a>
                        <a href="#" className="dropdown-item">Work</a>
                        <a href="#" className="dropdown-item">Contact</a>
                        <a href="#" className="dropdown-item">
                            <i className='far fa-file-text mr-5' aria-hidden='true'/>
                            <span>Resume</span>
                        </a>
                        <a href="https://github.com/ZachYarbrough/react-portfolio" target='_' className="dropdown-item">
                            <i className='fa fa-code-fork mr-5' aria-hidden='true'/>
                            <span>Source</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;