import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientMusic= () => {
  const [isLoading, setLoading] = useState(true);
  const [music, setMusic] = useState([]);

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
            title: `${music.title}`,
            category: `${music.category}`,
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

  return (
    <div className='rounded-xl'>
      {/* Add filtering and other UI elements here */}
      <section className='md:flex gap-5 sm:gap-y-5'>
        {/* Add filtering form or select elements here */}
      </section>

      <section className='pt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-8 p-5 pt-0'>
        {music.map((item, index) => (
          <iframe 
            key={index} 
            className='w-full aspect-[3/2]' 
            src={item.link} 
            title={`video${index + 1}`} 
            allowFullScreen
          > 
          </iframe>
        ))}
      </section>
    </div>
  );
}

export default ClientMusic;
