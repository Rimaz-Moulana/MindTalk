import React, { useState } from 'react';
import axios from 'axios';

const CounsellorAvailability = () => {
  const [availability, setAvailability] = useState({
    mon: { startTime: '', endTime: '' },
    tue: { startTime: '', endTime: '' },
    wed: { startTime: '', endTime: '' },
    thur: { startTime: '', endTime: '' },
    fri: { startTime: '', endTime: '' },
    sat: { startTime: '', endTime: '' },
    sun: { startTime: '', endTime: '' },
  });

  const dayNameMap = {
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thur: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
    sun: 'Sunday',
  };

  const handleAvailabilityChange = (day, field, value) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: { ...prevAvailability[day], [field]: value },
    }));
  };

  const renderDayAvailability = (day) => (
    <div key={day} className="mb-4 flex items-center">
      <h3 className="text-lg font-semibold flex-grow">{dayNameMap[day]}</h3>
      <input
        type="time"
        placeholder="Start Time"
        value={availability[day].startTime}
        onChange={(e) => handleAvailabilityChange(day, 'startTime', e.target.value)}
        className="border rounded-md p-2"
      />
      <span className="mx-2">to</span>
      <input
        type="time"
        placeholder="End Time"
        value={availability[day].endTime}
        onChange={(e) => handleAvailabilityChange(day, 'endTime', e.target.value)}
        className="border rounded-md p-2"
      />
    </div>
  );

  const daysInOrder = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

  const saveAvailability = async () => {
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

        const availabilityData = [
          {
            counsellorId: id,
            tue_S: availability.tue.startTime,
            tue_E: availability.tue.endTime,
            wed_S: availability.wed.startTime,
            wed_E: availability.wed.endTime,
            thur_S: availability.thur.startTime,
            thur_E: availability.thur.endTime,
            fri_S: availability.fri.startTime,
            fri_E: availability.fri.endTime,
            sat_S: availability.sat.startTime,
            sat_E: availability.sat.endTime,
            sun_S: availability.sun.startTime,
            sun_E: availability.sun.endTime,
            mon_S: availability.mon.startTime,
            mon_E: availability.mon.endTime,
          }
        ];

        const response = await axios.post(
          'http://localhost:8080/api/v1/counsellor-availability/add-days',
          availabilityData,
          config
        );

        if (response.status === 200) {
          console.log('Availability saved successfully');
          // Clear the time slots
          setAvailability({
            mon: { startTime: '', endTime: '' },
            tue: { startTime: '', endTime: '' },
            wed: { startTime: '', endTime: '' },
            thur: { startTime: '', endTime: '' },
            fri: { startTime: '', endTime: '' },
            sat: { startTime: '', endTime: '' },
            sun: { startTime: '', endTime: '' },
          });
        } else {
          console.error('Error saving availability');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Set Your Availability</h2>
      {daysInOrder.map((day) => renderDayAvailability(day))}
      <button
        className="bg-blue-700 text-white rounded-full px-4 py-2 hover:bg-blue-600 block mx-auto"
        onClick={saveAvailability}
      >
        Save
      </button>
    </div>
  );
};

export default CounsellorAvailability;
