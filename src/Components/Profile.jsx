import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <h3>Información del Paciente</h3>
            <p>Nombre: Juan Pérez</p>
            <p>Edad: 34 años</p>
            <p>Última consulta: 3 de noviembre, 2024</p>
        </div>
    );
};

export default Profile;
