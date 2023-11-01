import React, { useEffect, useState } from 'react'
import blogbg from '../assets/blogbg.jpg'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CoverImageUpload = ({ handleCoverImageChange, uploadCoverImage, coverImagePath }) => {
    
  const [coverImage, setCoverImage] = useState(null);
  const { id } = useParams();
  const imagePath = coverImagePath ? '../src/assets/coverImages/' + coverImagePath : blogbg;

  console.log("cover image path passed:", coverImagePath)

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

        const response = await axios.get(`http://localhost:8080/api/v1/client/${id}/coverImagePath`, config);

        if (response.status === 200){
          const photoData = response.data;
          console.log('Cover image data:', photoData);
          console.log('cover image path:', photoData.coverImagePath);
          setCoverImage(
            photoData.cover_image_path
          );
        }
      }
    } catch (error) {
      console.error('Error fetching cover image:', error);
    }
  };

        return (
            <>
            <input
              type="file"
              id="coverImage"
              accept="image/*"
                    onChange={handleCoverImageChange}
                    onSubmit={uploadCoverImage}
                />
            </>
        )
        };


export default CoverImageUpload

