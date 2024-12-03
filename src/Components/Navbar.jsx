import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar({ onLogin }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#AboutUs">Quienes Somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contacto</a>
            </li>
            <li className="nav-item">
              <button className="btn login-btn" onClick={onLogin}>
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
