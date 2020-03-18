import React, {createContext, useContext} from 'react'
import {useProjects} from '../hooks';

export const ProjectContext = createContext();
export const ProjectsProvider = ({children}) => {
    const {projects, setProjrects} = useProjects();

    return (
        <ProjectContext.Provider value={{projects,setProjrects}}>
            {children}
        </ProjectContext.Provider>
    );
}

export const UseProjectsValue = () => useContext(ProjectContext);
