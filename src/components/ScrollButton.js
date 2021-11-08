import { pageWrapper } from 'halfmoon';
import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';


const ScrollButton = (props) => {

    const {
        executeScroll,
        topBtnVisible
    } = props;

    return (
        <FadeIn className='scroll-to-top text-center mt-20 d-flex align-items-start justify-content-center'>
            {topBtnVisible && (
                <div className='px-10 pointer scroll-to-top' onClick={executeScroll}>
                    <i className='fa fa-angle-up'></i><br />
                    <span>Back to Top</span>
                </div>
            )}
        </FadeIn>
    );
}

export default ScrollButton;