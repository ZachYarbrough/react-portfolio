import React from 'react';
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in';

const About = (props) => {

    return (
        <FadeIn className='content'>
            {/* Bio */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Bio</h2>
                <p>I am a Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.</p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>1999</span> <span>Born in Houston, Texas.</span></p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>2021</span> <span>Graduated from The University of Texas at Austin with a Bachelors in Arts and Entertainment Technologies. </span></p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>2021</span> <span>Completed Full Stack Web Developement Bootcamp from The Unviersity of Texas at Austin.</span></p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>2022</span> <span>Began Work at 2U Education as a Teaching Assistant</span></p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>2022</span> <span>Began Work as a Freelance Developer</span></p>
                <Link to='/work' className='btn btn-block font-weight-bold' aria-label="my work">
                    <span className='mr-5'>My Work</span>
                    <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
                </Link>
            </div>
            <h2 className='font-size-24 font-weight-bold border-bottom'>Contact Me</h2>
            <div className='d-flex flex-column justify-content-between'>
                <p className='d-flex align-items-start mt-0'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>
                        <i className='fa-brands fa-github mr-5'></i>
                        <span>Github</span>
                    </span>
                    <a href='https://github.com/ZachYarbrough' target='_'>
                        <span className='mr-5 link text-break'>https://github.com/ZachYarbrough</span>
                        <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                    </a>
                </p>
                <p className='d-flex align-items-start mt-0'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>
                        <i className='fa-brands fa-linkedin mr-5'></i>
                        <span>LinkedIn</span>
                    </span>
                    <a href='https://www.linkedin.com/in/zachary-yarbrough-7518351a2' target='_'>
                        <span className='mr-5 link text-break'>https://www.linkedin.com/in/zachary-yarbrough-7518351a2/</span>
                        <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                    </a>
                </p>
                <p className='d-flex align-items-start mt-0'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>
                        <i className='far fa-envelope mr-5'></i>
                        <span>Email</span>
                    </span>
                    <a href='mailto:zachyarbro@gmail.com' target='_'>
                        <span className='mr-5 link text-break'>zachyarbro@gmail.com</span>
                        <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                    </a>
                </p>
            </div>
        </FadeIn>
    );
}

export default About;