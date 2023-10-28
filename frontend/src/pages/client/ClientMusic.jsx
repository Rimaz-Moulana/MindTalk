import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientMusic = () => {
  const [isLoading, setLoading] = useState(true);
  const [music, setMusic] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to 'all'
  const [searchKeyword, setSearchKeyword] = useState('');

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

  const filterMusicBySearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  // Filter the music based on selected category and search keyword
  const filteredMusic = music
    .filter((item) => {
      return (
        (selectedCategory === 'all' || item.category === selectedCategory) &&
        item.status &&
        (searchKeyword === '' || item.description.toLowerCase().includes(searchKeyword.toLowerCase()))
      );
    });

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col gap-4 w-full bg-white rounded-xl mb-5'>
        <h1 className='text-2xl font-bold pt-5 pl-5'>Music / Videos</h1>
        <div className="flex flex-wrap gap-4 pl-5 pr-5 pb-2">
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => filterMusicByCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            >
              <option value="all">All</option>
              <option value="Relaxing">Relaxing</option>
              <option value="Anxiety">Anxiety</option>
              <option value="Focus">Focus</option>
              <option value="Sleeping">Sleeping</option>
              <option value="Stress Releasing">Stress Releasing</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => filterMusicBySearch(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              placeholder="Search..."
            />
          </div>
        </div>

        {filteredMusic.length === 0 ? (
          <div className="p-5 text-center">
            <p className="text-gray-500 text-xl font-semibold">No matching videos found.</p>
            <p className="text-gray-400 mt-2">Try refining your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 pb-5">
            {filteredMusic.map((item, index) => (
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
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.category}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientMusic;
