import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MeditationService from '../../services/MeditationService';

export default function AddMeditation() {
    const { id } = useParams();

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
            MeditationService.getMeditationById(id).then((res) => {
                let meditationData = res.data;
                setMeditation({
                    title: meditationData.title,
                    category: meditationData.category,
                    description: meditationData.description,
                    link: meditationData.link
                });
            });
        }
    }, [id]);

    const saveMeditation = (e) => {
        e.preventDefault();
        const updatedMeditation = {
            title: meditation.title,
            category: meditation.category,
            description: meditation.description,
            link: meditation.link
        };

        if (id === '-1') {
            MeditationService.addMeditation(updatedMeditation).then(() => {
                window.location.href = '/moderator/moderatormeditation';
            });
        } else {
            MeditationService.updateMeditation(updatedMeditation, id).then(() => {
                window.location.href = '/moderator/moderatormeditation';
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMeditation((prevMeditation) => ({
            ...prevMeditation,
            [name]: value
        }));
    };

    const getTitle = () => {
        if (id === '-1') {
            return <h3 className="text-2xl font-semibold mb-4">Add Meditation</h3>;
        } else {
            return <h3 className="text-2xl font-semibold mb-4">Update Meditation</h3>;
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
                            value={meditation.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Category:</label>
                        <input
                            placeholder="Category"
                            name="category"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={meditation.category}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Description:</label>
                        <input
                            placeholder="Description"
                            name="description"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={meditation.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Link:</label>
                        <input
                            placeholder="Link"
                            name="link"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
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
