import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatarPNG from '../assets/Chat/chatUser.png';

const ContactCards = ({ contactList }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleAppointmentClick = (id, name) => {
    localStorage.setItem('appcounsellorId', id);
    localStorage.setItem('appcounsellorName', name);
  };

  // Filter the contactList based on the search query
  const filteredContacts = contactList.filter((contact) => {
    return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="mb-4 ">
        <input
          type="text"
          placeholder="Search..."
          className=" border border-gray-300 rounded-md py-2 px-3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredContacts.map((contact) => {
          // Log the image path to the console
          console.log("Image Path:", contact.license_image);

          return (
            <div key={contact.id} className="bg-white rounded-lg shadow-md pt-7 pb-7">
              <Link to={`/client/clientcounsellors/profile/${contact.id}`}>
                <img
                  alt="user"
                  className="w-32 h-32 rounded-full mx-auto"
                  src={contact.license_image || avatarPNG} // Use the default avatar image for all contacts
                  onError={(e) => {
                    e.target.src = avatarPNG;
                  }}
                />
                <figcaption className="text-center mt-5 flex-wrap">
                  <p className="text-gray-700 font-semibold text-xl mb-2">
                    {contact.name}
                  </p>
                  <div className="flex justify-center mt-2 truncate">
                    <Link
                      to={`/client/clientappointments`}
                      onClick={() => handleAppointmentClick(contact.id, contact.name)}
                      className="bg-blue-700 hover:bg-blue-900 text-white font-base p-2 rounded"
                    >
                      Schedule Appointment
                    </Link>
                  </div>
                </figcaption>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactCards;
