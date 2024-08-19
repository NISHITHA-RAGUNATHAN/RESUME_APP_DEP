import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-body');
    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/view');
      if (response.status === 200) {
        const users = response.data;
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          localStorage.setItem('isAuthenticated', true); // Store authentication status
          navigate('/'); // Navigate to the home page after successful login
        } else {
          alert('Please signup the application');
        }
      } else {
        alert('Failed to fetch user data');
      }
    } catch (error) {
      alert('An error occurred during login: ' + error.message);
    }
  };

  return (
    <div className="login-body">
      <video className="background-video1" autoPlay loop muted>
        <source
          src="https://videos.pexels.com/video-files/5076643/5076643-sd_960_506_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="login-container">
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        <div className='new'>
  <p><b>New User?</b> <Link to="/reg"><b>Register here</b></Link></p>
</div>

      </div>
    </div>
  );
};

export default Login;
