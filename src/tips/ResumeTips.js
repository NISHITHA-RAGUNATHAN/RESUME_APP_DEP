
import React from 'react';
import './ResumeTips.css'; // Import the CSS file

const tips = [
    "1.Tailor for every application",
    "2.Ensure every bullet is results-oriented",
    "Remember it’s a marketing document",
    "Keep it to one page",
    "Be consistent",
    "Include quantified information",
    "Keep it simple",
    "Use power verbs",
    "Ensure job headings are complete",
    "Proofread"
];

const ResumeTips = () => {
    return (
        <div>
            <div className="fullscreen-background"><video className="background-video1" autoPlay loop muted>
            <source
              src="https://videos.pexels.com/video-files/4884241/4884241-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            </video>
            </div>
            <div className="resume-tips-container">
                <h1 className="title">Resume Tips</h1>
                <div className="subtitle"></div>
                <ul className="tips-list">
                    {tips.map((tip, index) => (
                        <li key={index} className="tip-item">
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ResumeTips;
