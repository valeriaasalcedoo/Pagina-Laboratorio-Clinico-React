import React, { useState } from 'react';
import './Card.css';

const CalendarCard = () => {
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [appointments, setAppointments] = useState([
    { date: '10/12/2023', time: '10:00 AM', reason: 'Análisis de Sangre' },
    { date: '15/12/2023', time: '12:00 PM', reason: 'Consulta General' },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    reason: '',
  });

  const toggleScheduleForm = () => {
    setShowScheduleForm(!showScheduleForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newAppointment.date && newAppointment.time && newAppointment.reason) {
      setAppointments([...appointments, newAppointment]);
      setNewAppointment({ date: '', time: '', reason: '' });
      setShowScheduleForm(false); // Oculta el formulario después de agregar la cita
    }
  };

  return (
    <div className="card">
      <h3>Calendario</h3>
      <p>Próximas citas programadas:</p>
      <ul className="calendar-list">
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.date} - {appointment.time} - {appointment.reason}
          </li>
        ))}
      </ul>
      {!showScheduleForm ? (
        <button className="button" onClick={toggleScheduleForm}>
          Agendar Nueva Cita
        </button>
      ) : (
        <form className="appointment-form" onSubmit={handleFormSubmit}>
          <h4>Agendar Nueva Cita</h4>
          <div className="form-group">
            <label>Fecha:</label>
            <input
              type="date"
              name="date"
              value={newAppointment.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Hora:</label>
            <input
              type="time"
              name="time"
              value={newAppointment.time}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Motivo:</label>
            <input
              type="text"
              name="reason"
              placeholder="Ej. Consulta General"
              value={newAppointment.reason}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="button">
            Guardar Cita
          </button>
          <button
            type="button"
            className="button cancel-button"
            onClick={toggleScheduleForm}
          >
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default CalendarCard;
