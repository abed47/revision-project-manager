import React, {createContext, useContext} from 'react'
import {useProjects} from '../hooks';

export const ProjectsContext = createContext();
export const ProjectsProvider = ({children}) => {
    const {projects, setProjrects} = useProjects();

    return (
        <ProjectsContext.Provider value={{projects,setProjrects}}>
            {children}
        </ProjectsContext.Provider>
    );
}

export const UseProjectsValue = () => useContext(ProjectsContext);
