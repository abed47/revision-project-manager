import React, {createContext, useContext, useState} from 'react'

export const SelectedProjectsContext = createContext();
export const SelectedProjectsProvider = ({children}) => {
    const {SelectedProjects, setSelectedProjrects} = useState('INBOX');

    return (
        <SelectedProjectsContext.Provider value={{SelectedProjects,setSelectedProjrects}}>
            {children}
        </SelectedProjectsContext.Provider>
    );
}

export const UseSelectedProjectsValue = () => useContext(SelectedProjectsContext);
