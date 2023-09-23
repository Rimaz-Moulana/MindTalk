import React, { useState } from 'react';

const CounsellorAvailability = () => {
  const [availability, setAvailability] = useState({
    Monday: { startTime: '', endTime: '' },
    Tuesday: { startTime: '', endTime: '' },
    Wednesday: { startTime: '', endTime: '' },
    Thursday: { startTime: '', endTime: '' },
    Friday: { startTime: '', endTime: '' },
    Saturday: { startTime: '', endTime: '' },
    Sunday: { startTime: '', endTime: '' },
  });

  const handleAvailabilityChange = (day, field, value) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: { ...prevAvailability[day], [field]: value },
    }));
  };

  const renderDayAvailability = (day) => (
    <div key={day} className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{day}</h3>
      <div className="flex space-x-4">
        <input
          type="time"
          placeholder="Start Time"
          value={availability[day].startTime}
          onChange={(e) => handleAvailabilityChange(day, 'startTime', e.target.value)}
          className="border rounded-md p-2"
        />
        <input
          type="time"
          placeholder="End Time"
          value={availability[day].endTime}
          onChange={(e) => handleAvailabilityChange(day, 'endTime', e.target.value)}
          className="border rounded-md p-2"
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Set Your Availability</h2>
      {Object.keys(availability).map((day) => renderDayAvailability(day))}
      <button
        className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600"
        onClick={() => console.log(availability)}
      >
        Save
      </button>
    </div>
  );
};

export default CounsellorAvailability;
