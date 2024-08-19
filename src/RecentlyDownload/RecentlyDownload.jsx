import React, { useContext } from 'react';
import ResumeContext from '../Context/ResumeContext';

const RecentlyDownload = () => {
    const { downloadedResumes } = useContext(ResumeContext);

    return (
        <div>
            <h2>Recently Downloaded Resumes</h2>
            <ul>
                {downloadedResumes.map((resume, index) => (
                    <li key={index}>
                        <h3>{resume.type}</h3>
                        <p>{resume.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentlyDownload;
