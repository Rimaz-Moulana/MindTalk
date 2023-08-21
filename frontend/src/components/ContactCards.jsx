import React from 'react';
import { Link } from 'react-router-dom';

const ContactCards = ({ contactList }) => {
  contactList && console.log(contactList);

  return (
    <>
      {contactList?.map((contact, index) => (
        <Link
          key={index}
          to={"profile"}
          // to={`/profile/${contact.name.first}-${contact.name.last}`}
          className="block"
        >
          <figure className='bg-white rounded-lg shadow-md pt-7 pb-7'>
            <img
              alt="user"
              className='w-32 h-32 rounded-full mx-auto'
              src={contact.picture.large}
            />
            <figcaption className='text-center mt-5 flex-wrap'>
              <p className='text-gray-700 font-semibold text-xl mb-2'>
                {contact.name.first} {contact.name.last}
              </p>
              <p className='text-gray-500 truncate'>
                {contact.email}
              </p>
              <p className='text-gray-500'>
                {contact.cell} 
              </p>
              <p className='text-gray-500'>
                {contact.location.city}
              </p>
              <div className="flex justify-center mt-2 truncate">
                <Link
                  to={'appointments'} 
                  className="bg-blue-700 hover:bg-blue-900 text-white font-base p-2 rounded"
                >
                  Appointments
                </Link>
              </div>
            </figcaption>
          </figure>
        </Link>
      ))}
    </>
  );
};

export default ContactCards;
