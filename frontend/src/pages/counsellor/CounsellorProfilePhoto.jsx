import React, { useEffect, useState } from 'react';
// import logo from '../../assets/logo.png';
import dp from '../../assets/dp.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CounsellorProfilePhoto = ({ handleProfilePhotoChange, uploadProfilePhoto, profilePhotoPath }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const { id } = useParams();
  const imagePath = profilePhotoPath ? '../../../src/assets/profilephotos/' + profilePhotoPath : dp;
  //const imagePath = '../../../src/assets/profilephotos/' + profilePhotoPath ;

  console.log("profile photo path passed: gg", profilePhotoPath)

  useEffect(() => {
    fetchPhotoData();
  }, [id]);

  const fetchPhotoData = async () => {
    try {
      console.log(id);
      const authData = localStorage.getItem('authData');
      if (authData) {
        const {accessToken} = JSON.parse(authData);
        const config = {
          headers: { 
            Authorization: `Bearer ${accessToken}`,
            
          },
          withCredentials: true
        };

        const response = await axios.get(`http://localhost:8080/api/counsellor/details/profilePhotoPath/${id}`, config);

        if (response.status === 200){
          const photoData = response.data;
          console.log('Profile photo data:', photoData);
          console.log('profile photo path:', photoData.profilePhotoPath);
          setProfilePhoto(
            photoData.profile_photo_path
          );
        }
      }
    } catch (error) {
      console.error('Error fetching profile photo:', error);
    }
  };

  // useEffect(() => {
  //   // Make an HTTP request to fetch the profile photo from your API
  //   axios.get(`http://localhost:8080/api/v1/client/${id}/profilePhotoPath`)
  //     .then((response) => {
  //       const imageData = response.data;

  //       // Set the profile photo using the fetched data
  //       setProfilePhoto(imageData);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching profile photo:', error);
  //     });
  // }, []);

  return (
    <div className="pb-5 overflow-hidden text-center bg-white shadow-md rounded-xl">
      <div className="w-full h-48 bg-center bg-no-repeat bg-cover bg-sky-500" style={{ background: 'url("https://source.unsplash.com/650x200?sky")' }}></div>
      <img src={imagePath} alt="profile photo" className="w-20 h-20 mx-auto -mt-10 rounded-full" />
      {/* <span className="text-xl font-bold text-blue-900">John Doe</span> */}
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

export default CounsellorProfilePhoto;