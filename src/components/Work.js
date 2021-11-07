import React from 'react';
import FadeIn from 'react-fade-in';
import ProjectList from './ProjectList';

const Work = (props) => {

    const {
        projectSelected,
        setProjectSelected
    } = props;

    return (
        <FadeIn className='content'>
            <div>
                <h2 className='font-size-24 font-weight-bold border-bottom'>Work</h2>
                <ProjectList projectSelected={projectSelected} setProjectSelected={setProjectSelected}/>
            </div>
        </FadeIn>
    );
}

export default Work;