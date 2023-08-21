import React, { useState } from 'react';
import ClientButton from './ClientButton';

export default function ClientHistory() {
  const [selectedMode, setSelectedMode] = useState('music');

  const musicData = [
    {
      id: 1,
      avatar: '../../../src/assets/people01.png', // Use video thumbnail here
      name: 'Song 1', // Remove the 'name' and 'status' properties
      date: '2023.10.01',
    },
    // Add more music objects as needed
  ];

  const meditationData = [
    {
      id: 1,
      avatar: '../../../src/assets/people01.png', // Use video thumbnail here
      name: 'Meditation 1', // Remove the 'name' and 'status' properties
      date: '2023.10.01',
    },
    // Add more meditation objects as needed
  ];

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <h4 className="text-xl font-semibold text-left ml-5 ">Recent Activities</h4>

          <div className="flex justify-center mt-4">
            <button
              className={`mr-2 px-4 py-2 rounded-md ${
                selectedMode === 'music' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => handleModeChange('music')}
            >
              Music Videos
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-md ${
                selectedMode === 'meditation' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => handleModeChange('meditation')}
            >
              Meditation Exercise
            </button>
          </div>

          <div className="overflow-hidden pb-5 px-6">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b border-gray-200 font-medium dark:border-neutral-300">
                <tr>
                  <th scope="col" className="px-6 py-4"></th>
                  <th scope="col" className="px-6 py-4">
                    Video
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedMode === 'music'
                  ? musicData.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200 transition duration-300 ease-in-out hover:bg-neutral-50 hover:bg-neutral-300"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.date}</td>
                      </tr>
                    ))
                  : meditationData.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200 transition duration-300 ease-in-out hover:bg-neutral-50 hover:bg-neutral-300"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.date}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
