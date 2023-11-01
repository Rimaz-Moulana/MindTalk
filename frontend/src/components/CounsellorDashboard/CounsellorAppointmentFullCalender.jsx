import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

function CounsellorAppointmentFullCalender() {
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
                    `http://localhost:8080/api/client/appointment/get-appointments/counsellors/${id}`,
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

    return (
        <div className="h-screen bg-gray-100 p-4">
            <div className="h-screen flex flex-col">
                <div className="flex-grow bg-white p-4 rounded-lg shadow-md">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '100%' }} // Set the height of the calendar to 100% of the container
                    />
                </div>
            </div>
        </div>
    );
}

export default CounsellorAppointmentFullCalender;
