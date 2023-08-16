import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const appointmentData = [
  {
    id: 1,
    title: 'Appointment 1',
    start: new Date(2023, 6, 28, 10, 0),
    end: new Date(2023, 6, 28, 11, 0),
  },
  {
    id: 2,
    title: 'Appointment 2',
    start: new Date(2023, 6, 29, 15, 0),
    end: new Date(2023, 6, 29, 16, 0),
  },
  {
    id: 3,
    title: 'Appointment 3',
    start: new Date(2023, 7, 25, 15, 0),
    end: new Date(2023, 7, 25, 16, 0),
  },
];

const AppointmentCalendar = () => {
  const [currentView, setCurrentView] = useState(Views.MONTH);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    id: '',
    startTime: null,
    endTime: null,
  });

  const handleDateClick = (event) => {
    setSelectedDate(event);
    setCurrentView(Views.DAY);
  };

  const handleSlotSelect = (slotInfo) => {
    if (slotInfo.start.getHours() >= 9 && slotInfo.end.getHours() <= 21) {
      setBookingData({
        name: '',
        id: '',
        startTime: slotInfo.start,
        endTime: slotInfo.end,
      });
      setSelectedSlot(slotInfo);
      setIsBookingFormOpen(true);
    }
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log('Booking data:', bookingData);
    setIsBookingFormOpen(false);
  };

  const handleFormCancel = () => {
    setIsBookingFormOpen(false);
  };

  return (
    <div className="h-screen">
      <div className="h-full mt-4">
        <Calendar
          localizer={localizer}
          events={appointmentData}
          startAccessor="start"
          endAccessor="end"
          views={{ month: true, week: false, day: true }}
          view={currentView}
          onView={(view) => setCurrentView(view)}
          date={selectedDate}
          step={30} // Set time slot duration to 60 minutes
          min={new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 9, 0)}
          max={new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 21, 0)}
          components={{
            dateCellWrapper: ({ children, value }) => (
              <button
                className="w-full h-full p-2 text-left bg-transparent border-none"
                onClick={() => handleDateClick(value)}
              >
                {children}
              </button>
            ),
            timeSlotWrapper: ({ children, value }) => (
              <button
                className="w-full h-full p-2 text-left bg-transparent border-none"
                onClick={() => handleSlotSelect({ start: value })}
              >
                {children}
              </button>
            ),
          }}
          toolbar={true}
          onNavigate={(date, view) => setSelectedDate(date)}
          onDrillDown={(date, view) => setSelectedDate(date)}
        />
      </div>
      {isBookingFormOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="mb-2 text-lg font-semibold">Book Appointment</h2>
            <form>
              <label htmlFor="name" className="block mb-2">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-1 border"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                />
              </label>
              <label htmlFor="id" className="block mb-2">
                ID:
                <input
                  type="text"
                  id="id"
                  name="id"
                  className="w-full p-1 border"
                  value={bookingData.id}
                  onChange={(e) => setBookingData({ ...bookingData, id: e.target.value })}
                />
              </label>
              <p className="mb-2 font-semibold">Start Time: {bookingData.startTime.toLocaleTimeString()}</p>
              <p className="mb-2 font-semibold">End Time: {bookingData.endTime.toLocaleTimeString()}</p>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
                  onClick={handleFormSubmit}
                >
                  Book
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={handleFormCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentCalendar;
