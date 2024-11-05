// src/App.js
import React, { useState } from 'react';
import './App.css';
import About from './Components/AboutUs';
import CalendarCard from './Components/CalendarCard';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import ResultsCard from './Components/ResultsCard';
import Services from './Components/Services';
import Sidebar from './Components/Sidebar';
import WelcomeCard from './Components/WelcomeCard'; // Tarjeta de bienvenida

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState('welcome'); // Vista inicial en el dashboard

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderView = () => {
    switch (activeView) {
      case 'calendar':
        return <CalendarCard />;
      case 'results':
        return <ResultsCard />;
      case 'profile':
        return <Profile />;
      case 'welcome':
      default:
        return <WelcomeCard />; // Tarjeta de bienvenida
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        // Dashboard que se muestra después de iniciar sesión
        <div className="dashboard">
          <Sidebar setActiveView={setActiveView} />
          <div className="dashboard-content">
            <div className="dashboard-cards">
              {renderView()}
            </div>
          </div>
        </div>
      ) : (
        // Landing page visible antes de iniciar sesión
        <>
          <Navbar onLogin={handleLogin} />
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
