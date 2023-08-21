import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AppointmentService from '../services/AppointmentService'; // Import the service for API requests

const localizer = momentLocalizer(moment);

function AppointmentCalendar() {
  const [appointmentData, setAppointmentData] = useState([]); // State to store fetched appointment data
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    // Fetch appointment data from the database on component mount
    async function fetchAppointments() {
      try {
        const response = await AppointmentService.getAppointment();
        setAppointmentData(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }
    fetchAppointments();
  }, []);

  const handleSlotSelect = (slotInfo) => {
    setSelectedSlot(slotInfo);
  };

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    if (selectedSlot) {
      const title = e.target.name.value;
      const newAppointment = {
        title: title,
        startTime: selectedSlot.start,
        endTime: selectedSlot.end,
      };
      try {
        // Send new appointment data to the database
        await AppointmentService.addAppointment(newAppointment);
        setSelectedSlot(null);
      } catch (error) {
        console.error('Error adding appointment:', error);
      }
    }
  };

  const handleEventClick = (event) => {
    // Handle event click, if needed
  };

  return (
    <div className="h-screen">
      <div className="mt-4 h-full">
        <Calendar
          localizer={localizer}
          events={appointmentData.map(appointment => ({
            id: appointment.id,
            title: appointment.title,
            start: new Date(appointment.startTime),
            end: new Date(appointment.endTime),
          }))}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectEvent={handleEventClick}
          onSelectSlot={handleSlotSelect}
        />
      </div>
      {selectedSlot && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg font-bold mb-2">Enter Name</h2>
            <form onSubmit={handleNameSubmit}>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
              />
              <div className="mt-2 flex justify-end">
                <button
                  type="button"
                  className="px-3 py-1 bg-gray-300 rounded mr-2"
                  onClick={() => setSelectedSlot(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentCalendar;
