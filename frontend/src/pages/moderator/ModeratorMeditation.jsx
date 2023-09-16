import React, { useEffect, useState } from 'react';
import MeditationService from '../../services/MeditationService';
import { Link } from 'react-router-dom';
import { FiEdit3, FiTrash2 } from "react-icons/fi"
import axios from 'axios';

const ModeratorMeditation = () => {
  const [isLoading, setLoading] = useState(true);
  const [meditation, setMeditation] = useState([]);

  const deleteMeditation = async (id) => {
    try{
      const authData = localStorage.getItem('bauthData');
      if(authData) {
        const { accessToken } = JSON.parse(authData);
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        };
        //Send a request to update the status to "false"
        const response = await axios.delete(`http://localhost:8080/api/testing/meditation/${id}`, config);

        //check if status update was successful
        if (response.status === 200){
          setMeditation((prevMeditation) => 
          prevMeditation.map((item) =>
            item.id === id ? { ...item, status: false } : item 
          )
        );
      } else {
        console.error('Error deleting meditation');
      }
    }
  } catch (error) {
    console.error('Error updating meditation status:' , error);
  }
};

  const fetchMeditationData = async () => {
    try {
      console.log("Fetching meditation data...");
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
        const response = await axios.get(`http://localhost:8080/api/testing/meditation/all`, config);

        const fetchedMeditation = response.data.map(meditation => ({
          id: meditation.id,
          status: meditation.status,
          title: `${meditation.title}`,
          category: `${meditation.category}`,
          description: `${meditation.description}`,
          link: `${meditation.link}`
        }));

        setMeditation(fetchedMeditation);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching meditation data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeditationData();
  }, []);

  return (
    <div className="flex flex-col w-full mb-5 bg-white rounded-xl">

      <div className='m-5'>
        <Link to="/moderator/add-meditation/-1" className="p-2 text-white bg-blue-700 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black">
          Add Meditation
        </Link>
      </div>

      {/* <div className="grid grid-cols-1 gap-4 px-5 pb-5 md:grid-cols-2 lg:grid-cols-3"> */}
      <div className="grid grid-cols-1 gap-4 px-5 pb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {meditation
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
                  to={`/moderator/add-meditation/${item.id}`} 
                  className="flex items-center justify-center p-2 font-thin text-white bg-blue-700 border rounded-md text-md hover:bg-white hover:border-blue-700 hover:text-black"
                >
                  <FiEdit3 />
                </Link>
                <button
                  onClick={() => deleteMeditation(item.id)} 
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

export default ModeratorMeditation;
