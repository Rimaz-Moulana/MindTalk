import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

function ClientCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken, id } = JSON.parse(authData);
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };
        const response = await axios.get(
          `http://localhost:8080/api/client/appointment/get-appointments/${id}`,
          config
        );

        if (response.status === 200) {
          const appointments = response.data.map((appointment) => {
            return {
              id: appointment.id,
              title: 'Appointment',
              start: new Date(appointment.date + 'T' + appointment.timeSlot),
              end: new Date(appointment.date + 'T' + appointment.timeSlot),
            };
          });
          setEvents(appointments);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="">
      <h4 className="text-xl font-semibold "> Calendar</h4>
      <div className="mt-4">
        <Calendar
          localizer={localizer}
          events={events} // Use the events state here
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }} // Set the height of the calendar
        />
      </div>
    </div>
  );
}

export default ClientCalendar;
