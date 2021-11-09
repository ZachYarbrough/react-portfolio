import React from 'react';
import FadeIn from 'react-fade-in';
import Contact from './Contact';

const About = (props) => {

    const {
        setWorkSelected
    } = props;

    return (
        <FadeIn className='content'>
            {/* Bio */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Bio</h2>
                <p>I am a Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.</p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>1999</span> <span>Born in Houston, Texas.</span></p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>2021</span> <span>Graduated from The University of Texas at Austin with a Bachelors in Arts and Entertainment Technologies. </span></p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>2021</span> <span>Completed Full Stack Web Developement Bootcamp from The Unviersity of Texas at Austin.</span></p>
                <a onClick={() => setWorkSelected(true)} className='btn btn-block font-weight-bold'>
                    <span className='mr-5'>My Work</span>
                    <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
                </a>
            </div>

            <Contact />
        </FadeIn>
    );
}

export default About;