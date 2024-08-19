import React, { useContext } from 'react';
import Introduction from '../../Components/Intro/Introduction';
import ResumeContext from '../../Context/ResumeContext';
import BuilderArea from '../BuilderArea';
import Theme1 from './../../Theme/Theme1/Theme1';
import Theme2 from '../../Theme/Theme2/Theme2';
import Theme3 from '../../Theme/Theme3/Theme3';
import Theme5 from '../../Theme/Theme5/Theme5';
import Theme6 from '../../Theme/Theme6/Theme6';
import Theme7 from '../../Theme/Theme7/Theme7';
import Theme8 from '../../Theme/Theme8/Theme8';
import Theme9 from '../../Theme/Theme9/Theme9';
import Theme10 from '../../Theme/Theme10/Theme10';
import Theme11 from '../../Theme/Theme11/Theme11';
import Theme12 from '../../Theme/Them12/Theme12';
import Template5 from '../../Theme/Template5';
import ErrorPage from '../Error/ErrorPage';
import Navbar from '../../Pages/Home/Navbar';

const Home = () => {
    const { currentTheme, showComponent, themeData, componentRef, setCurrentTheme } = useContext(ResumeContext);

    return (
        <>
            <Navbar />
            <div className="theme-buttons">
                <button onClick={() => setCurrentTheme('Theme1')}>Theme 1</button>
                <button onClick={() => setCurrentTheme('Theme2')}>Theme 2</button>
                <button onClick={() => setCurrentTheme('Theme3')}>Theme 3</button>
                <button onClick={() => setCurrentTheme('Theme5')}>Theme 5</button>
                <button onClick={() => setCurrentTheme('Theme6')}>Theme 6</button>
                <button onClick={() => setCurrentTheme('Theme7')}>Theme 7</button>
                <button onClick={() => setCurrentTheme('Theme8')}>Theme 8</button>
                <button onClick={() => setCurrentTheme('Theme9')}>Theme 9</button>
                <button onClick={() => setCurrentTheme('Theme10')}>Theme 10</button>
                <button onClick={() => setCurrentTheme('Theme11')}>Theme 11</button>
                <button onClick={() => setCurrentTheme('Theme12')}>Theme 12</button>
                <button onClick={() => setCurrentTheme('Theme12')}>Template5</button>
            </div>
            {!showComponent && <Introduction />}
            {showComponent && currentTheme === 'Theme1' && <BuilderArea theme={<Theme1 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme2' && <BuilderArea theme={<Theme2 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme3' && <BuilderArea theme={<Theme3 componentRef={componentRef} themeData={themeData} />} />}
            
            {showComponent && currentTheme === 'Theme5' && <BuilderArea theme={<Theme5 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme6' && <BuilderArea theme={<Theme6 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme7' && <BuilderArea theme={<Theme7 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme8' && <BuilderArea theme={<Theme8 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme9' && <BuilderArea theme={<Theme9 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme10' && <BuilderArea theme={<Theme10 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme11' && <BuilderArea theme={<Theme11 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme12' && <BuilderArea theme={<Theme12 componentRef={componentRef} themeData={themeData} />} />}
            {showComponent && currentTheme === 'Theme12' && <BuilderArea theme={<Template5 componentRef={componentRef} themeData={themeData} />} />}
        </>
    );
};

export default Home;