import React from 'react';
import { Link } from 'react-router-dom';
import avatarPNG from '../assets/Chat/chatUser.png';

const ClientCards = ({ clientList }) => {
  clientList && console.log(clientList);

  return (
    <div className='w-full mx-auto bg-white border border-gray-200 rounded-md shadow-lg overflow-x-auto'>
      <table className="w-full border-collapse table-auto">
        <tbody className='divide-y divide-gray-200'>
          {clientList?.map((client, index) => (
            <tr key={clientList.id}>
              <td className="p-4">
                <img
                  alt="user"
                  className='w-20 h-20 mx-auto rounded-full'
                  src={avatarPNG}
                  onError={(e) => {
                    e.target.src = avatarPNG;
                  }}
                />
              </td>
              <td className="p-4 whitespace-nowrap">
                <span className='font-semibold text-gray-800'>
                  {client.fname} {client.lname}
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
                  to={`/counsellor/view-client/${client.clientId}`}
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
