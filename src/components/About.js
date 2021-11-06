import React from 'react';
import FadeIn from 'react-fade-in';

const About = (props) => {

    const {
        workSelected,
        setWorkSelected
    } = props;

    return (
        <FadeIn className='content'>
            <div>
                <h1 className='mb-0'>Zach Yarbrough</h1>
                <p className='badge p-5'>Hello, I am a Full Stack Developer based in Austin, Tx</p>
            </div>
            <div className='divider'></div>
            <div className='section'>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Bio</h2>
                <p>A Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.</p>
                <p>A Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.A Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.A Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.A Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.A Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.A Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.</p>
                <a href='#work' onClick={() => setWorkSelected(true)} className='btn btn-block'>
                    <span className='mr-5 font-weight-bold'>My Work</span>
                    <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
                </a>
            </div>
            <div className='divider'></div>
            <div className='section'>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Contact Me</h2>
                <p>
                    <span className='alert alert-success mr-5 p-5'>Github</span>
                    <a href='#'>@ZachYarbrough</a>
                </p>
                <p>
                    <span className='alert alert-success mr-5 p-5'>LinkedIn</span>
                    <a href='#'>@ZachYarbrough</a>
                </p>
                <p>
                    <span className='alert alert-success mr-5 p-5'>Email</span>
                    <a href='#'>zachyarbro@gmail.com</a>
                </p>
                <p>
                    <span className='alert alert-success mr-5 p-5'>Phone</span>
                    <a href='#'>(713) 501-4532</a>
                </p>
            </div>
        </FadeIn>
    );
}

export default About;