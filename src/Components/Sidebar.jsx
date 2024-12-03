import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveView, onLogout }) => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li onClick={() => setActiveView('welcome')}>Overview</li>
        <li onClick={() => setActiveView('profile')}>Profile</li>
        <li onClick={() => setActiveView('calendar')}>Calendar</li>
        <li onClick={() => setActiveView('results')}>Results</li>
      </ul>
      <ul className="logout-container">
        <li className="logout-option" onClick={onLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
