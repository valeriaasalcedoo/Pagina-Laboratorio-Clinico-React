// src/Components/Calendar.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const CalendarView = () => {
  return (
    <div className="calendar card">
      <h3>Calendario de Citas</h3>
      <Calendar className="calendar-view" />
    </div>
  );
};

export default CalendarView;
