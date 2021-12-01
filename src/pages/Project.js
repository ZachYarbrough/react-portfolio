import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { useParams } from 'react-router';

const Project = (props) => {
    const projectTitle = useParams().project;
    const {
        currentProjects,
        breadcrumbState
    } = props;
    const currentProject = currentProjects.filter(project => project.name.toLowerCase() === projectTitle)
    return (
        <FadeIn className='content'>
            <div className='navbar-spacer'></div>
            <h2 className='font-size-24 font-weight-bold border-bottom'>{currentProject[0].name}</h2>
            <ul className="breadcrumb">
                {breadcrumbState === 'Work' ? (
                    <Link to='/work' className='breadcrumb-item link pointer'>Work</Link>
                ) : (
                    <Link to='/resume' className='breadcrumb-item link pointer'>Resume</Link>
                )}
                <li className="breadcrumb-item active" aria-current="page"><a><span className='font-weight-bold'>{currentProject[0].name}</span></a></li>
            </ul>
            <div>
                <p>{currentProject[0].description}</p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>Website</span>
                    <a href={`${currentProject[0].website}`} target='_'>
                        <span className='mr-5 link text-break'>{currentProject[0].website}</span>
                        <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                    </a>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>Source</span>
                    <a href={`${currentProject[0].source}`} target='_'>
                        <span className='mr-5 link text-break'>{currentProject[0].source}</span>
                        <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                    </a>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>Platform</span>
                    <div className='d-flex flex-wrap'>
                        {currentProject[0].platform.map((platform) => (
                            <span className="alert mr-5 py-0 px-5">{platform}</span>
                        ))}
                    </div>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>Stack</span>
                    <div className='d-flex flex-wrap'>
                        {currentProject[0].stack.map((stack) => (
                            <span className="alert mr-5 py-0 px-5">{stack}</span>
                        ))}
                    </div>
                </p>
            </div>
            {currentProject[0].images.map((image, i) => (
                <div>
                    <img
                        src={image}
                        alt={currentProject[0].name + ' ' + i}
                        className=" project-image img-fluid rounded shadow mt-5"
                    />
                </div>
            ))}
        </FadeIn>
    );
}

export default Project;