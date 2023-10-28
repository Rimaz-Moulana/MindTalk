import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientMeditation = () => {
  const [isLoading, setLoading] = useState(true);
  const [meditation, setMeditation] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to 'all'
  const [searchKeyword, setSearchKeyword] = useState('');

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

  const filterMeditationByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filterMeditationBySearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Meditation / Breathing Exercises</h1>

        <div className="flex flex-wrap gap-4 pl-5 pr-5 pb-2">
          <div >
            {/* <label className="pr-2">Filter by Category:</label> */}
            <select
              value={selectedCategory}
              onChange={(e) => filterMeditationByCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            >
              <option value="all">All</option>
              <option value="Mindfulness">Mindfulness</option>
              <option value="Breathing Exercises">Breathing Exercises</option>
              <option value="Guided Meditation">Guided Meditation</option>
              <option value="Sleep Meditation">Sleep Meditation</option>
              <option value="Stress Relief">Stress Relief</option>
            </select>
        </div>

        <div >
            {/* <label className="pr-2">Search by Description:</label> */}
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => filterMeditationBySearch(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meditation
            .filter((item) => {
              return (
                (selectedCategory === 'all' || item.category === selectedCategory) &&
                item.status &&
                (searchKeyword === '' || item.description.toLowerCase().includes(searchKeyword.toLowerCase()))
              );
            })
            .map((item, index) => (
              <div key={item.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                <iframe
                  title={item.title}
                  src={item.link}
                  allowFullScreen
                  controls
                  className="w-full h-48 md:h-56 rounded-t-lg"
                ></iframe>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMeditation;
