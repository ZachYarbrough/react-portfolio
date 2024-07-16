import React from 'react';
import FadeIn from 'react-fade-in';


const ScrollButton = (props) => {

    const {
        topBtnVisible
    } = props;

    const scrollTop = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <FadeIn className='scroll-to-top text-center d-flex align-items-start justify-content-center'>
            {topBtnVisible && <div id='topBtn' className='px-10 pointer scroll-to-top mt-10' onMouseDown={(e) => scrollTop(e)}>
                {topBtnVisible && (
                    <div>
                        <i className='fa fa-angle-up mb-5'></i><br />
                        <span>Back to Top</span>
                    </div>
                )}
            </div>}
        </FadeIn>
    )
}

export default ScrollButton;