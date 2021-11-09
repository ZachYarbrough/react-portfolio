import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';


const ScrollButton = (props) => {

    const {
        topBtnVisible,
        setTopBtnVisible
    } = props;

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <FadeIn className='scroll-to-top text-center d-flex align-items-start justify-content-center'>
            <div id='topBtn' className={`px-10 pointer scroll-to-top mt-10 ${topBtnVisible && 'show'}`} onClick={topBtnVisible ? scrollTop : undefined}>
                {topBtnVisible && (
                    <div>
                        <i className='fa fa-angle-up mb-5'></i><br />
                        <span>Back to Top</span>
                    </div>
                )}
            </div>
        </FadeIn>
    );
}

export default ScrollButton;