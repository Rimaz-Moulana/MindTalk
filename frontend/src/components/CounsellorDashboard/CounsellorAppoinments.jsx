import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CounsellorAppointments() {
  const [requests, setRequests] = useState([]);
  const [userFullNames, setUserFullNames] = useState({});

  useEffect(() => {
    fetchAppointmentRequests();
  }, []);

  const fetchAppointmentRequests = async () => {
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
          `http://localhost:8080/api/client/appointment-requests/get-requests/counsellors/${id}`,
          config
        );

        if (response.status === 200) {
          console.log('Response Data:', response.data);
          setRequests(response.data); // Set the requests in the state
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleAcceptRequest = async (requestId) => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken} = JSON.parse(authData);

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };
        console.log(requestId);
        const response = await axios.post(
          `http://localhost:8080/api/client/appointment-requests/accept-appointment-request/${requestId}`,{},
          config
        );
        if (response.status === 200) {
          console.log('Request accepted successfully.');
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

    
  };
  const handleRejectRequest = async (requestId) => {
    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken} = JSON.parse(authData);

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };
        console.log(requestId);
        const response = await axios.post(
          `http://localhost:8080/api/client/appointment-requests/reject-appointment-request/${requestId}`,{},
          config
        );
        if (response.status === 200) {
          console.log('Request rejected successfully.');
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

    
  };

// ...

return (
  <div className="flex flex-col">
    <div className="bg-white rounded-xl md:col-span-3">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <h4 className="text-xl font-semibold text-left ml-5">Appointments</h4>
        <div className="my-2" />
        <div className="overflow-hidden pb-5 px-6">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b border-gray-200 font-medium dark:border-neutral-300">
              <tr>
                <th scope="col" className="px-6 py-4">
                  UserId
                </th>
                <th scope="col" className="px-6 py-4">
                  Date
                </th>
                <th scope="col" className="px-6 py-4">
                  Time
                </th>
                <th scope="col" className="px-2 py-4">
                </th>
                <th scope="col" className="px-2 py-4">
                </th>
              </tr>
            </thead>
            <tbody>
              {requests
                .filter((request) => request.accepted === false && request.requested === true)
                .map((request) => (
                  <tr
                    key={request.requestId}
                    className="border-b border-gray-200 transition duration-300 ease-in-out hover:bg-neutral-50 hover-bg-neutral-300"
                  >
                    <td className="whitespace-nowrap px-6 py-4">{request.userId}</td>
                    <td className="whitespace-nowrap px-6 py-4">{request.date}</td>
                    <td className="whitespace-nowrap px-6 py-4">{request.timeSlot}</td>
                    <td className="whitespace-nowrap px-2 py-4">
                    <button
                        onClick={() => handleAcceptRequest(request.requestId)}
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Accept
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-2 py-4">
                    <button
                        onClick={() => handleRejectRequest(request.requestId)}
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Reject
                      </button>
                    </td>
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
