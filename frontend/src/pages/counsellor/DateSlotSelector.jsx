import React, { useState } from 'react';

const DateSlotSelector = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleAddSlot = () => {
    if (selectedDate && startTime && endTime) {
      const newSlot = {
        date: selectedDate,
        startTime,
        endTime,
      };
      setSelectedSlots([...selectedSlots, newSlot]);
      // Clear the input fields after adding a slot
      setSelectedDate('');
      setStartTime('');
      setEndTime('');
    }
  };

  const handleRemoveSlot = (index) => {
    const updatedSlots = [...selectedSlots];
    updatedSlots.splice(index, 1);
    setSelectedSlots(updatedSlots);
  };

  const isAddAllSlotsButtonVisible = selectedSlots.length > 0;

  const handleAddAllSlots = () => {
    // Add logic to add all selected slots here
    console.log("Adding all slots:", selectedSlots);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Add Externally Booked Slots</h2>
      <div className="mb-4 flex items-center space-x-4">
        <label className="block font-semibold mb-2">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded-md p-2"
        />
      </div>
      <div className="mb-4 flex items-center space-x-4">
        <label className="block font-semibold mb-2">Select Time:</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="border rounded-md p-2"
        />
        <span className="mx-2">to</span>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="border rounded-md p-2"
        />
      </div>
      <button
        className="bg-blue-700 text-white rounded-full px-4 py-2 hover:bg-blue-600 block mx-auto"
        onClick={handleAddSlot}
      >
        Select Slot
      </button>
      {selectedSlots.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Selected Slots:</h3>
          <ul>
            {selectedSlots.map((slot, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  {slot.date} | {slot.startTime} to {slot.endTime}
                </span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveSlot(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {isAddAllSlotsButtonVisible && (
            <button
              className="bg-blue-700 text-white rounded-full px-4 py-2 hover:bg-blue-600 block mx-auto mt-4"
              onClick={handleAddAllSlots}
            >
              Add All Slots
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DateSlotSelector;
