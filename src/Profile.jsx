import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Navbar from './Pages/Home/Navbar';

const Profile = () => {
  const [userId, setUserId] = useState(null); 
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmpassword: ''
  });

  useEffect(() => {
    const id = 1; 
    setUserId(id);

    axios.get(`http://localhost:5000/getprofile?userId=${id}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  const handleUpdate = () => {
    if (userId) {
      if (userData.password !== userData.confirmpassword) {
        alert('Passwords do not match');
        return;
      }

      axios.put('http://localhost:5000/updateprofile', {
        email: userData.email,
        password: userData.password,
        confirmpassword: userData.confirmpassword
      })
      .then(response => {
        alert('Profile updated successfully!');
        console.log('Profile updated successfully:', response.data);
      })
      .catch(error => {
        alert('Profile updated successfully!');
        console.error('Error updating profile:', error);
      });
    }
  };

  return (
    <div className='profile-body'>
      <Navbar />
      <div className="profile-container">
        <h1>Profile</h1>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          placeholder="New Password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={userData.confirmpassword}
          onChange={(e) => setUserData({ ...userData, confirmpassword: e.target.value })}
        />
        <br />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Profile;
