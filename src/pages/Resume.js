import React from 'react';
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in';

const Resume = (props) => {

    const {
        currentProjects,
        setBreadcrumbState
    } = props

    const languages = ['HTML', 'CSS', 'JavaScript', 'C#', 'Swift'];
    const technicalSkills = ['React', 'Git', 'NodeJS', 'ExpressJS', 'MongoDB', 'GraphQL', 'Jest', 'Bootstrap', 'AJAX', 'MySQL', 'Handlebars', 'Halfmoon'];

    return (
        <FadeIn className='content'>
            {/* Summary */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Summary</h2>
                <p>Ambitious Full Stack Developer with a background in UI/UX</p>
                <p>Adept in Test Driven Development and Object Oriented Design allowing for clean, concise code</p>
                <p>Proficient in Agile Scrum Methodology; flexible, fast learner that brings curiosity and passion to every project</p>
            </div>

            {/* Skills */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Skills</h2>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Languages</span>
                    <span className='d-flex flex-wrap'>
                        {languages.map((language) => (
                            <span key={language} className="alert mt-5 mr-5 py-0 px-5">{language}</span>
                        ))}
                    </span>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Technical</span>
                    <span className='d-flex flex-wrap'>
                        {technicalSkills.map((skill) => (
                            <span key={skill} className="alert mt-5 mr-5 py-0 px-5">{skill}</span>
                        ))}
                    </span>
                </p>
            </div>

            {/* Projects */}
            <div className='d-flex flex-column'>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Projects</h2>
                <div>
                    <span className='font-size-18 font-weight-bold'>{currentProjects[0].name} - Job Tracking Application</span>
                    <Link to={`/resume/${currentProjects[0].name.toLowerCase()}`} onClick={() => {
                        setBreadcrumbState('Resume');
                    }} className='ml-10 btn font-weight-bold d-none d-sm-inline-block'>
                        <span className='mr-5'>More Info</span>
                        <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
                    </Link>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-10 py-0 px-5'>Website</span>
                        <a href={currentProjects[0].website} target='_'>
                            <span className='mr-5 link text-break'>{currentProjects[0].source}</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-10 py-0 px-5'>Source</span>
                        <a href={currentProjects[0].source} target='_'>
                            <span className='mr-5 link text-break'>{currentProjects[0].source}</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Stack</span>
                        <span className='d-flex flex-wrap'>
                            {currentProjects[0].stack.map((stack) => (
                                <span key={stack} className="alert mr-5 py-0 px-5">{stack}</span>
                            ))}
                        </span>
                    </p>
                    <Link to={`/resume/${currentProjects[0].name.toLowerCase()}`} onClick={() => {
                        setBreadcrumbState('Resume');
                    }} className='btn btn-block font-weight-bold d-sm-none d-block'>
                        <span className='mr-5'>More Info</span>
                        <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
                    </Link>
                </div>
                <div>
                    <span className='font-size-18 font-weight-bold'>{currentProjects[1].name}</span>
                    <Link to={`/resume/${currentProjects[1].name.toLowerCase()}`} onClick={() => {
                        setBreadcrumbState('Resume');
                    }} className='ml-10 btn font-weight-bold d-none d-sm-inline-block'>
                        <span className='mr-5'>More Info</span>
                        <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
                    </Link>
                    <p className='d-flex align-items-start link-wrapper'>
                        <span className='alert alert-primary mr-10 py-0 px-5'>Website</span>
                        <a href={currentProjects[1].website} target='_'>
                            <span className='mr-5 link text-break'>{currentProjects[1].website}</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-10 py-0 px-5'>Source</span>
                        <a href={currentProjects[1].source} target='_'>
                            <span className='mr-5 link text-break'>{currentProjects[1].source}</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Stack</span>
                        <span className='d-flex flex-wrap'>
                            {currentProjects[1].stack.map((stack) => (
                                <span key={stack} className="alert mr-5 py-0 px-5">{stack}</span>
                            ))}
                        </span>
                    </p>
                    <Link to={`/resume/${currentProjects[1].name.toLowerCase()}`} onClick={() => {
                        setBreadcrumbState('Resume');
                    }} className='btn btn-block font-weight-bold d-sm-none d-block'>
                        <span className='mr-5'>More Info</span>
                        <i className='fa fa-angle-right font-size-12' aria-hidden='true' />
                    </Link>
                </div>
            </div>

            {/* Experience */}
            <div className='d-flex flex-column'>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Experience</h2>
                <span className='font-size-18 font-weight-bold'>StoryFit - Screenplay Analyist</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start flex-wrap'>
                        <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Intern</span>
                        <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Jan 2020 - May 2020</span>
                    </p>
                    <span>Utilized critical thinking to regulate movie scripts and format them correctly to ensure AI runs smoothly when determining optimal markets and audience</span>
                </div>
                <span className='font-size-18 font-weight-bold mt-10'>Freelance Work</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start flex-wrap'>
                        <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>2021 - Present</span>
                    </p>
                    <span>Work on the back end of projects using the MERN stack, primarily focusing on MongoDB, GraphQL, and Express</span>
                </div>
                <span className='font-size-18 font-weight-bold mt-10'>2U Education - Teaching Assistant</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start flex-wrap'>
                        <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Part-Time</span>
                        <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Jan 2022 - Present</span>
                    </p>
                    <span>Assist students enrolled in the UT Coding Bootcamp and answer questions pertaining to full stack development</span>
                </div>
            </div>

            {/* Education */}
            <div className='d-flex flex-column'>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Education</h2>

                <span className='font-size-18 font-weight-bold'>BSA in Arts and Entertainment Technologies</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start flex-wrap'>
                        <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>University of Texas at Austin</span>
                        <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>Aug 2017 - May 2021</span>
                    </p>
                    <span>Graduated with a GPA of 3.51 with a concentration in Game Design and a Certificate in Radio Television and Film</span>
                </div>

                <span className='font-size-18 font-weight-bold mt-10'>Bootcamp Certificate</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start flex-wrap'>
                        <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>University of Texas at Austin</span>
                        <span className='alert alert-primary mt-5 mr-5 py-0 px-5'>May 2021 - Dec 2021</span>
                    </p>
                    <span>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js &amp; ReactJS</span>
                </div>
            </div>

            {/* Honors and Awards */}
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Honors and Awards</h2>
                <span className='font-size-18 font-weight-bold mr-10 py-0 px-5'>Eagle Scout</span>
                <div className='d-flex flex-column align-items-start'>
                    <p className='d-flex align-items-start'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Council Number - 576</span>
                        <span className='alert alert-primary mr-5 py-0 px-5'>Sept 2014</span>
                    </p>
                </div>
            </div>
        </FadeIn >
    );
}

export default Resume;