import React, {createContext, useContext, useState} from 'react'

export const SelectedProjectContext = createContext();
export const SelectedProjectsProvider = ({children}) => {
    const [SelectedProject, setSelectedProjrect] = useState('INBOX');

    return (
        <SelectedProjectContext.Provider value={{SelectedProject,setSelectedProjrect}}>
            {children}
        </SelectedProjectContext.Provider>
    );
}

export const UseSelectedProjectsValue = () => useContext(SelectedProjectContext);
