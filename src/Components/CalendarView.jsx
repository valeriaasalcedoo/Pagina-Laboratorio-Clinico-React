// src/Components/CalendarView.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="calendar card">
      <h3>Calendario de Citas</h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="calendar-view"
      />
      <div className="calendar-info">
        <p><strong>Fecha seleccionada:</strong> {date.toDateString()}</p>
      </div>
    </div>
  );
};

export default CalendarView;
