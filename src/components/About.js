import React from 'react';

const About = () => {
    return (
        <div className="content-wrapper">
            <div>
                <h1>Zach Yarbrough</h1>
                <p className='badge p-5'>Hello, I am a Full Stack Developer based in Austin, Tx</p>
            </div>
            <div>
                <h2>Bio</h2>
                <p>Write a bio here.</p>
                <button className='btn'>
                    <span className='mr-5'>My Work</span>
                    <i className='fa fa-angle-right' aria-hidden='true'/>
                </button>
            </div>
        </div>
    );
}

export default About;