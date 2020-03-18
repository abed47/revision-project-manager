import React, {createContext, useContext} from 'react'
import {useProject} from '../hooks';

export const ProjectContext = createContext();
export const ProjectProvider = ({children}) => {
    const {projects, setProjrects} = useProject();

    return (
        <ProjectContext.Provider value={{projects,setProjrects}}>
            {children}
        </ProjectContext.Provider>
    );
}

export const UseProjectsValue = () => useContext(ProjectContext);
