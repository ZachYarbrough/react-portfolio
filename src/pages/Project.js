import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const Project = (props) => {

    const {
        breadcrumbState,
        projectSelected,
    } = props;

    return (
        <FadeIn className='content'>
            <div className='navbar-spacer'></div>
            <h2 className='font-size-24 font-weight-bold border-bottom'>{projectSelected.name}</h2>
            <ul className="breadcrumb">
                {breadcrumbState === 'Work' ? (
                    <Link to='/work' className='breadcrumb-item link pointer'>Work</Link>
                ) : (
                    <Link to='/resume' className='breadcrumb-item link pointer'>Resume</Link>
                )}
                <li className="breadcrumb-item active" aria-current="page"><a><span className='font-weight-bold'>{projectSelected.name}</span></a></li>
            </ul>
            <div>
                <p>{projectSelected.description}</p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>Website</span>
                    <a href={`${projectSelected.website}`} target='_'>
                        <span className='mr-5 link text-break'>{projectSelected.website}</span>
                        <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                    </a>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>Source</span>
                    <a href={`${projectSelected.source}`} target='_'>
                        <span className='mr-5 link text-break'>{projectSelected.source}</span>
                        <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                    </a>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>Platform</span>
                    <div className='d-flex flex-wrap'>
                        {projectSelected.platform.map((platform) => (
                            <span className="alert mr-5 py-0 px-5">{platform}</span>
                        ))}
                    </div>
                </p>
                <p className='d-flex align-items-start'>
                    <span className='alert alert-primary mr-5 py-0 px-5'>Stack</span>
                    <div className='d-flex flex-wrap'>
                        {projectSelected.stack.map((stack) => (
                            <span className="alert mr-5 py-0 px-5">{stack}</span>
                        ))}
                    </div>
                </p>
            </div>
            {projectSelected.images.map((image, i) => (
                <div>
                    <img
                        src={image}
                        alt={projectSelected.name + ' ' + i}
                        className=" project-image img-fluid rounded shadow mt-5"
                    />
                </div>
            ))}
        </FadeIn>
    );
}

export default Project;