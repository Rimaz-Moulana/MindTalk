import React from 'react';
import { Link } from 'react-router-dom';
import avatarPNG from '../assets/Chat/chatUser.png';

const ClientCards = ({ clientList }) => {
  clientList && console.log(clientList);

  return (
    <div className='w-full mx-auto bg-white shadow-lg rounded-md border border-gray-200'>
      <table className="border-collapse w-full">
        <tbody className='divide-y divide-gray-200'>
          {clientList?.map((client, index) => (
            <tr key={clientList.id}>
              <td className="p-4">
                <img
                  alt="user"
                  className='w-20 h-20 rounded-full mx-auto'
                  src={avatarPNG}
                  onError={(e) => {
                    e.target.src = avatarPNG;
                  }}
                />
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className='text-gray-800 font-semibold'>
                  {client.fname} {client.lname}
                </span>
              </td>
              <td className="p-4 flex space-x-2">
                <Link
                  to={"profile"}
                  className="bg-blue-700 text-white px-4 py-2 rounded-md border font-semibold hover:bg-white hover:border-blue-700 hover:text-black flex items-center justify-center"
                >
                  View Profile
                </Link>
                <Link
                  to={`/counsellor/view-client/${client.id}`}
                  className="bg-blue-700 text-white px-4 py-2 rounded-md border font-semibold hover:bg-white hover:border-blue-700 hover:text-black flex items-center justify-center"
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
