import React, { createContext, useState } from 'react';

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
    const [downloadedResumes, setDownloadedResumes] = useState([]);
    
    const addDownloadedResume = (resume) => {
        setDownloadedResumes([...downloadedResumes, resume]);
    };

    return (
        <ResumeContext.Provider value={{
            downloadedResumes,
            addDownloadedResume,
            // other states and functions
        }}>
            {children}
        </ResumeContext.Provider>
    );
};

export default ResumeContext;
