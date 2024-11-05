// src/Components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveView }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveView('calendar')}>Calendario de Citas</li>
        <li onClick={() => setActiveView('results')}>Resultados Clínicos</li>
        <li onClick={() => setActiveView('profile')}>Perfil de Usuario</li>
      </ul>
    </div>
  );
};

export default Sidebar;
