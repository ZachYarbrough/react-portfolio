import React from 'react';
import FadeIn from 'react-fade-in';

const About = (props) => {

    const {
        workSelected,
        setWorkSelected,
        toastAlert
    } = props;

    return (
        <FadeIn className='content'>
            {/* About Header */}
            <div className='d-sm-flex d-none'>
                <div>
                    <h1 className='mb-0'>Zach Yarbrough</h1>
                    <a href="assets/zach-yarbrough-resume.pdf" download onClick={toastAlert} className="download-resume badge-group" role="group" aria-label="...">
                        <span class="badge">Full Stack Developer based in Austin</span>
                        <span class="badge badge-primary">
                            <i className='fa fa-download mr-5'></i>
                            <span>Download Resume</span>
                        </span>
                    </a>
                </div>
                <img src='assets/images/profile-image.jpeg' className="ml-auto mr-20 img-fluid border rounded-circle w-100 h-100" alt="Profile Image" />
            </div>

            {/* About Header - Small */}
            <div className='d-sm-none d-flex flex-column'>
                <div>
                    <h1 className='mb-0'>Zach Yarbrough</h1>
                    <a href="#" class="badge-group" role="group" aria-label="...">
                        <span class="badge">Full Stack Developer based in Austin</span>
                        <span class="badge badge-primary">
                            <i className='fa fa-download mr-5'></i>
                            <span>Download Resume</span>
                        </span>
                    </a>
                </div>
                <img src='assets/images/profile-image.jpeg' className="mx-auto mt-20 mb-0 img-fluid border rounded-circle w-100 h-100" alt="Profile Image" />
            </div>

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
            {/* Skills */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Skills</h2>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Languages</span>
                    <div className='d-flex flex-wrap'>
                        <span class="alert mt-5 mr-5 py-0 px-5">HTML</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">CSS</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">JavaScript</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">C#</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Swift</span>
                    </div>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Technical</span>
                    <div className='d-flex flex-wrap'>
                        <span class="alert mt-5 mr-5 py-0 px-5">React</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Git</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Node</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Express</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">MongoDB</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Jest</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Bootstrap</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">AJAX</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">MySQL</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Handlebars</span>
                    </div>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='nowrap-div alert alert-primary mt-5 mr-5 py-0 px-5'>Non Technical</span>
                    <div className='d-flex flex-wrap'>
                        <span class="alert mt-5 mr-5 py-0 px-5">Agile Scrum Methodology</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Object Oriented Design</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Flexible Learner</span>
                        <span class="alert mt-5 mr-5 py-0 px-5">Model View Controller</span>
                    </div>
                </p>
            </div>
            {/* Contact */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Contact Me</h2>
                <div className='d-sm-flex d-none justify-content-between'>
                    <a className='btn btn-primary font-weight-bold'>
                        <i className='fa-brands fa-github mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                    <a className='btn btn-primary font-weight-bold'>
                        <i className='fa-brands fa-linkedin mr-5'></i>
                        <span>@ZachYarbrough</span>
                    </a>
                    <a className='btn btn-primary font-weight-bold'>
                        <i className='fa-regular fa-envelope mr-5'></i>
                        <span>zachyarbro@gmail.com</span>
                    </a>
                </div>

                <div className='d-sm-none d-flex flex-column'>
                    <div className='mt-20 mb-10'>
                        <a href='#' target='_' className='btn btn-block btn-primary text-white font-weight-bold'>
                            <i className='fa-brands fa-github mr-5'></i>
                            <span>@ZachYarbrough</span>
                        </a>
                    </div>
                    <div className='mt-20 mb-10'>
                        <a href='#' target='_' className='btn btn-block btn-primary text-white font-weight-bold'>
                            <i className='fa-brands fa-linkedin mr-5'></i>
                            <span>@ZachYarbrough</span>
                        </a>
                    </div>
                    <div className='mt-20 mb-10'>
                        <a href='#' target='_' className='btn btn-block btn-primary font-weight-bold'>
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