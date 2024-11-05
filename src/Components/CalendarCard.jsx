// src/Components/CalendarCard.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarCard.css';

const CalendarCard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="card">
      <h3>Calendario de Citas</h3>
      <Calendar onChange={setDate} value={date} />
      <p>Fecha seleccionada: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarCard;
