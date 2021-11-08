import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';


const ScrollButton = (props) => {

    const {
        topBtnVisible
    } = props;

      const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };

    return (
        <FadeIn className='scroll-to-top text-center d-flex align-items-start justify-content-center'>
            {topBtnVisible && (
                <div className='px-10 pointer scroll-to-top mt-10' onClick={scrollTop}>
                    <i className='fa fa-angle-up'></i><br />
                    <span>Back to Top</span>
                </div>
            )}
        </FadeIn>
    );
}

export default ScrollButton;