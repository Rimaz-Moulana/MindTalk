import React from 'react';
import { Link } from 'react-router-dom';

const ClientCards = ({ clientList }) => {
  clientList && console.log(clientList);

  return (
    <>
      {clientList?.map((client, index) => (
        <Link
          key={index}
          to={"profile"}
          // to={`/profile/${contact.name.first}-${contact.name.last}`}
          className="block"
        >
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
          </figcaption>
        </figure>
        </Link>
      ))}
    </>
  );
};

export default ClientCards;
