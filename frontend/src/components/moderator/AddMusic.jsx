import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AddMusic = () => {
    const { id } = useParams();

    const categories = ["Relaxing", "Anxiety", "Sleeping", "Focus", "Stress Releasing"];

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
            fetchMusicData();
        }
    }, [id]);

    const fetchMusicData = async () => {
        try {
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

                const response = await axios.get(`http://localhost:8080/api/testing/music/${id}`, config);

                if (response.status === 200) {
                    const musicData = response.data;
                    setMusic({
                        title: musicData.title,
                        category: musicData.category,
                        description: musicData.description,
                        link: musicData.link
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching music:', error);
        }
    };

    const saveMusic = async (e) => {
        e.preventDefault();
        const updatedMusic = {
            title: music.title,
            category: music.category,
            description: music.description,
            link: music.link
        };
        console.log(updatedMusic);

        try {
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

                if (id === '-1') {
                    await addMusicBackend(updatedMusic, config);
                } else {
                    await updateMusicBackend(updatedMusic, config);
                }
                window.location.href = '/moderator/moderatormusic';
            }
        } catch (error) {
            console.error('Error saving music:', error);
        }
    };

    const addMusicBackend = async (musicData, config) => {
        try {
            // Include the status field with a value of true
            musicData.status = true;
            
            const response = await axios.post(
                'http://localhost:8080/api/testing/music',
                musicData,
                config
            );

            if (response.status === 200) {
                console.log('Music added successfully');
            } else {
                console.error('Error adding music');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const updateMusicBackend = async (musicData, config) => {
        try {
            const response = await axios.put(
                `http://localhost:8080/api/testing/music/${id}`,
                musicData,
                config
            );

            if (response.status === 200) {
                console.log('Music updated successfully');
            } else {
                console.error('Error updating music');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMusic((prevMusic) => ({
            ...prevMusic,
            [name]: value
        }));
    };

    const getTitle = () => (
        <h3 className="text-2xl font-semibold mb-4">
            {id === '-1' ? 'Add Music' : 'Update Music'}
        </h3>
    );

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
                        <select
                            name="category"
                            className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={music.category}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
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

export default AddMusic;
