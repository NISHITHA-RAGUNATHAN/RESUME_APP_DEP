import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('signup-body');
    return () => {
      document.body.classList.remove('signup-body');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/insert', {
        email,
        password,
        confirm_password, // No need to duplicate confirm_password key
      });

      if (response.status === 200) {
        localStorage.setItem('isAuthenticated', true); // Store authentication status
        navigate('/'); // Navigate to the home page after successful sign-up
      } else {
        alert('Failed to sign up');
      }
    } catch (error) {
      alert('An error occurred during sign-up: ' + error.message);
    }
  };

  return (
    <div className="signup-body">
      <video className="background-video1" autoPlay loop muted>
        <source
          src="https://videos.pexels.com/video-files/5054235/5054235-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="signup-container" >
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><b>Email:</b></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label><b>Password:</b></label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label><b>Confirm Password:</b></label>
            <input
              type="password"
              value={confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p><b>Already a user?</b> <Link to="/"><b>Log in</b></Link></p>
      </div>
    </div>
  );
};

export default SignUp;
