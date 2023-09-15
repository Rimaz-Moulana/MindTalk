import React, { useEffect, useState } from 'react';
import MusicService from '../../services/MusicService';
import { Link } from 'react-router-dom';
import { FiEdit3, FiTrash2 } from "react-icons/fi"
import axios from 'axios';

const ModeratorMusic = () => {
  const [isLoading, setLoading] = useState(true);
  const [music, setMusic] = useState([]);

  // Define the delete API endpoint here
  const deleteMusicEndpoint = 'http://localhost:8080/api/testing/music/';

  // const deleteMusic = (id) => {
  //   axios.delete(deleteMusicEndpoint + id) // Use the delete endpoint here
  //     .then(res => {
  //       setMusic(prevMusic => prevMusic.filter(item => item.id !== id));
  //     })
  //     .catch(error => {
  //       console.error("Error deleting music:", error);
  //     });
  // };
  
  // const deleteMusic = async (id) => {
  //   try {
  //     await axios.delete(deleteMusicEndpoint + id); // Use the delete endpoint here
  //     setMusic(prevMusic => prevMusic.filter(item => item.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting music:", error);
  //   }
  // };

  // const deleteMusic = async (id) => {
  //   try{
  //     console.log("Fetching delete music data...");
  //     const authData = localStorage.getItem('authData');
  //     if (authData) {
  //       const { accessToken } = JSON.parse(authData);
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           'Content-Type': 'application/json'
  //         },
  //         withCredentials: true
  //       };
  //       console.log(`Deleting music...`+id);
  //       const response = await axios.delete(`http://localhost:8080/api/testing/music/` + id, config);

  //       setMusic(prevMusic => prevMusic.filter(item => item.id !== id));
  //       // window.location.href = '/moderator/moderatormusic';

  //     }
  //   } catch (error) {
  //     console.error("Error fetching delete music:", error);
  //     setLoading(false);
  //   }
  // };

  // const deleteMusic = async (id) => {
  //   try{
  //     const authData = localStorage.getItem('bauthData');
  //     if(authData) {
  //       const { accessToken } = JSON.parse(authData);
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           'Content-Type': 'application/json'
  //         },
  //         withCredentials: true
  //       };
        //Send a request to update the status to "false"
        // const response = await axios.delete(`http://localhost:8080/api/testing/music/${id}`, config);

        //check if status update was successful
//         if (response.status === 200){
//           setMusic((prevMusic) => 
//           prevMusic.map((item) =>
//             item.id === id ? { ...item, status: false } : item 
//           )
//         );
//       } else {
//         console.error('Error deleting music');
//       }
//     }
//   } catch (error) {
//     console.error('Error updating music status:' , error);
//   }
// };

  // const markMusicAsInactive = async (id) => {
  //   try {
  //     console.log("Marking music as inactive...");
  //     const authData = localStorage.getItem('authData');
  //     if (authData) {
  //       const { accessToken } = JSON.parse(authData);
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           'Content-Type': 'application/json',
  //         },
  //         withCredentials: true,
  //       };
  //       console.log(`Marking music as inactive...` + id);
  //       const response = await axios.put(
  //         `http://localhost:8080/api/testing/music/${id}`,
  //         null, // You can pass data here if needed
  //         config
  //       );
  
  //       // Handle the response as needed
  //       if (response.status === 204) {
  //         // Successfully marked as inactive
  //         // You can update the UI or perform any other actions here
  //         setMusic((prevMusic) =>
  //           prevMusic.map((item) =>
  //             item.id === id ? { ...item, status: false } : item
  //           )
  //         );
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error marking music as inactive:", error);
  //   }
  // };
  

  const fetchMusicData = async () => {
    try {
      console.log("Fetching music data...");
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        };
        const response = await axios.get(`http://localhost:8080/api/testing/music/all`, config);

        const fetchedMusic = response.data.map(music => ({
          id: music.id,
          status: music.status,
          title: `${music.title}`,
          category: `${music.category}`,
          description: `${music.description}`,
          link: `${music.link}`
        }));

        setMusic(fetchedMusic);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching music:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMusicData();
  }, []);

  console.log("Music data before filtering:", music);

  return (
    <div className="flex flex-col w-full mb-5 bg-white rounded-xl">

      <div className='m-5'>
        <Link to="/moderator/add-music/-1" className="p-2 text-white bg-blue-700 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black">
          Add Music
        </Link>
      </div>

      {/* <div className="grid grid-cols-1 gap-4 px-5 pb-5 md:grid-cols-2 lg:grid-cols-3"> */}
      <div className="grid grid-cols-1 gap-4 px-5 pb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {music
          .filter(item => {
            console.log("Filtering item:", item);
            return item.status;
          })
          .map((item, index) => (
            <div key={item.id} className="p-4 bg-gray-100 rounded-md shadow-md">
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="mb-2 text-gray-600">{item.category}</p>
              <p className="mb-4 text-gray-700">{item.description}</p>
              <div className="mb-4 aspect-w-16 aspect-h-9">
                <iframe
                  title={item.title}
                  src={item.link}
                  allowFullScreen
                  className="w-full h-full rounded-md shadow-md"
                >
                </iframe>
              </div>
              <div className="flex space-x-2">
                <Link
                  to={`/moderator/add-music/${item.id}`} 
                  className="flex items-center justify-center p-2 font-thin text-white bg-blue-700 border rounded-md text-md hover:bg-white hover:border-blue-700 hover:text-black"
                >
                  <FiEdit3 />
                </Link>
                <button
                  onClick={() => deleteMusic(item.id)} 
                  className='p-2 font-thin text-white bg-red-700 border rounded-md text-md hover:bg-white hover:border-red-700 hover:text-black'
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ModeratorMusic;
