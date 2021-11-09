import React from 'react';
import FadeIn from 'react-fade-in';

const ProjectList = (props) => {

    const {
        currentProjects,
        setProjectSelected,
        setBreadcrumbState
    } = props;

    return (
        <FadeIn>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    {currentProjects.map((project, i) => (
                        <div onClick={() => {
                            setProjectSelected(project);
                            setBreadcrumbState('Work');
                        }} className='col-md-5 col-sm-12 m-10 text-center pointer' key={project.name}>
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