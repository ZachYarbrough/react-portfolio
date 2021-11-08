import React from 'react';
import FadeIn from 'react-fade-in';

const About = (props) => {

    const {
        setWorkSelected
    } = props;

    return (
        <FadeIn className='content'>
            {/* Bio */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Bio</h2>
                <p>A Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.</p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>1999</span> <span>Born in Houston, Texas.</span></p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>2021</span> <span>Graduated from The University of Texas at Austin with a Bachelors in Arts and Entertainment Technologies. </span></p>
                <p className='d-flex align-items-start'><span className='alert alert-primary mr-5 py-0 px-5'>2021</span> <span>Completed Full Stack Web Developement Bootcamp from The Unviersity of Texas at Austin.</span></p>
                <a onClick={() => setWorkSelected(true)} className='btn btn-block font-weight-bold'>
                    <span className='mr-5'>My Work</span>
                    <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
                </a>
            </div>

            {/* Contact */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Contact Me</h2>
                <div className='d-sm-flex d-none justify-content-between'>
                    <a href='https://github.com/ZachYarbrough' target='_' className='btn btn-primary font-weight-bold'>
                        <i className='fa-brands fa-github mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                    <a href='https://www.linkedin.com/in/zachary-yarbrough-7518351a2/' target='_' className='btn btn-primary font-weight-bold'>
                        <i className='fa-brands fa-linkedin mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                    <a href='mailto:zachyarbro@gmail.com' target='_' className='btn btn-primary font-weight-bold'>
                        <i className='fa-regular fa-envelope mr-5'></i>
                        <span>zachyarbro@gmail.com</span>
                    </a>
                </div>

                <div className='d-sm-none d-flex flex-column'>
                    <div className='mt-20 mb-10'>
                        <a href='https://github.com/ZachYarbrough' target='_' className='btn btn-block btn-primary font-weight-bold'>
                            <i className='fa-brands fa-github mr-5'></i>
                            <span>@ZachYarbrough</span>
                        </a>
                    </div>
                    <div className='mt-20 mb-10'>
                        <a href='https://www.linkedin.com/in/zachary-yarbrough-7518351a2/' target='_' className='btn btn-block btn-primary font-weight-bold'>
                            <i className='fa-brands fa-linkedin mr-5'></i>
                            <span>@ZachYarbrough</span>
                        </a>
                    </div>
                    <div className='mt-20 mb-10'>
                        <a href='mailto:zachyarbro@gmail.com' target='_' className='btn btn-block btn-primary font-weight-bold'>
                            <i className='fa-regular fa-envelope mr-5'></i>
                            <span>@ZachYarbrough</span>
                        </a>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

export default About;