import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import Logo from '../assets/logo.png'
import StripeCheckout from 'react-stripe-checkout';



const localizer = momentLocalizer(moment);

function AppointmentCalendar() {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counselorName, setCounselorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentFee, setAppointmentFee] = useState('');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken} = JSON.parse(authData);
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
  };


  const handleModalCancel = () => {
    setSelectedSlot(null);
    setIsModalOpen(false);
  };

  const handlePaymentSuccess = async (token) => {
    // Handle successful payment here
    console.log('Payment successful:', token);
  
    try {
      // Call the function to add the appointment to the backend
      await addApoinmentBackend(selectedSlot);
      
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
                {/* Stripe payment button */}
                <StripeCheckout
                  token={handlePaymentSuccess}
                  name="Mind Talk"
                  image={Logo}
                  label="Pay Appointment Fee"
                  currency="LKR"
                  amount={200000} 
                  stripeKey="pk_test_51Nrk0OSFDUE54MtAFhY0fKuF4xN7ecdMr9CIIp41qjbrKDGnYEvCc0TGgL0sgXDQ8CQ7Jg8wTRVal2GTo2OGRR1q00zw9XTipk"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentCalendar;
