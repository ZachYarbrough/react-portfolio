import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const NoMatch = () => {
  return (
    <FadeIn className='content'>
      <div className='navbar-spacer'></div>
      <h2 className='font-size-24 font-weight-bold border-bottom'>404 Page Not Found</h2>
      <p>Oops, we couldn't find that page.</p>
      <Link to='/' className='btn btn-block font-weight-bold' aria-label="my work">
        <span className='mr-5'>Return Home</span>
        <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
      </Link>
    </FadeIn>
  );
};

export default NoMatch;