import React from 'react';
import { Link } from 'react-router-dom';

const ClientCards = ({ clientList }) => {
  clientList && console.log(clientList);

  return (
    
        // <Link
        //   key={index}
        //   to={"profile"}
        //   // to={`/profile/${contact.name.first}-${contact.name.last}`}
        //   className="block"
        // >
        // <figure key={index} className='bg-white rounded-lg shadow-md pt-7 pb-7'>
        //   <img
        //     alt="user"
        //     className='w-32 h-32 rounded-full mx-auto'
        //     src={client.picture.large}
        //   />
        //   <figcaption className='text-center mt-5 flex-wrap'>
        //     <p className='text-gray-700 font-semibold text-xl mb-2'>
        //       {client.name.first} {client.name.last}
        //     </p>
        //   </figcaption>
        // </figure>
        // </Link>

        <div className='w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200'>
          <table className="border-collapse border border-gray-300 text-sm w-full">
              {/* <thead>
                  <tr className="p-2 border border-1 text-sm font-thin text-gray-500">
                      <th className="border border-gray-300 p-2"></th>
                      <th className="border border-gray-300 p-2">Name</th>
                      <th className="border border-gray-300 p-2"></th>
                  </tr>
              </thead> */}
              <tbody className='divide-y divide-gray-100'>
                {clientList?.map((client, index) =>
                      <tr key={clientList.id} >
                          <td className="p-2 "><img
                            alt="user"
                            className='w-20 h-20 rounded-full mx-auto'
                            src={client.picture.large}
                          /></td>
                          <td className="p-2 whitespace-nowrap">{client.name.first} {client.name.last}</td>
                          <td className="p-2 flex space-x-1">
                            <Link
                                to={"profile"}
                                className="bg-blue-700 p-2 text-white text-md rounded-md font-thin border hover:bg-white hover:border-blue-700 hover:text-black flex items-center justify-center"
                            >
                                View
                            </Link>
                          </td>

                      </tr>
                  )}
              </tbody>
          </table>
        </div>
  )
                          }
export default ClientCards;
