import React from 'react';
import { Link } from 'react-router-dom';
import avatarPNG from '../assets/Chat/chatUser.png';

const ContactCards = ({ contactList }) => {
  const handleAppointmentClick = (id) => {
    localStorage.setItem('appcounsellorId', id);
  };

  return (
    <>
      {contactList?.map((contact) => (
        <div key={contact.id} className="block">
          <div className='bg-white rounded-lg shadow-md pt-7 pb-7'>
            <img
              alt="user"
              className='w-32 h-32 rounded-full mx-auto'
              src={contact.dp} // Use the default avatar image for all contacts
              onError={(e) => {
                e.target.src = avatarPNG;
              }}
            />
            <figcaption className='text-center mt-5 flex-wrap'>
              <p className='text-gray-700 font-semibold text-xl mb-2'>
                {contact.name}
              </p>
              <div className="flex justify-center mt-2 truncate">
                <Link
                  to={`/client/clientappointments`}
                  onClick={() => handleAppointmentClick(contact.id)}
                  className="bg-blue-700 hover:bg-blue-900 text-white font-base p-2 rounded"
                >
                  Appointments
                </Link>
              </div>
            </figcaption>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactCards;
