import React, { useContext, useEffect, useState } from 'react';
import { jsPDF } from "jspdf";
import './userCollectData.css';
import { FormControl, Input, Heading, Textarea, Button, Switch, Card } from '@chakra-ui/react';
import ResumeContext from '../../Context/ResumeContext';
import JobPlatforms from '../../Job/JobPlatforms';

const UserDataCollect = () => {
    const { themeData, coverLetter, setCoverLetter, portfolio, setPortfolio, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork } = useContext(ResumeContext);

    const [projectCount, setProjectCount] = useState(0);
    const [educationCount, setEducationCount] = useState(0);
    const [workCount, setWorkCount] = useState(0);
    const [projArrTemplate, setProjArrTemplate] = useState([]);
    const [educationArrTemplate, setEducationArrTemplate] = useState([]);
    const [workArrTemplate, setWorkArrTemplate] = useState([]);
    const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } });
    const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" } });
    const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } });
    const [personalData, setPersonalData] = useState({ profileImage: '', name: "Your Name", summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli', profile: "Work Profile", address: "Address Line", phone: "Phone Number", email: "Email Address", skill: 'Your, Skills, are, shown, here', });
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' });

    // To Add Personal Data to the State
    const handleChangePersonal = (e) => {
        const { name, value } = e.target;
        setPersonalData({ ...personalData, [name]: value });
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) });
        }
    }

    // To Add Project Data to the State
    const handleChangeProject = (e) => {
        const { name, value, id } = e.target;
        let tempProjectData = projectData;
        if (name.includes('pName')) {
            tempProjectData["projectTitles"][id] = value;
        } else {
            tempProjectData["projectDesc"][id] = value;
        }
        setProjectData({ ...projectData, tempProjectData });
        setThemeData({ ...themeData, projectData: projectData });
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount;
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input disabled={checkProj} id={`pTitle${i}`} name='pName' onChange={handleChangeProject} type={'text'} placeholder='Enter Project Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea disabled={checkProj} id={`pDescription${i}`} name='pDescription' onChange={handleChangeProject} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        );
        let arr = projArrTemplate;
        arr.push(template);
        setProjArrTemplate(arr);
        setProjectCount(i);
    }

    // To Add Education Data to the State
    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target;
        let tempEducationData = educationData;
        if (name.includes('eName')) {
            tempEducationData["educationTitles"][id] = value;
        } else {
            tempEducationData["educationDesc"][id] = value;
        }
        setEducationData({ ...educationData }, tempEducationData);
    }

    const handleEducationClick = (e) => {
        e.preventDefault();
        let i = educationCount;
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`eTitle${i}`} name='eName' onChange={handleChangeEducation} type={'text'} placeholder='Enter Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`eDescription${i}`} name='eDescription' onChange={handleChangeEducation} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        );
        let arr = educationArrTemplate;
        arr.push(template);
        setEducationArrTemplate(arr);
        setEducationCount(i);
    }

    // To Add Work Data to the State
    const handleChangeWork = (e) => {
        const { name, value, id } = e.target;
        let tempWorkData = workData;
        if (name.includes('wName')) {
            tempWorkData["workTitles"][id] = value;
        } else {
            tempWorkData["workDesc"][id] = value;
        }
        setWorkData({ ...workData }, tempWorkData);
    }

    const handleWorkClick = (e) => {
        e.preventDefault();
        let i = workCount;
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`wTitle${i}`} name='wName' onChange={handleChangeWork} type={'text'} placeholder='Enter Job Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`wDescription${i}`} name='wDescription'  onChange={handleChangeWork} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        );
        let arr = workArrTemplate;
        arr.push(template);
        setWorkArrTemplate(arr);
        setWorkCount(i);
    }

    // To Add Award & Achievement Data to the State
    const handleChangeAwards = (e) => {
        const { name, value } = e.target;
        setAwardData({ ...awardData, [name]: value });
    }

    useEffect(() => {
        setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData });
    }, [themeData, personalData, setThemeData, projectData, educationData, workData, awardData]);

    const generateCoverLetter = () => {
        const doc = new jsPDF();
        const coverLetterText = `
            Dear Hiring Manager,

            I am writing to express my interest in the ${personalData.profile} position at your company. With a strong background in ${personalData.profile} and a proven track record in ${workData.workTitles[`wTitle1`]}, I am excited about the opportunity to contribute to your team.

            During my tenure at ${workData.workTitles[`wTitle1`]}, I have developed and honed my skills in ${personalData.skill.split(', ').join(', ')}, which I believe will be highly beneficial for the ${personalData.profile} role. My experience includes ${projectData.projectDesc[`pDescription1`]}.

            I am particularly impressed by your company’s commitment to innovation, and I am eager to bring my expertise in ${personalData.profile} to your team. I am confident that my proactive approach and ability to ${personalData.skill.split(', ')[0]} will make a positive impact at your company.

            Thank you for considering my application. I look forward to the opportunity to discuss how my background, skills, and certifications will be a perfect fit for the ${personalData.profile} position at your company.

            Sincerely,
            ${personalData.name}
            ${personalData.phone}
            ${personalData.email}
        `;
        doc.text(coverLetterText, 10, 10);
        doc.save('cover_letter.pdf');
        setCoverLetter(coverLetterText);
    };

    const generatePortfolio = () => {
        const doc = new jsPDF();
        const portfolioText = `
            Portfolio of ${personalData.name}

            Summary:
            ${personalData.summary}

            Profile:
            ${personalData.profile}

            Skills:
            ${personalData.skill.split(', ').join(', ')}

            Projects:
            ${projectData.projectTitles[`pTitle1`]}: ${projectData.projectDesc[`pDescription1`]}

            Education:
            ${educationData.educationTitles[`eTitle1`]}: ${educationData.educationDesc[`eDescription1`]}

            Work Experience:
            ${workData.workTitles[`wTitle1`]}: ${workData.workDesc[`wDescription1`]}

            Awards & Achievements:
            ${awardData.awards}
        `;
        doc.text(portfolioText, 10, 10);
        doc.save('portfolio.pdf');
        setPortfolio(portfolioText);
    };

    return (
        <div >
        <Card id="co">
        <FormControl className='my-2'>
        <Input name='profileImage' type='file' onChange={handleChangePersonal} />
        </FormControl>
        <FormControl className='my-2'>
        <Input name='name' onChange={handleChangePersonal} placeholder='Enter Your Name' />
        </FormControl>
        <FormControl className='my-2'>
        <Textarea name='summary' width="80%" onChange={handleChangePersonal} placeholder='Enter Summary' />
        </FormControl>
        <FormControl className='my-2'>
        <Input name='profile' onChange={handleChangePersonal} placeholder='Enter Profile' />
        </FormControl>
        <FormControl className='my-2'>
        <Input name='address' onChange={handleChangePersonal} placeholder='Enter Address' />
        </FormControl>
        <FormControl className='my-2'>
        <Input name='phone' onChange={handleChangePersonal} placeholder='Enter Phone Number' />
        </FormControl>
        <FormControl className='my-2'>
        <Input name='email' onChange={handleChangePersonal} placeholder='Enter Email Address' />
        </FormControl>
        <FormControl className='my-2'>
        <Input name='skill' onChange={handleChangePersonal} placeholder='Enter Skills' />
        </FormControl>
        <FormControl className='my-2'>
        <Input name='award' onChange={handleChangeAwards} placeholder='Enter Awards' />
        </FormControl>
        <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' textColor='white' className='my-2'>
                            Projects
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => setCheckProj(!checkProj)} colorScheme='teal' />
                    </div>
                    <hr />
                    <Button disabled={checkProj} onClick={handleProjectClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Projects</Button>
                    {projectCount > 0 && projArrTemplate.map((element, index) => <div key={index}>{element}</div>)}
                </div>
        
        {/* Education Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' textColor='white' className='my-2'>
                            Work Experience
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => setCheckWork(!checkWork)} colorScheme='teal' />
                    </div>
                    <hr />
                    <Button disabled={checkWork} onClick={handleEducationClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Education</Button>
                    {workCount > 0 && workArrTemplate.map((element, index) => <div key={index}>{element}</div>)}
                </div>
                 {/* Work Experience Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' textColor='white' className='my-2'>
                            Work Experience
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => setCheckWork(!checkWork)} colorScheme='teal' />
                    </div>
                    <hr />
                    <Button disabled={checkWork} onClick={handleWorkClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Experience</Button>
                    {workCount > 0 && workArrTemplate.map((element, index) => <div key={index}>{element}</div>)}
                </div>

               {/* Awards & Achievement  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' textColor='white' className='my-2'>
                            Awards & Achievement
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => setCheckAward(!checkAward)} colorScheme='teal' />
                        </div>
                        <Button disabled={checkWork} onClick={handleWorkClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Awards</Button>
                        {workCount > 0 && workArrTemplate.map((element, index) => <div key={index}>{element}</div>)}
                    <hr />
                    <FormControl isRequired className='my-2'>
                        <Textarea name='awards' width=' 670px' disabled={checkAward} onChange={handleChangeAwards} placeholder='Use comma to separate Achievement' />
                     </FormControl>
                </div>


        <div>
            <Button bg="darkslategray" color="white" onClick={generateCoverLetter}>Generate Cover Letter</Button><br></br>
            <Button bg="darkslategray" color="white" onClick={generatePortfolio}>Generate Portfolio</Button>
        </div>
       <JobPlatforms skills={personalData.skill} />
        </Card>
        </div>
        );
};

export default UserDataCollect;
