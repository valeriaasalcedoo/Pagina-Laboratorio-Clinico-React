import React from 'react';
import './Card.css';

const ResultsCard = () => {
  return (
    <div className="card results-card">
      <h3>Resultados Clínicos</h3>
      <p>Resultados disponibles para descarga:</p>
      <ul className="results-list">
        <li>Análisis de Sangre (10/12/2023)</li>
        <li>Prueba de Glucosa (15/12/2023)</li>
      </ul>
      <button className="results-download-button">Descargar Todo</button>
    </div>
  );
};

export default ResultsCard;
