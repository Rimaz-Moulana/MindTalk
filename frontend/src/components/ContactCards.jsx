import React from 'react';
import { Link } from 'react-router-dom';
import avatarPNG from '../assets/Chat/chatUser.png';

const ContactCards = ({ contactList }) => {
  const handleAppointmentClick = (id, name) => {
    localStorage.setItem('appcounsellorId', id);
    localStorage.setItem('appcounsellorName', name);
  };

  return (
    <>
      {contactList?.map((contact) => {
        // Log the image path to the console
        console.log("Image Path:", contact.license_image);

        return (
          <div key={contact.id} className="block">
            <Link to={`/client/clientcounsellors/profile/${contact.id}`}>
              <div className='bg-white rounded-lg shadow-md pt-7 pb-7'>
                <img
                  alt="user"
                  className='w-32 h-32 rounded-full mx-auto'
                  src={contact.license_image || avatarPNG} // Use the default avatar image for all contacts
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
                      onClick={() => handleAppointmentClick(contact.id, contact.name)}
                      className="bg-blue-700 hover.bg-blue-900 text-white font-base p-2 rounded"
                    >
                      Schedule Appointment
                    </Link>
                  </div>
                </figcaption>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ContactCards;
