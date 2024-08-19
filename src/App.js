import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ResumeState from './Context/ResumeState';
import { ResumeProvider } from './Context/ResumeContext';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Home';
import HomePage from './Pages/Home/HomePage';
import About from './Pages/About/About';
import Login from './Login';
import BuilderArea from './Pages/BuilderArea';
import SignUp from './SignUp';
import Introduction from './Components/Intro/Introduction';
import Settings from './set/Settings';
import Theme1 from './Theme/Theme1/Theme1';
import Theme2 from './Theme/Theme2/Theme2';
import ResumeTips from './tips/ResumeTips';
import UploadResume from './Modify/UploadResume';
import Chat from './Chat/Chat';
import FeedbackPage from './FeedbackPage';
import ATSComplianceChecker from './Components/ATSComplianceChecker'; // Import the ATS Checker
import Profile from './Profile'; // Import the Profile component

function App() {
    const location = useLocation();
    const noNavbarRoutes = ['/', '/reg'];

    return (
        <ResumeProvider>
            <ResumeState>
                <div className="App">
                    <Helmet>
                        <title>Resume Builder - Create Professional Resumes Online</title>
                        <meta name="description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
                        <meta name="keywords" content="resume builder, professional resumes, online resumes, resume templates" />
                        <meta name="author" content="Hardik Desai" />
                        <meta property="og:title" content="Resume Builder - Create Professional Resumes Online" />
                        <meta property="og:description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
                        <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
                        <meta property="og:url" content="https://quick-resume.netlify.app/" />
                        <meta property="og:type" content="website" />
                    </Helmet>
                    {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/Theme/Theme1/Theme1" element={<Theme1 />} />
                        <Route path="/Theme/Theme2/Theme2" element={<Theme2 />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/reg" element={<SignUp />} />
                        <Route path="/intro" element={<Introduction />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/build" element={<BuilderArea />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/tips" element={<ResumeTips />} />
                        <Route path="/modify" element={<UploadResume />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/feedback" element={<FeedbackPage />} />
                        <Route path="/ats-compliance" element={<ATSComplianceChecker />} /> {/* Add ATS Compliance Checker Route */}
                        <Route path="/profile" element={<Profile />} /> {/* Add Profile Route */}
                        
                        {/* Add any other routes as needed */}
                    </Routes>
                </div>
            </ResumeState>
        </ResumeProvider>
    );
}

export default App;
