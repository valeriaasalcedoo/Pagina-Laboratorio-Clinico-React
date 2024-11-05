import React from 'react';
import Calendar from './Calendar';
import './Dashboard.css';
import Profile from './Profile';
import Results from './Results';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <h2>Bienvenido al Panel de Usuario</h2>
                <Calendar />
                <Results />
                <Profile />
            </div>
        </div>
    );
};

export default Dashboard;
