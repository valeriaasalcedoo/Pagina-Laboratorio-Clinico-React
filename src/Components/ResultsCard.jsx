// src/Components/ResultsCard.js
import React from 'react';
import './ResultsCard.css';

const ResultsCard = () => {
  return (
    <div className="card">
      <h3>Resultados Clínicos</h3>
      <p>Resultado de análisis de sangre disponible para descarga</p>
      <button className="download-button">Descargar Resultados</button>
    </div>
  );
};

export default ResultsCard;
