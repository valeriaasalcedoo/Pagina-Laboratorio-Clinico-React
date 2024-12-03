import React, { useState } from 'react';
import './App.css';
import About from './Components/AboutUs';
import CalendarCard from './Components/CalendarCard';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import ResultsCard from './Components/ResultsCard';
import Services from './Components/Services';
import Sidebar from './Components/Sidebar';
import SignUp from './Components/SignUp';
import WelcomeCard from './Components/WelcomeCard';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // Controla qué vista mostrar
  const [activeView, setActiveView] = useState('welcome'); // Controla la vista activa del dashboard

  // Renderizar contenido dinámico del dashboard
  const renderDashboardView = () => {
    switch (activeView) {
      case 'calendar':
        return <CalendarCard />;
      case 'results':
        return <ResultsCard />;
      case 'profile':
        return <Profile />;
      case 'welcome':
      default:
        return <WelcomeCard />;
    }
  };

  return (
    <div>
      {currentView === 'landing' && (
        <>
          <Navbar onLogin={() => setCurrentView('login')} />
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
        </>
      )}

      {currentView === 'login' && (
        <div className="login-view">
          <Login
            onSwitchForm={() => setCurrentView('signup')}
            onLogin={() => setCurrentView('dashboard')} // Cambia a dashboard
          />
        </div>
      )}

      {currentView === 'signup' && (
        <div className="signup-view">
          <SignUp onSwitchForm={() => setCurrentView('login')} />
        </div>
      )}

      {currentView === 'dashboard' && (
        <div className="dashboard">
          <Sidebar
            setActiveView={setActiveView}
            onLogout={() => setCurrentView('landing')} // Cambia a la vista de landing
          />
          <div className="dashboard-content">{renderDashboardView()}</div>
        </div>
      )}
    </div>
  );
}

export default App;
