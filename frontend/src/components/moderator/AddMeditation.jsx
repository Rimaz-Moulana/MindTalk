import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MeditationService from '../../services/MeditationService';

export default function AddMeditation() {
    const { id } = useParams();

    const categories = ["Relaxing", "Anxiety", "Sleeping", "Focus", "Stress Releasing"];

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
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
                <form>
                    {getTitle()}
                    <div className="mb-4">
                        <label className="block text-gray-600">Title:</label>
                        <input
                            placeholder="Title"
                            name="title"
                            className="form-input mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={meditation.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Category:</label>
                        <select
                            name="category"
                            className="form-select mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
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
                        <label className="block text-gray-600">Description:</label>
                        <textarea
                            placeholder="Description"
                            name="description"
                            rows="4"
                            className="form-input mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={meditation.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Link:</label>
                        <input
                            placeholder="Link"
                            name="link"
                            className="form-input mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
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
