import React, { useState } from 'react';
import axios from 'axios';

const CounsellorAvailability = () => {
  const [availability, setAvailability] = useState({
    mon: [],
    tue: [],
    wed: [],
    thur: [],
    fri: [],
    sat: [],
    sun: [],
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

  const addSlot = (day) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: [
        ...prevAvailability[day],
        { startTime: '', endTime: '' },
      ],
    }));
  };

  const removeSlot = (day, index) => {
    setAvailability((prevAvailability) => {
      const updatedAvailability = { ...prevAvailability };
      updatedAvailability[day] = updatedAvailability[day].filter(
        (_, i) => i !== index
      );
      return updatedAvailability;
    });
  };

  const handleSlotChange = (day, index, field, value) => {
    setAvailability((prevAvailability) => {
      const updatedAvailability = { ...prevAvailability };
      updatedAvailability[day][index][field] = value;
      return updatedAvailability;
    });
  };

  const renderDayAvailability = (day) => (
    <div key={day} className="mb-4">
      <h3 className="text-lg font-semibold">{dayNameMap[day]}</h3>
      {availability[day].map((slot, index) => (
        <div key={index} className="flex items-center">
          <input
            type="time"
            placeholder="Start Time"
            value={slot.startTime}
            onChange={(e) => handleSlotChange(day, index, 'startTime', e.target.value)}
            className="border rounded-md p-2"
          />
          <span className="mx-2">to</span>
          <input
            type="time"
            placeholder="End Time"
            value={slot.endTime}
            onChange={(e) => handleSlotChange(day, index, 'endTime', e.target.value)}
            className="border rounded-md p-2"
          />
          <button onClick={() => removeSlot(day, index)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addSlot(day)}>Add Slot</button>
    </div>
  );

  const daysInOrder = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
  const dayToInt = (day) => {
    switch (day) {
      case 'mon':
        return 1;
      case 'tue':
        return 2;
      case 'wed':
        return 3;
      case 'thur':
        return 4;
      case 'fri':
        return 5;
      case 'sat':
        return 6;
      case 'sun':
        return 7;
      default:
        return 0; // Return 0 or handle the case for an invalid day as needed
    }
  };
  

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
  
        // Prepare the availability data in the required format
        const availabilityData = [];
        daysInOrder.forEach((day, index) => {
          const dayData = {
            counsellorId: id,
            id: id, // Assuming id should be the same as counsellorId
            day: dayToInt(day), // Convert day string to integer
          };
          
          // Create time slots for the given day
          for (let i = 0; i < availability[day].length; i++) {
            dayData[`timeslot${i + 1}_S`] = availability[day][i].startTime;
            dayData[`timeslot${i + 1}_E`] = availability[day][i].endTime;
          }
  
          availabilityData.push(dayData);
        });
  
        // Send availabilityData to your server
        const response = await axios.post(
          'http://localhost:8080/api/v1/counsellor-availability/add-days',
          availabilityData,
          config
        );
  
        if (response.status === 200) {
          console.log('Availability saved successfully');
          // Clear the time slots
          setAvailability({
            mon: [],
            tue: [],
            wed: [],
            thur: [],
            fri: [],
            sat: [],
            sun: [],
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
