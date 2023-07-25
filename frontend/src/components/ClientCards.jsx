import React from 'react';
import { Link } from 'react-router-dom';

const ClientCards = ({ clientList }) => {
  clientList && console.log(clientList);

  return (
    <>
      {clientList?.map((client, index) => (
        <figure key={index} className='bg-white rounded-lg shadow-md pt-7 pb-7'>
          <img
            alt="user"
            className='w-32 h-32 rounded-full mx-auto'
            src={client.picture.large}
          />
          <figcaption className='text-center mt-5 flex-wrap'>
            <p className='text-gray-700 font-semibold text-xl mb-2'>
              {client.name.first} {client.name.last}
            </p>
            <div className="flex justify-center gap-10 m-5 truncate">
              <Link
                to={`profile`}
                // to={`clientcounsellorprofile/${contact.name.first}-${contact.name.last}`}
                className="bg-blue-700 hover:bg-blue-900 text-white font-base p-2 rounded"
              >
                Profile
              </Link>
            </div>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default ClientCards;
