import React, { useEffect, useState } from 'react';
import MeditationService from '../../services/MeditationService';
import { Link } from 'react-router-dom';
import { FiEdit3, FiTrash2 } from "react-icons/fi"

function ModeratorMeditation() {

  const [meditation, setMeditation] = useState([]);

  const deleteMeditation = (id) => {
        MeditationService.deleteMeditation(id).then(res => {
            setMeditation(prevMeditation => prevMeditation.filter(item => item.id !== id));
        });
    };

  useEffect(() => {
    MeditationService.getMeditation().then(res => {
        setMeditation(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col w-full bg-white rounded-xl mb-5">

      <div className='m-5'>
          <Link to="/moderator/add-meditation/-1" className="bg-blue-700 rounded-md p-2 border text-white hover:bg-white hover:border-blue-700 hover:text-black">
              Add Meditation
          </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 pb-5">
        {meditation.map(meditation => (
          <div key={meditation.id} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">{meditation.title}</h3>
            <p className="text-gray-600 mb-2">{meditation.category}</p>
            <p className="text-gray-700 mb-4">{meditation.description}</p>
            {meditation.link && (
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  title={meditation.title}
                  src={meditation.link}
                  allowFullScreen
                  className="w-full h-full rounded-md shadow-md"
                ></iframe>
              </div>
            )}
            <div className="flex space-x-2">
              <Link
                to={`/moderator/add-meditation/${meditation.id}`}
                className="bg-blue-700 p-2 text-white text-md rounded-md font-thin border hover:bg-white hover:border-blue-700 hover:text-black flex items-center justify-center"
              >
                <FiEdit3 />
              </Link>
              <button
                onClick={() => deleteMeditation(meditation.id)}
                className='bg-red-700 p-2 text-white text-md rounded-md font-thin border hover:bg-white hover:border-red-700 hover:text-black'
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
