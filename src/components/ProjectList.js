import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const ProjectList = (props) => {
    const {
        currentProjects,
        setBreadcrumbState
    } = props;

    return (
        <FadeIn>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                        {currentProjects.map((project, i) => (
                            <Link to={{
                                pathname: `/work/${project.name.toLowerCase()}`
                            }} className='col-md-5 col-sm-12 m-10 text-center pointer' key={project.name}
                                onClick={() => setBreadcrumbState('Work')}>
                                <img
                                    src={require(`../assets/images/projects/${i}.png`).default}
                                    alt={project.name}
                                    className=" project-image img-fluid rounded shadow"
                                />
                                <p className='ml-auto'>
                                    <span className='font-size-22'>{project.name}</span><br />
                                    <span>{project.shortDescription}</span>
                                </p>
                            </Link>
                        ))}
                </div>
            </div>
        </FadeIn>
    );
}

export default ProjectList;