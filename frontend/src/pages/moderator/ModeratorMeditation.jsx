import React, { useEffect, useState } from 'react';
import MeditationService from '../../services/MeditationService';
import { Link } from 'react-router-dom';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

function ModeratorMeditation() {
  const [meditation, setMeditation] = useState([]);

  const deleteMeditation = (id) => {
    MeditationService.deleteMeditation(id).then((res) => {
      setMeditation((prevMeditation) => prevMeditation.filter((item) => item.id !== id));
    });
  };

  useEffect(() => {
    MeditationService.getMeditation().then((res) => {
      setMeditation(res.data);
    });
  }, []);

  return (
    <div className="bg-white rounded-xl mb-5 p-5">
      <div className="mb-4">
        <Link
          to="/moderator/add-meditation/-1"
          className="bg-blue-700 rounded-md p-2 border text-white hover:bg-white hover:border-blue-700 hover:text-black"
        >
          Add Meditation
        </Link>
      </div>

      <ul className="space-y-4">
        {meditation.map((meditation) => (
          <li key={meditation.id} className="flex border-b pb-4">
            {meditation.link && (
              <div className="aspect-w-16 aspect-h-9 flex-shrink-0">
                <iframe
                  title={meditation.title}
                  src={meditation.link}
                  allowFullScreen
                  className="w-full h-full rounded-md shadow-md"
                ></iframe>
              </div>
            )}
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{meditation.title}</h3>
              <p className="text-gray-600 mb-1">{meditation.category}</p>
              <p className="text-gray-700 mb-2">{meditation.description}</p>
              <div className="flex space-x-4">
                <Link
                  to={`/moderator/add-meditation/${meditation.id}`}
                  className="bg-blue-700 p-2 text-white text-md rounded-md font-thin border hover:bg-white hover:border-blue-700 hover:text-black flex items-center justify-center"
                >
                  <FiEdit3 />
                </Link>
                <button
                  onClick={() => deleteMeditation(meditation.id)}
                  className="bg-red-700 p-2 text-white text-md rounded-md font-thin border hover:bg-white hover:border-red-700 hover:text-black"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModeratorMeditation;
