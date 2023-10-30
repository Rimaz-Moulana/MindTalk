import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AddMeditation = () => {
    const { id } = useParams();

    const categories = ["Mindfulness", "Breathing Exercises", "Guided Meditation", "Sleep Meditation", "Stress Relief"];

    const [meditation, setMeditation] = useState({
        title: '',
        category: '',
        description: '',
        link: ''
    });

    useEffect(() => {
        if (id === '-1') {
            return;
        } else {
            fetchMeditationData();
        }
    }, [id]);

    const fetchMeditationData = async () => {
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

                const response = await axios.get(`http://localhost:8080/api/testing/meditation/${id}`, config);

                if (response.status === 200) {
                    const meditationData = response.data;
                    setMeditation({
                        title: meditationData.title,
                        category: meditationData.category,
                        description: meditationData.description,
                        link: meditationData.link
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching meditation:', error);
        }
    };

    const saveMeditation = async (e) => {
        e.preventDefault();
        const updatedMeditation = {
            title: meditation.title,
            category: meditation.category,
            description: meditation.description,
            link: meditation.link
        };
        console.log(updatedMeditation);

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
                    await addMeditationBackend(updatedMeditation, config);
                } else {
                    await updateMeditationBackend(updatedMeditation, config);
                }
                window.location.href = '/moderator/moderatormeditation';
            }
        } catch (error) {
            console.error('Error saving meditation:', error);
        }
    };

    const addMeditationBackend = async (meditationData, config) => {
        try {
            // Include the status field with a value of true
            meditationData.status = true;
            
            const response = await axios.post(
                `http://localhost:8080/api/testing/meditation`,
                meditationData,
                config
            );

            if (response.status === 200) {
                console.log('Meditation added successfully');
            } else {
                console.error('Error adding meditation');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const updateMeditationBackend = async (meditationData, config) => {
        try {
            const response = await axios.put(
                `http://localhost:8080/api/testing/meditation/${id}`,
                meditationData,
                config
            );

            if (response.status === 200) {
                console.log('Meditation updated successfully');
            } else {
                console.error('Error updating meditation');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMeditation((prevMeditation) => ({
            ...prevMeditation,
            [name]: value
        }));
    };

    const getTitle = () => (
        <h3 className="text-2xl font-semibold mb-4">
            {id === '-1' ? 'Add Meditation' : 'Update Meditation'}
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
                            className="form-input mt-1 block w-full rounded-mdpx-4 py-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={meditation.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Category:</label>
                        <select
                            name="category"
                            className="form-select mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={meditation.category}
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
                            className="form-input mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={meditation.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Link:</label>
                        <input
                            placeholder="Link"
                            name="link"
                            className="form-input mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={meditation.link}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                            onClick={saveMeditation}
                        >
                            Save
                        </button>
                        <Link
                            to="/moderator/moderatormeditation"
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

export default AddMeditation;
