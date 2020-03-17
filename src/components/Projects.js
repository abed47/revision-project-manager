import React, {useState} from 'react';
import {UseSelectedProjectsValue, UseProjectsValue} from '../context';
export const Projects = ({activeValue = true}) => {
    const [active, setActive] = useState(activeValue);
    const {setSelectedProject} = UseSelectedProjectsValue();
    const {projects} = UseProjectsValue();
    return(
        projects && 
        projects.map(project =>(
            <li
            key={project.projectId}
            data-doc-id={project.docId}
            data-testId="project-action"
            className={
                active === project.projectId ?
                'active sidebar__project' :
                'sidebar__project'
            }
            onClick={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
            }}
            >i am a project</li>
        ))
    );
}