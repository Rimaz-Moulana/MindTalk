import React, { useEffect, useState } from 'react'
import sky from '../../assets/sky.jpg';
import logo from '../../assets/logo.png';
import IconComponent from '../../components/IconComponent';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const CounsellorProfile = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    firstname: '',
    joinDate: '',
    about:'',
    lastname: '',
    email: '',
    city:'',
    address:'',
    phone: '',
    jobRole:'',
    degree: '',
    workplace: '',
    coreServices: '',
    scopeOfPractice: '',
    experience: '',
    ageGroup: '',
    language: '',
  });

  const [updateSuccess, setUpdateSuccess] = useState(false);

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

  useEffect(() => {
    fetchProfileData();
  }, [id]);

  const fetchProfileData = async () => {
    try{
      console.log(id);
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

        const response = await axios.get(`http://localhost:8080/api/counsellor/details/getCounsellor/${id}`, config);

        if (response.status === 200) {
          const userData = response.data;
          setUser({
            firstname: userData.firstname,
            lastname: userData.lastname,
            about: userData.about,
            email: userData.email,
            city: userData.city,
            address: userData.address,
            phone: userData.phone,
            jobRole: userData.jobRole,
            degree: userData.degree,
            workplace: userData.workplace,
            coreServices: userData.coreServices,
            scopeOfPractice: userData.scopeOfPractice,
            experience: userData.experience,
            ageGroup: userData.ageGroup,
            language: userData.language,
            joinDate: userData.joinDate
          });
        }
      }
    } catch (error) {
      console.error('Error fetching counsellor profile:', error);
    }
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const updatedUser = {
      firstname: user.firstname,
      lastname: user.lastname,
      about: user.about,
      email: user.email,
      city: user.city,
      address: user.address,
      phone: user.phone,
      jobRole: user.jobRole,
      degree: user.degree,
      workplace: user.workplace,
      coreServices: user.coreServices,
      scopeOfPractice: user.scopeOfPractice,
      experience: user.experience,
      ageGroup: user.ageGroup,
      language: user.language,
      joinDate: user.joinDate,
    };
    console.log(updatedUser);

    try{
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
            await updateUserBackend(updatedUser, config);
            setUpdateSuccess(true); // Set updateSuccess to true upon success
          }
    } catch (error) {
      console.error('Error saving user:', error);
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

  const updateUserBackend = async (userData, config) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/counsellor/details/updateCounsellor/${id}`,
        userData,
        config
      );

      if (response.status === 200) {
        console.log('User updated successfully');
      } else {
          console.error('Error updating user');
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
        ...prevUser,
        [name]: value
    }));
  };

  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(file);
  };

  const uploadProfilePhoto = async (e) => {
    e.preventDefault();
  
    if (!profilePhoto) {
      // Handle error if no photo is selected
      toast.error('Please select a profile photo.');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('profilePhoto', profilePhoto);
  
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data', 
          },
          withCredentials: true,
        };
  
        const response = await axios.put(
          `http://localhost:8080/api/v1/counsellor/${id}/updateProfilePhoto`,
          formData,
          config
        );
  
        if (response.status === 200) {
          toast.success('Profile photo uploaded successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error('Error uploading profile photo. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error uploading profile photo:', error);
      toast.error('Error uploading profile photo. Please try again later.');
    }
  };

  return (
    <>
      <div className="flex grid flex-col w-full gap-4 md:grid-cols-4">

      <div className="bg-white rounded-xl md:col-span-3 ">
        <div className="grid px-6 py-5 mx-auto max-w-7xl gap-x-8 lg:px-8">

          <form>
            <div className="">

              <div className="pb-4 ">
                <h1 className="ml-8 text-2xl font-bold text-gray-900">Personal Information</h1>

                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-6 sm:grid-cols-6">
                    
                    <div className="sm:col-span-3">
                    <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        name="firstname"
                        id="firstname"
                        autoComplete="given-name"
                        value={user.firstname}
                        onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        name="lastname"
                        id="lastname"
                        autoComplete="family-name"
                        value={user.lastname}
                        onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      >
                      </input>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                      Home Address
                    </label>
                    <div className="mt-2">
                      <input
                        name="address"
                        id="address"
                          autoComplete="address"
                          value={user.address}
                          onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">
                      Languages Spoken
                    </label>
                    <div className="mt-2">
                      <input
                        name="language"
                        id="language"
                        autoComplete="family-name"
                        value={user.language}
                        onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      >
                      </input>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Mobile Phone
                    </label>
                    <div className="mt-2">
                      <input
                        name="phone"
                        id="phone"
                        autoComplete='phone'
                        value={user.phone}
                        onClick={handleInputChange}  
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={user.email}
                        onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      >
                      </input>
                    </div>
                  </div>

                  {/* <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div> */}

                  {/* <div className="sm:col-span-3">
                    <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                      District
                    </label>
                    <div className="mt-2">
                      <input
                        id="district"
                        name="district"
                        type="text"
                        autoComplete="district"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div> */}

                </div>

              </div>

              <div className="pt-5 pb-12 border-b border-gray-900/10">
                <h1 className="ml-10 text-2xl font-bold text-gray-900">Professional Information</h1>

                <div className="grid grid-cols-1 mt-8 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">
                      Years of Experience
                    </label>
                    <div className="mt-2">
                      <input
                        name="experience"
                        id="experience"
                        value={user.experience}
                        onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
                      Degree / Diploma
                    </label>
                    <div className="mt-2">
                      <input
                        name="degree"
                          id="degree"
                          value={user.degree}
                          onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="workplace" className="block text-sm font-medium leading-6 text-gray-900">
                      Current Workplace
                    </label>
                    <div className="mt-2">
                      <input
                        name="workplace"
                        id="workplace"
                        value={user.workplace}
                        onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="coreServices" className="block text-sm font-medium leading-6 text-gray-900">
                      Core Services
                    </label>
                    <div className="mt-2">
                      <input
                        name="coreServices"
                        id="coreServices"
                        value={user.coreServices}
                        onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  </div>
                  
                  <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="scopeOfPractice" className="block text-sm font-medium leading-6 text-gray-900">
                      Scope Of Practice
                    </label>
                    <div className="mt-2">
                      <input
                        name="scopeOfPractice"
                        id="scopeOfPractice"
                        value={user.scopeOfPractice}
                        onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="ageGroup" className="block text-sm font-medium leading-6 text-gray-900">
                      Age Group
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="ageGroup"
                        id="ageGroup"
                        value={user.ageGroup}
                        onChange={handleInputChange}
                        className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

              </div>
              

            </div>

            <div className="flex items-center justify-end mt-6 gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                  type="submit"
                  onClick={saveUser}
                className="px-5 py-2 text-sm font-semibold text-white bg-blue-900 rounded-lg shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
            
          </form>

        </div>
      </div>

      <div className="flex flex-col gap-4 ">

        <div className="pb-5 overflow-hidden h-[52rem] text-center bg-white shadow-md rounded-xl">

          {/* <img src={sky} alt="sky" className="object-cover w-full h-48" /> */}
          <div className="w-full h-48 bg-center bg-no-repeat bg-cover bg-sky-500" style={{ background: 'url("https://source.unsplash.com/650x200?sky")' }}></div>
          <img src={logo} alt="Logo" className="w-20 h-20 mx-auto -mt-10 rounded-full" />
            <span className="text-xl font-bold text-blue-900">{user.firstname} {user.lastname}</span>
            
            <div className="mt-1 text-center">
              {/* <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
                <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>
                Los Angeles, California
              </div> */}
              <div className='flex items-center justify-center mt-2'>
                <IconComponent />
              </div>
              {/* <div className="mt-8 mb-2 italic fas fa-briefcase text- text-blueGray-600">
                Solution Manager - Creative Team Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="mr-2 text-lg fas fa-university text-blueGray-400"></i>
                University of Computer Science
              </div> */}
            </div>
            <div className="py-10 mt-10 text-center border-t border-blueGray-200">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-1 lg:w-9/12">
                  <p className="mb-4 text-lg leading-relaxed text-justify text-blueGray-700">
                    An artist of considerable range, Jenna the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy
                    writes, performs and records all of his own music,
                    giving it a warm, intimate feel with a solid groove
                    structure. An artist of considerable range.
                  </p>
                  <a href="javascript:void(0);" className="font-normal text-pink-500">
                    Show more
                  </a>
                </div>
              </div>
            </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default CounsellorProfile