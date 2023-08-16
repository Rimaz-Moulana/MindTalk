import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MusicService from '../../services/MusicService';

export default function AddMusic() {
    const { id } = useParams();

    const [music, setMusic] = useState({
        title: '',
        category: '',
        description: '',
        link: ''
    });

    useEffect(() => {
        if (id === '-1') {
            return;
        } else {
            MusicService.getMusicById(id).then((res) => {
                let musicData = res.data;
                setMusic({
                    title: musicData.title,
                    category: musicData.category,
                    description: musicData.description,
                    link: musicData.link
                });
            });
        }
    }, [id]);

    const saveMusic = (e) => {
        e.preventDefault();
        const updatedMusic = {
            title: music.title,
            category: music.category,
            description: music.description,
            link: music.link
        };

        if (id === '-1') {
            MusicService.addMusic(updatedMusic).then(() => {
                window.location.href = '/moderator/moderatormusic';
            });
        } else {
            MusicService.updateMusic(updatedMusic, id).then(() => {
                window.location.href = '/moderator/moderatormusic';
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMusic((prevMusic) => ({
            ...prevMusic,
            [name]: value
        }));
    };

    const getTitle = () => {
        if (id === '-1') {
            return <h3 className="text-2xl font-semibold mb-4">Add Music</h3>;
        } else {
            return <h3 className="text-2xl font-semibold mb-4">Update Music</h3>;
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg">
                <form>
                    {getTitle()}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Title:</label>
                        <input
                            placeholder="Title"
                            name="title"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={music.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Category:</label>
                        <input
                            placeholder="Category"
                            name="category"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={music.category}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Description:</label>
                        <input
                            placeholder="Description"
                            name="description"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={music.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Link:</label>
                        <input
                            placeholder="Link"
                            name="link"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={music.link}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                            onClick={saveMusic}
                        >
                            Save
                        </button>
                        <Link
                            to="/moderator/moderatormusic"
                            className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
