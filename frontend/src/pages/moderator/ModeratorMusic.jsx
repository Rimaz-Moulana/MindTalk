import React, { useEffect, useState } from 'react';
import MusicService from '../../services/MusicService';
import { Link } from 'react-router-dom';
import { FiEdit3, FiTrash2 } from "react-icons/fi"

function ModeratorMusic() {

  const [music, setMusic] = useState([]);

  const deleteMusic = (id) => {
        MusicService.deleteMusic(id).then(res => {
            setMusic(prevMusic => prevMusic.filter(item => item.id !== id));
        });
    };

  useEffect(() => {
    MusicService.getMusic().then(res => {
        setMusic(res.data);
    });
  }, []);

  return (
    
      <div className="flex flex-col w-full bg-white rounded-xl mb-5">

        <div className='m-5'>
            <Link to="/moderator/add-music/-1" className="bg-blue-700 rounded-md p-2 border text-white hover:bg-white hover:border-blue-700 hover:text-black">
                Add Music
            </Link>
        </div>

        <div className="px-5 pb-5">
          <table className="border-collapse border border-gray-300 text-sm">
              <thead>
                  <tr className="p-2 border border-1 text-sm font-thin text-gray-500">
                      <th className="border border-gray-300 p-2">Title</th>
                      <th className="border border-gray-300 p-2">Category</th>
                      <th className="border border-gray-300 p-2">Description</th>
                      <th className="border border-gray-300 p-2">Link</th>
                      <th className="border border-gray-300 p-2">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {music.map(music =>
                      <tr key={music.id} className="border border-gray-300">
                          <td className="border border-gray-300 p-2">{music.title}</td>
                          <td className="border border-gray-300 p-2">{music.category}</td>
                          <td className="border border-gray-300 p-2">{music.description}</td>
                          <td className="border border-gray-300 p-2">
                              {music.link && (
                                  <iframe
                                      title={music.title}
                                      width="200"
                                      height="100"
                                      src={music.link}
                                      allowFullScreen
                                  ></iframe>
                              )}
                          </td>
                          <td className="p-2 flex space-x-1">
                            <Link
                                to={`/moderator/add-music/${music.id}`}
                                className="bg-blue-700 p-2 text-white text-md rounded-md font-thin border hover:bg-white hover:border-blue-700 hover:text-black flex items-center justify-center"
                            >
                                <FiEdit3 />
                            </Link>
                            <button
                                onClick={() => deleteMusic(music.id)}
                                className='bg-red-700 p-2 text-white text-md rounded-md font-thin border hover:bg-white hover:border-red-700 hover:text-black'
                            >
                                <FiTrash2 />
                            </button>
                          </td>

                      </tr>
                  )}
              </tbody>
          </table>
        </div>

      </div>

  );
}

export default ModeratorMusic;