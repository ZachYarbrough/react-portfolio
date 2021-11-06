import React from 'react';
import FadeIn from 'react-fade-in';

const About = (props) => {

    const {
        workSelected,
        setWorkSelected
    } = props;

    return (
        <FadeIn className='content'>

            {/* About Header */}
            <div className='d-sm-flex d-none'>
                <div>
                    <h1 className='mb-0'>Zach Yarbrough</h1>
                    <p className='badge p-5 font-size-14'>Hello, I am a Full Stack Developer based in Austin, Tx</p>
                </div>
                <img src='assets/images/profile-image.jpeg' className="ml-auto mr-20 img-fluid border rounded-circle w-100 h-100" alt="Profile Image" />
            </div>

            {/* About Header - Small */}
            <div className='d-sm-none d-flex flex-column'>
                <div>
                    <h1 className='mb-0'>Zach Yarbrough</h1>
                    <p className='badge p-5 font-size-14'>Hello, I am a Full Stack Developer based in Austin, Tx</p>
                </div>
                <img src='assets/images/profile-image.jpeg' className="mx-auto img-fluid border rounded-circle w-100 h-100" alt="Profile Image" />
            </div>

            {/* Bio */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Bio</h2>
                <p>A Full Stack Developer who specializes in JavaScript Technologies across the MERN stack. I have experience building complete web applications with backend APIs and responsive designs.</p>
                <p className='d-flex'><span className='alert alert-success mr-5 py-0 px-5'>1999</span> <span>Born in Houston, Texas.</span></p>
                <p className='d-flex'><span className='alert alert-success mr-5 py-0 px-5'>2021</span> <span>Graduated from The University of Texas at Austin with a Bachelors in Arts and Entertainment Technologies. </span></p>
                <p className='d-flex'><span className='alert alert-success mr-5 py-0 px-5'>2021</span> <span>Completed a Full Stack Web Developement Bootcamp from The Unviersity of Texas at Austin.</span></p>
                <a onClick={() => setWorkSelected(true)} className='btn btn-block font-weight-bold'>
                    <span className='mr-5'>My Work</span>
                    <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
                </a>
            </div>
            {/* Contact */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Contact Me</h2>
                <div className='d-sm-flex d-none justify-content-between'>
                    <a className='alert alert-success mt-10'>
                        <i className='fa-brands fa-github mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                    <a className='alert alert-success mt-10'>
                        <i className='fa-brands fa-linkedin mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                    <a className='alert alert-success mt-10'>
                        <i className='fa-regular fa-envelope mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                </div>

                <div className='d-sm-none d-flex flex-column'>
                    <div className='mt-20 mb-10'>
                        <a className='alert alert-success mt-10'>
                            <i className='fa-brands fa-github mr-5'></i>
                            <span>@ZachYarbrough</span>
                        </a>
                    </div>
                    <div className='mt-20 mb-10'>
                        <a className='alert alert-success mt-10'>
                            <i className='fa-brands fa-linkedin mr-5'></i>
                            <span>@ZachYarbrough</span>
                        </a>
                    </div>
                    <div className='mt-20 mb-10'>
                        <a className='alert alert-success mt-10'>
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