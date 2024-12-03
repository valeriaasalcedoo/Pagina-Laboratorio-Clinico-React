import React from 'react';
import './Card.css';

const Profile = () => {
  return (
    <div className="card profile-card">
      <img
        src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
        alt="User Profile"
        className="profile-picture"
      />
      <h3 className="profile-name">Sami Rahman</h3>
      <p className="profile-info">+1-856-569-909-1236</p>
      <p className="profile-info">sami.rahman@gmail.com</p>
      <button className="profile-edit-button">Edit Profile</button>
    </div>
  );
};

export default Profile;
