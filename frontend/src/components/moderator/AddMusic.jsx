import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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

    const [updateSuccess, setUpdateSuccess] = useState(false); // New state for update success

    useEffect(() => {
        // Show toast when updateSuccess becomes true
        if (updateSuccess) {
          toast.success('User information updated successfully!', {
            position: 'top-right',
            autoClose: 3000, // Close the notification after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
    
          // Reset updateSuccess to false
        setUpdateSuccess(false);
    
        }
      }, [updateSuccess]);
    
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
            // alert('Error updating user information. Please try again later.'); // Alert for update failure
            // toast.error('Error updating user information. Please try again later.', {
            //     position: 'top-right',
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            // });
        }
    };

    // const saveMusic = async (e) => {
    //     e.preventDefault();
    
    //     // Create a new FormData object
    //     const formData = new FormData();
    
    //     // Add text data to the FormData object
    //     formData.append('title', music.title);
    //     formData.append('category', music.category);
    //     formData.append('description', music.description);
    //     formData.append('link', music.link);
    
    //     // Add the image file to the FormData object
    //     formData.append('image', music.imageFile);
    
    //     try {
    //         const authData = localStorage.getItem('authData');
    //         if (authData) {
    //             const { accessToken } = JSON.parse(authData);
    //             const config = {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`,
    //                     // Do not set Content-Type here, it will be automatically set by FormData
    //                 },
    //                 withCredentials: true
    //             };
    
    //             if (id === '-1') {
    //                 await addMusicBackend(formData, config);
    //             } else {
    //                 await updateMusicBackend(formData, config);
    //             }
    //             // window.location.href = '/moderator/moderatormusic';
    //         }
    //     } catch (error) {
    //         console.error('Error saving music:', error);
    //     }
    // };
    
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
                setUpdateSuccess(true); // Set updateSuccess to true upon success
            } else {
                console.error('Error adding music');
                // alert('Error updating user information. Please try again later.'); // Alert for update failure
                toast.error('Error updating user information. Please try again later.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // alert('Error updating user information. Please try again later.'); // Alert for update failure
            toast.error('Error updating user information. Please try again later.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
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
                // alert('Error updating user information. Please try again later.'); // Alert for update failure
                // toast.error('Error updating user information. Please try again later.', {
                //     position: 'top-right',
                //     autoClose: 3000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                // });
            }
        } catch (error) {
            console.error('An error occurred:', error);
             // alert('Error updating user information. Please try again later.'); // Alert for update failure
            // toast.error('Error updating user information. Please try again later.', {
            //     position: 'top-right',
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            // });
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
                            className="form-input mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={music.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Category:</label>
                        <select
                            name="category"
                            className="form-select mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
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
                            className="form-input mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                            value={music.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Link:</label>
                        <input
                            placeholder="Link"
                            name="link"
                            className="form-input mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
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
            {/* <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
            /> */}
        </div>
    );
}

export default AddMusic;
