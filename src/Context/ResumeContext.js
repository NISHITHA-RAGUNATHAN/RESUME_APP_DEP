import React, { createContext, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { saveAs } from 'file-saver';

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onBeforePrint: () => setLoading(true),
        onAfterPrint: () => setLoading(false),
    });

    const initialData = {
        personalData: {
            profileImage: '',
            name: '',
            summary: '',
            profile: '',
            address: '',
            phone: '',
            email: '',
            skill: '',
        },
        projectData: {
            projectTitles: {},
            projectDesc: {},
        },
        educationData: {
            educationTitles: {},
            educationDesc: {},
        },
        workData: {
            workTitles: {},
            workDesc: {},
        },
        awardData: {
            awards: '',
        },
    };

    const [themeData, setThemeData] = useState(initialData);
    const [checkProj, setCheckProj] = useState(false);
    const [checkWork, setCheckWork] = useState(false);
    const [checkAward, setCheckAward] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('Theme1');
    const [selectBtn, setSelectBtn] = useState(true);
    const [coverLetter, setCoverLetter] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [recentDownloads, setRecentDownloads] = useState([]); // Add recentDownloads state

    const generateCoverLetter = () => {
        const coverLetterText = `
        Dear Hiring Manager,

        I am writing to express my interest in the [Job Title] position at [Company Name] as advertised. With a strong background in ${themeData.personalData.profile} and a proven track record in ${themeData.workData.workTitles.wTitle1}, I am excited about the opportunity to contribute to your team.

        During my tenure at ${themeData.workData.workTitles.wTitle1}, I have developed and honed my skills in ${themeData.personalData.skill.split(', ').join(', ')}, which I believe will be highly beneficial for the [Job Title] role. My experience includes ${themeData.projectData.projectDesc.pDescription1}. 

        I am particularly impressed by [Company Name]'s commitment to [Something Notable About the Company], and I am eager to bring my expertise in ${themeData.personalData.profile} to your innovative team. I am confident that my proactive approach and ability to ${themeData.personalData.skill.split(', ')[0]} will make a positive impact at [Company Name].

        Thank you for considering my application. I look forward to the opportunity to discuss how my background, skills, and certifications will be a perfect fit for the [Job Title] position at [Company Name].

        Sincerely,
        ${themeData.personalData.name}
        ${themeData.personalData.phone}
        ${themeData.personalData.email}
        `;

        setCoverLetter(coverLetterText);
        const blob = new Blob([coverLetterText], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'cover_letter.txt');

        addRecentDownload('cover_letter.txt'); // Add to recent downloads
    };

    const generatePortfolio = () => {
        const portfolioText = `
        Portfolio of ${themeData.personalData.name}

        Summary:
        ${themeData.personalData.summary}

        Profile:
        ${themeData.personalData.profile}

        Skills:
        ${themeData.personalData.skill.split(', ').join(', ')}

        Education:
        ${Object.values(themeData.educationData.educationTitles).join(', ')}

        Work Experience:
        ${Object.values(themeData.workData.workTitles).join(', ')}

        Projects:
        ${Object.values(themeData.projectData.projectTitles).join(', ')}

        Awards:
        ${themeData.awardData.awards}
        `;

        setPortfolio(portfolioText);
        const blob = new Blob([portfolioText], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'portfolio.txt');

        addRecentDownload('portfolio.txt'); // Add to recent downloads
    };

    const addRecentDownload = (fileName) => {
        const downloadItem = {
            name: fileName,
            date: new Date().toLocaleString(),
        };
        setRecentDownloads(prevDownloads => [downloadItem, ...prevDownloads]);
    };

    return (
        <ResumeContext.Provider value={{
            initialData, selectBtn, setSelectBtn, checkAward, setCheckAward, componentRef, handlePrint,
            currentTheme, setCurrentTheme, showComponent, setShowComponent, loading, setLoading, themeData, setThemeData,
            checkProj, checkWork, setCheckProj, setCheckWork, coverLetter, setCoverLetter, portfolio, setPortfolio,
            generateCoverLetter, generatePortfolio, recentDownloads // Provide recentDownloads and addRecentDownload
        }}>
            {children}
        </ResumeContext.Provider>
    );
};

export default ResumeContext;
