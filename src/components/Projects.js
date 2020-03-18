import React, {useState} from 'react';
import {useSelectedProjectValue, UseProjectsValue} from '../context';
import { IndividualProject } from './IndividualProject';
export const Projects = 
({activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const {setSelectedProject} =  useSelectedProjectValue();
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
            >
                <IndividualProject project={project}/>
            </li>
        ))
    );
}