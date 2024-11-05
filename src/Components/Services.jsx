import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Análisis Clínicos</h3>
            <p>Realizamos todo tipo de análisis clínicos con tecnología de punta.</p>
          </div>
          <div className="service-card">
            <h3>Pruebas de COVID-19</h3>
            <p>Pruebas rápidas y PCR para detección de COVID-19.</p>
          </div>
          <div className="service-card">
            <h3>Estudios Especializados</h3>
            <p>Estudios avanzados en áreas como hematología, microbiología y más.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
