import React, { useState } from 'react';

export default function CounsellorTest() {
  const testResults = [
    {
      id: 1,
      avatar: '../../../src/assets/people01.png',
      name: 'Mark ',
      date: '2023.10.01',
      status: 'Severe',
    }, {
        id: 2,
        avatar: '../../../src/assets/people02.png',
        name: 'Jake ',
        date: '2023.10.01',
        status: 'mild',
      },
      {
        id: 3,
        avatar: '../../../src/assets/people03.png',
        name: 'Larry ',
        date: '2023.10.05',
        status: 'mild',
      },
      {
        id: 4,
        avatar: '../../../src/assets/Chat/profilePic1.jpg',
        name: 'Marie ',
        date: '2023.10.08',
        status: 'Severe',
      },
    // Add more test result objects as needed
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <h4 className="text-xl font-semibold text-left ml-5">Test Results</h4>
          <div className="my-2" />
          <div className="overflow-hidden pb-5 px-6">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b border-gray-200 font-medium dark:border-neutral-300">
                <tr>
                  <th scope="col" className="px-6 py-4">
                  
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {testResults.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 transition duration-300 ease-in-out hover:bg-neutral-50 hover:bg-neutral-300"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <div className="flex items-center">
                        <img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.date}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.status}</td>
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
