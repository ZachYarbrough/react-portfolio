import React from 'react';
import FadeIn from 'react-fade-in';
import ProjectList from '../components/ProjectList';

const Work = (props) => {

    const {
        currentProjects,
        setProjectSelected,
        setBreadcrumbState
    } = props;

    return (
        <FadeIn className='content'>
            <div className='navbar-spacer'></div>
            <h2 className='font-size-24 font-weight-bold border-bottom'>Work</h2>
            <ProjectList currentProjects={currentProjects} setProjectSelected={setProjectSelected} setBreadcrumbState={setBreadcrumbState} />
        </FadeIn>
    );
}

export default Work;