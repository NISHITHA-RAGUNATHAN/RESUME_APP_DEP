import React from 'react';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  return (
    <div className="resume-builder-container">
      <h2 className="title">Build Your Resume Fast and Easy.</h2>
      <p className="description">
        Novorésumé is lightning fast. There's no software to download.
         No multi-part sign-up form. 
        No long-winded tutorials. Just a straightforward process.
      </p>
      <div className="step-container">
        <div className="step-number">1</div>
        <div className="step-content">
          <div className="step-text">
            <h1><b>Pick a Template</b></h1>
            <p>
              Don't sabotage your job search before it has even begun.<br/> 
              Choose from our ATS-friendly, hand-crafted resume templates.
            </p>
          </div>
          <div className="step-images" height="100px">
            <img src="https://img.freepik.com/free-vector/choice-worker-concept_52683-44075.jpg?size=626&ext=jpg&uid=R120130181&ga=GA1.1.648736018.1723373368&semt=ais_hybrid" alt="Illustration" /><br></br>
          </div>
        </div>
      </div>
      <div className="step-container">
        <div className="step-number">2</div>
        <div className="step-content">
          <div className="step-text">
            <h1><b>Customize Your Layout</b></h1>
            <p>
              Make the resume template truly your own.<br/><br></br>
              Customize the layout based on your experience level<pre>                                                         </pre>
            </p>
          </div>
          <div className="step-image"><br></br><br></br>
            <img src="https://img.freepik.com/free-vector/choice-worker-concept_23-2148627679.jpg?uid=R120130181&ga=GA1.1.648736018.1723373368&semt=ais_hybrid" alt="Illustration" />
          </div>
        </div>
      </div>
      <div className="step-container">
        <div className="step-number">3</div>
        <div className="step-content">
          <div className="step-text">
            <h1><b>Fill in the Blanks</b></h1>
            <p>
            Fill in your resume information, let our AI content analyzer do<br></br> its job, and see your resume changes dynamically in real time.
            </p>
          </div>
          <div className="step-image"><br></br><br></br>
            <img src="https://img.freepik.com/free-vector/people-working-tablets_23-2148491876.jpg?uid=R120130181&ga=GA1.1.648736018.1723373368&semt=ais_hybrid" alt="Illustration" />
          </div>
        </div>
      </div>
      <div className="step-container">
        <div className="step-number">4</div>
        <div className="step-content">
          <div className="step-text">
            <h1><b>Hit 'Download!'</b></h1>
            <p>
            And yes, it's free! We don't hit you with a paywall once you've <br></br>completed your resume in the Basic Account. If you use any of <br></br>our premium features, the software will let you know about it.
            </p>
          </div>
          <div className="step-image"><br></br><br></br>
            <img src="https://img.freepik.com/free-vector/resume-cv-job-flat-composition-with-doodle-human-characters-stack-papers-hand-lens-laptop-vector-illustration_1284-84160.jpg?uid=R120130181&ga=GA1.1.648736018.1723373368&semt=ais_hybrid" alt="Illustration" /><br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
