import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientMusic = () => {
  const [isLoading, setLoading] = useState(true);
  const [music, setMusic] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to 'all'

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
        const response = await axios.get(
          `http://localhost:8080/api/testing/music/all`, 
          config
        );

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
    } 
    catch (error) {
      console.error("Error fetching music:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMusicData();
  }, []);

  const filterMusicByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    // <div className='rounded-xl'>
    //   {/* Add filtering and other UI elements here */}
    //   <section className='md:flex gap-5 sm:gap-y-5'>
    //     {/* Add filtering form or select elements here */}
    //   </section>

    //   <section className='pt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-8 p-5 pt-0'>
    //     {music.map((item, index) => (
    //       <iframe 
    //         key={index} 
    //         className='w-full aspect-[3/2]' 
    //         src={item.link} 
    //         title={`video${index + 1}`} 
    //         allowFullScreen
    //       > 
    //       </iframe>
    //     ))}
    //   </section>
    // </div>

    <div className='flex flex-row'>

      <div className='flex flex-col gap-4 w-full bg-white rounded-xl mb-5'>
        <h1 className='text-2xl font-bold pt-5 pl-5'>Music / Videos</h1>

        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-8 p-5 pt-0'>
          {music.map((item, index) => (
            <iframe
              key={index}
              className="w-full aspect-[3/2]"
              src={item.link}
              title={`video${index+1}`}
              allowfullscreen>
            </iframe>
          ))}
        </div> */}

        <div className="py-2 pl-5">
          <label className="pr-2">Filter by Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => filterMusicByCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Relaxing">Relaxing</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Focus">Focus</option>
            <option value="Sleeping">Sleeping</option>
            <option value="Stress Releasing">Stress Releasing</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 pb-5">
        {music
            .filter((item) => {
              return (
                (selectedCategory === 'all' || item.category === selectedCategory) &&
                item.status
              );
            })
          .map((item, index) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9 mb-4"> {/* Updated aspect ratio here */}
                <iframe
                  title={item.title}
                  src={item.link}
                  allowFullScreen
                  controls
                  className="w-full h-full rounded-md shadow-md"
                >
                </iframe>
                {/* <embed
                  src={item.link}
                  wmode="opaque"
                  type='video/mp4'
                  width='100%'
                  height='100%'
                  allow='autoplay; encrypted-media; picture-in-picture'
                  title={item.title}
                /> */}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.category}</p>
              {/* <p className="text-gray-700 mb-4">{item.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientMusic;
