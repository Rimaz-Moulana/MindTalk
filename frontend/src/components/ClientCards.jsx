import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import avatarPNG from '../assets/Chat/chatUser.png';
import axios from 'axios';

const ClientCards = ({ clientList }) => {
  clientList && console.log(clientList);

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetchUserDetailsForClients();
  }, [clientList]);

  const fetchUserDetailsForClients = async () => {
    const authData = localStorage.getItem('authData');
    if (authData) {
      const { accessToken } = JSON.parse(authData);
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };

      const updatedUserDetails = {};

      // Iterate through each client and fetch user details
      for (const client of clientList) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/v1/client/${client.userId}`,
            config
          );

          if (response.status === 200) {
            const userData = response.data;
            updatedUserDetails[client.userId] = {
              fname: userData.fname,
              lname: userData.lname,
              profilePhotoPath: userData.profilePhotoPath,
            };
          }
        } catch (error) {
          console.error(`Error fetching user data for user ${client.userId}:`, error);
        }
      }

      // Update the state with the fetched user details
      setUserDetails(updatedUserDetails);
    }
  };

  return (
    <div className='w-full mx-auto bg-white border border-gray-200 rounded-md shadow-lg overflow-x-auto'>
      <table className="w-full border-collapse table-auto">
        <tbody className='divide-y divide-gray-200'>
          
          {clientList?.map((client) => (
            <tr key={client.userId}>
              <td className="p-4">
                <img
                  alt="user"
                  className='w-20 h-20 mx-auto rounded-full'
                  src={
                    userDetails[client.userId]?.profilePhotoPath
                      ? `../../../src/assets/profilephotos/${userDetails[client.userId].profilePhotoPath}`
                      : avatarPNG
                  }
                  onError={(e) => {
                    e.target.src = avatarPNG;
                  }}
                />
              </td>
              <td className="p-4 whitespace-nowrap">
              <span className='font-semibold text-gray-800'>
                  {userDetails[client.userId]?.fname} {userDetails[client.userId]?.lname}
                </span>
              </td>
              <td className="flex p-4 space-x-2">
                {/* <Link
                  to={"profile"}
                  className="flex items-center justify-center px-4 py-2 font-semibold text-white bg-blue-700 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black"
                >
                  View Profile
                </Link> */}
                <Link
                  to={`/counsellor/view-client/${client.userId}`}
                  className="flex items-center justify-center px-4 py-2 mt-4 font-semibold text-white bg-blue-700 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black"
                >
                  View Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientCards;
