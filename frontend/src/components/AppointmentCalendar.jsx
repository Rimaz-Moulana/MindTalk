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
  const [counselorName, setCounselorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentFee, setAppointmentFee] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [requestStatusMessage, setRequestStatusMessage] = useState('');


  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const appCounsellorId = localStorage.getItem('appcounsellorId');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };
        const response = await axios.get(
          `http://localhost:8080/api/client/appointment/get-appointments/counsellors/${appCounsellorId}`,
          config
        );

        if (response.status === 200) {
          const appointments = response.data.map((appointment) => {
            const startTime = moment(appointment.date + 'T' + appointment.timeSlot).format('hh:mma');
            const endTime = moment(appointment.date + 'T' + appointment.timeSlot)
              .add(1, 'hour')
              .format('hh:mma');
            const title = `${startTime}-${endTime} Appointment `;
            return {
              id: appointment.id,
              title: title,
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

  const handleSlotSelect = (slotInfo) => {
    const selectedDate = moment(slotInfo.start);
    const currentDate = moment();
    setSelectedSlot(slotInfo);

    if (selectedDate.isSameOrAfter(currentDate, 'minute')) {
      setSelectedSlot(slotInfo);
      // Extract the selected date and time from the slotInfo
      const selectedDate = slotInfo.start.toISOString();
      const selectedTime = moment(slotInfo.start).format('HH:mm'); // Format time as 'HH:mm'

      const counselorName = localStorage.getItem('appcounsellorName');

      // Extract only the date portion (YYYY-MM-DD)
      const dateOnly = selectedDate.substring(0, 10);

      setCounselorName(counselorName);
      setAppointmentDate(dateOnly);
      setAppointmentTime(selectedTime);
      setAppointmentFee('Rs.2000'); // Replace with the actual appointment fee

      setIsModalOpen(true);

      // Store the selected date and time in localStorage
      localStorage.setItem('appointmentDate', dateOnly);
      localStorage.setItem('appointmentTime', selectedTime);

      setIsModalOpen(true);
    } else {
      // Handle the case where the selected date is in the past
      setErrorMessage('Please select a valid time slot.');
      setErrorVisible(true);
    }
  };


  const handleModalCancel = () => {
    setSelectedSlot(null);
    setIsModalOpen(false);
  };

  const handlePaymentSuccess = async (token) => {
    // Handle successful payment here
    console.log('Payment successful:', token);

    try {

      // Add the new appointment to the events array
      const newAppointment = {
        id: events.length + 1,
        title: 'Appointment',
        start: selectedSlot.start,
        end: selectedSlot.end,
      };

      setEvents([...events, newAppointment]);

      // Close the modal and reset state as needed
      setSelectedSlot(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  const setViewDate = (date) => {
    // Implement this function to change the calendar view and navigate to the selected date
    // For example, you can use the defaultDate prop of Calendar component
    // This will make the calendar focus on the selected date
  };


  const addRequestToBackend = async () => {
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
          timeSlot: appointmentTime,
          requested: 1,
          accepted: 0, // Correct format
        };

        const response = await axios.post(
          'http://localhost:8080/api/client/appointment-requests/create-request',
          requestData,
          config
        );

        if (response.status === 200) {
          console.log('Request created successfully');
          setRequestStatusMessage('Request sent to the counselor. Please wait for acceptance.');
          handleModalCancel();
        } else {
          console.error('Error creating request');
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
              <p>Counselor Name: {counselorName}</p>
              <p>Appointment Date: {appointmentDate} </p>
              <p>
                Appointment Time: {moment(appointmentTime, 'HH:mm').format('hh:mm A')} -{' '}
                {moment(appointmentTime, 'HH:mm')
                  .add(60, 'minutes')
                  .format('hh:mm A')}
              </p>
              <p>Appointment Fee: {appointmentFee}</p>
              <br />
              <p>Do you want to schedule the appointment?</p>
              <br />
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
                  onClick={addRequestToBackend}
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Error Modal */}
        {errorVisible && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded">
              <h2 className="text-lg font-bold mb-2">Error</h2>
              <p>{errorMessage}</p>
              <button
                type="button"
                className="px-3 py-1 bg-gray-300 rounded mt-2"
                onClick={() => setErrorVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {requestStatusMessage && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded">
              <h2 className="text-lg font-bold mb-2">Request Status</h2>
              <p>{requestStatusMessage}</p>
              <button
                type="button"
                className="px-3 py-1 bg-gray-300 rounded mt-2"
                onClick={() => {
                  setRequestStatusMessage('');
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );

}

export default AppointmentCalendar;
