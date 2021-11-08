import React from 'react';
import FadeIn from 'react-fade-in';

import reploy0 from '../assets/images/reploy/0.png';
import reploy1 from '../assets/images/reploy/1.png';
import weatherDashboard0 from '../assets/images/weather-dashboard/0.png'

const ProjectList = (props) => {

    const {
        setProjectSelected
    } = props;

    const currentProjects = [
        {
            name: 'Reploy',
            shortDescription: "A job application tracker",
            description: "A job application tracker that stores the user's applications in a database",
            website: 'https://reploy.herokuapp.com',
            source: 'https://github.com/abjj1999/Job-Tracker',
            platform: ['Web'],
            images: [
                reploy0,
                reploy1
            ],
            stack: ['Handlebars', 'MySQL', 'ExpressJS', 'NodeJS']
        },
        {
            name: 'Weather Dashboard',
            shortDescription: "A weather tracker that forecasts the next 5 days",
            description: "An application that utilizes the Open Weather API to fetch the weather for the next 5 days based on location.",
            website: 'https://zachyarbrough.github.io/weather-dashboard/',
            source: 'https://github.com/ZachYarbrough/weather-dashboard',
            platform: ['Web'],
            images: [
                weatherDashboard0
            ],
            stack: ['HTML', 'CSS', 'JavaScript']
        },
        {
            name: 'Lyricado',
            shortDescription: "Job application tracker that stores the user's applications in a database",
            description: "Job application tracker that stores the user's applications in a database",
            website: 'https://reploy.herokuapp.com',
            source: 'https://github.com/abjj1999/Job-Tracker',
            platform: ['Web'],
            stack: ['Handlebars', 'MySQL', 'ExpressJS', 'NodeJS']
        },
        {
            name: 'Run Buddy',
            shortDescription: "Job application tracker that stores the user's applications in a database",
            description: "Job application tracker that stores the user's applications in a database",
            website: 'https://reploy.herokuapp.com',
            source: 'https://github.com/abjj1999/Job-Tracker',
            platform: ['Web'],
            stack: ['Handlebars', 'MySQL', 'ExpressJS', 'NodeJS']
        }
    ];

    return (
        <FadeIn>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    {currentProjects.map((project, i) => (
                        <div onClick={() => setProjectSelected(project)} className='col-md-5 col-sm-12 m-10 text-center pointer' key={project.name}>
                            <img
                                src={require(`../assets/images/projects/${i}.png`).default}
                                alt={project.name}
                                className=" project-image img-fluid rounded shadow"
                            />
                            <p className='ml-auto'>
                                <span className='font-size-24 font-weight-bold'>{project.name}</span><br />
                                <span>{project.shortDescription}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}

export default ProjectList;