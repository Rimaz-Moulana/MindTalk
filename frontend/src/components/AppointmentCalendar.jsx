import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const appointmentData = [
  {
    title: 'Appointment 1',
    start: new Date(2023, 6, 28, 10, 0), // year, month (0-indexed), day, hour, minute
    end: new Date(2023, 6, 28, 11, 0),
  },
  {
    title: 'Appointment 2',
    start: new Date(2023, 6, 29, 15, 0),
    end: new Date(2023, 6, 29, 16, 0),
  },
  {
    title: 'Appointment 3',
    start: new Date(2023, 7, 25, 15, 0),
    end: new Date(2023, 7, 25, 16, 0),
  },
  // Add more appointment objects as needed
];

const AppointmentCalendar = () => {
  return (
    <div className="h-screen">
      <div className="mt-4 h-full">
        <Calendar
          localizer={localizer}
          events={appointmentData}
          startAccessor="start"
          endAccessor="end"
          // style={{ height: '100%' }} // Set the height of the calendar
        />
      </div>
    </div>
  );
};

export default AppointmentCalendar;
