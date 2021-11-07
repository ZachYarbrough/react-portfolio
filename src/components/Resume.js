import React from 'react';
import FadeIn from 'react-fade-in';

const Resume = () => {
    return (
        <FadeIn className="content">
            <iframe src="assets/Zach\ Yarbrough\ Resume.pdf"></iframe>
            <button className='btn btn-primary ml-auto'>Download</button>
        </FadeIn>
    );
}

export default Resume;