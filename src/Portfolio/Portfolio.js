import React, { useContext } from 'react';
import ResumeContext from '../Context/ResumeContext';

const Portfolio = () => {
    const { portfolio } = useContext(ResumeContext);

    return (
        <div className="portfolio">
            <pre>{portfolio}</pre>
        </div>
    );
};

export default Portfolio;
