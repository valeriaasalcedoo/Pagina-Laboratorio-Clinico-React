import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2>Contacto</h2>
        <p>Para más información, contáctanos a través de nuestros medios.</p>
        <a href="mailto:contacto@laboratorio.com" className="cta-btn">Envíanos un correo</a>
      </div>
    </section>
  );
}

export default Contact;
