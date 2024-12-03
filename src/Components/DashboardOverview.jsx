import React from 'react';
import './DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="stats">
        <div className="stat-card">Pacientes atendidos: 120</div>
        <div className="stat-card">Resultados pendientes: 35</div>
        <div className="stat-card">Citas programadas: 15</div>
      </div>

      <div className="charts">
        <div className="chart">Gráfico de Distribución</div>
        <div className="chart">Progreso de Citas</div>
      </div>
    </div>
  );
};

export default DashboardOverview;
