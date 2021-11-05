import React from 'react';
import halfmoon from 'halfmoon';

const Navbar = () => {
    return (
        <div className='navbar justify-content-between'>
            <div className='navbar-content'>
                <div className='navbar-brand'>
                    <a href="#">Zach Yarbrough</a>
                </div>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Work</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Resume</a>
                    </li>
                </ul>
                <button className='fa fa-moon btn btn-primary' type='button' onClick={() => halfmoon.toggleDarkMode()}></button>
            </div>
        </div>
    );
}

export default Navbar;