import React from 'react';
import FadeIn from 'react-fade-in';

const ProjectList = (props) => {

    const {
        setProjectSelected
    } = props;

    const currentProjects = [
        {
            name: 'Reploy',
            description: "Job application tracker that stores the user's applications in a database",
            website: 'https://reploy.herokuapp.com',
            source: 'https://github.com/abjj1999/Job-Tracker',
            platform: ['Web'],
            stack: ['Handlebars', 'MySQL', 'ExpressJS', 'NodeJS']
        },
        {
            name: 'Weather Dashboard',
            description: "An application that utilizes the Open Weather API to fetch the weather for the next 5 days based on location.",
            website: '',
            source: '',
            platform: ['Web'],
            stack: ['HTML', 'CSS', 'JavaScript']
        },
        {
            name: 'Lyricado',
            description: "Job application tracker that stores the user's applications in a database",
            website: 'https://reploy.herokuapp.com',
            source: 'https://github.com/abjj1999/Job-Tracker',
            platform: ['Web'],
            stack: ['Handlebars', 'MySQL', 'ExpressJS', 'NodeJS']
        },
        {
            name: 'Run Buddy',
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
                                src={require(`../../public/assets/images/projects/${i}.png`).default}
                                alt={project.name}
                                className="img-fluid rounded w-md-400 h-md-200 w-600 h-300"
                            />
                            <p className='ml-auto'>
                                <span className='font-size-24 font-weight-bold'>{project.name}</span><br />
                                <span>{project.description}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}

export default ProjectList;