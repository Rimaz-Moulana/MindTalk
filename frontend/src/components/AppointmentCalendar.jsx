import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

function AppointmentCalendar() {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          'http://localhost:8080/api/client/appointment/get-appointments', config
        );

        if (response.status === 200) {
          const appointments = response.data.map((appointment) => ({
            id: appointment.id,
            title: 'Appointment',
            start: new Date(appointment.date + 'T' + appointment.timeSlot),
            end: new Date(appointment.date + 'T' + appointment.timeSlot),
          }));
          setEvents(appointments);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleSlotSelect = (slotInfo) => {
    setSelectedSlot(slotInfo);
  
    // Extract the selected date and time from the slotInfo
    const selectedDate = slotInfo.start.toISOString();
    const selectedTime = moment(slotInfo.start).format('HH:mm'); // Format time as 'HH:mm'

     // Adjust the time by adding 1 hour
  const adjustedTime = moment(slotInfo.start).add(1, 'hour').format('HH:mm');
  
    // Store the selected date and time in localStorage
    localStorage.setItem('appointmentDate', selectedDate);
    localStorage.setItem('appointmentTime', adjustedTime);
  
    setIsModalOpen(true);
  };


  const handleModalConfirm = async () => {
    if (selectedSlot) { // Ensure selectedSlot is defined
      const formattedDate = selectedSlot.start.toISOString();
      localStorage.setItem('appointmentDate', formattedDate); // Store the selected date in local storage
  
      const newAppointment = {
        id: events.length + 1,
        title: 'Appointment',
        start: selectedSlot.start,
        end: selectedSlot.end,
      };
  
      try {
        await addApoinmentBackend(selectedSlot); // Call the function
        setEvents([...events, newAppointment]);
        setSelectedSlot(null);
        setIsModalOpen(false);
  
        // Navigate to day view with selected date
        setViewDate(selectedSlot.start);
      } catch (error) {
        console.error('Error creating appointment:', error);
      }
    } else {
      console.error('selectedSlot is not defined'); // Handle the case where selectedSlot is not defined
    }
  };

  const handleModalCancel = () => {
    setSelectedSlot(null);
    setIsModalOpen(false);
  };

  const setViewDate = (date) => {
    // Implement this function to change the calendar view and navigate to the selected date
    // For example, you can use the defaultDate prop of Calendar component
    // This will make the calendar focus on the selected date
  };

  const addApoinmentBackend = async () => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken, id } = JSON.parse(authData);
        const appCounsellorId = localStorage.getItem('appcounsellorId');
        const appointmentDate = localStorage.getItem('appointmentDate');
        const appointmentTime = localStorage.getItem('appointmentTime');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };

        const requestData = {
          userId: id,
          counsellorId: appCounsellorId, 
          date: appointmentDate, // Correct format
          timeSlot: appointmentTime, // Correct format
        };

        const response = await axios.post(
          'http://localhost:8080/api/client/appointment/create-appointment',
          requestData,
          config
        );

        if (response.status === 200) {
          console.log('Appointment created successfully');
        } else {
          console.error('Error creating appointment');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <div className="h-screen">
      <div className="mt-4 h-full">
        <Calendar
          localizer={localizer}
          defaultView={Views.MONTH}
          events={events}
          onSelectSlot={handleSlotSelect}
          startAccessor="start"
          endAccessor="end"
          selectable
          step={60}
        />
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded">
              <h2 className="text-lg font-bold mb-2">Schedule Appointment</h2>
              <p>Do you really want to schedule an appointment?</p>
              <div className="mt-2 flex justify-end">
                <button
                  type="button"
                  className="px-3 py-1 bg-gray-300 rounded mr-2"
                  onClick={handleModalCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                  onClick={handleModalConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentCalendar;
