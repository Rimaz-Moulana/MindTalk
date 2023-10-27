import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import dp from '../../assets/dp.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfilePhoto = ({ handleProfilePhotoChange, uploadProfilePhoto }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Make an HTTP request to fetch the profile photo from your API
    axios.get(`http://localhost:8080/api/v1/client/${id}/profilePhotoPath`)
      .then((response) => {
        const imageData = response.data;

        // Set the profile photo using the fetched data
        setProfilePhoto(imageData);
      })
      .catch((error) => {
        console.error('Error fetching profile photo:', error);
      });
  }, []);

  return (
    <div className="pb-5 overflow-hidden text-center bg-white shadow-md rounded-xl">
      <div className="w-full h-48 bg-center bg-no-repeat bg-cover bg-sky-500" style={{ background: 'url("https://source.unsplash.com/650x200?sky")' }}></div>
      <img src={profilePhoto ? URL.createObjectURL(profilePhoto) : dp} alt="profile photo" className="w-20 h-20 mx-auto -mt-10 rounded-full" />
      <span className="text-xl font-bold text-blue-900">John Doe</span>
      <form onSubmit={uploadProfilePhoto}>
        <div className="mb-4">
          <div className="mt-2">
            <input
              type="file"
              id="profilePhoto"
              accept="image/*"
              onChange={handleProfilePhotoChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-2 text-sm font-semibold text-white bg-blue-900 rounded-lg shadow-sm hover:bg-blue-700"
        >
          Upload Profile Photo
        </button>
      </form>
    </div>
  );
};

export default ProfilePhoto;