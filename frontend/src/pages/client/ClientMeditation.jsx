import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientMeditation = () => {
  const [isLoading, setLoading] = useState(true);
  const [meditation, setMeditation] = useState([]);

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
    <div className='flex flex-row'>
      <div className='w-full bg-white rounded-xl mb-5'>
        <h1 className='text-2xl font-bold pt-5 pl-5'>Meditation / Breathing Exercises</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 pb-5">
          {meditation
          .filter(item => {
            console.log("Filtering item:", item);
            return item.status;
          })
          .map((item, index) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  title={item.title}
                  src={item.link}
                  allowFullScreen
                  controls
                  className="w-full h-full rounded-md shadow-md"
                ></iframe>
              </div>
              <div className="text-lg font-semibold mb-2">{item.title}</div>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientMeditation;
