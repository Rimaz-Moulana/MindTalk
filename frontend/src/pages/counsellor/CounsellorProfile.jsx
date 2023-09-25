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
        `http://localhost:8080/api/${id}`,
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

                  <div className="sm:col-span-6">
                    <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                      Home Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="mobilephone" className="block text-sm font-medium leading-6 text-gray-900">
                      Mobile Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="tel"
                        name="mobilephone"
                        id="mobilephone"
                        autoComplete='mobilephone'
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="fixedphone" className="block text-sm font-medium leading-6 text-gray-900">
                      Fixed Phone
                    </label>
                    <div className="mt-2">
                        <input
                        type="tel"
                        id="fixedphone"
                        name="fixedphone"
                        autoComplete="fixedphone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      >
                      </input>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
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
                  </div>

                  <div className="sm:col-span-3">
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
                  </div>

                </div>

              </div>

              <div className="pt-5 pb-12 border-b border-gray-900/10">
                <h1 className="ml-10 text-2xl font-bold text-gray-900">Professional Information</h1>

                <div className="grid grid-cols-1 mt-8 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="yearsofexperience" className="block text-sm font-medium leading-6 text-gray-900">
                      Years of Experience
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="yearsofexperience"
                        id="yearsofexperience"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
                      Degree / Diploma
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="degree"
                        id="degree"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
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
                        type="text"
                        name="workplace"
                        id="workplace"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="specialize" className="block text-sm font-medium leading-6 text-gray-900">
                      Specialized In
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="specialize"
                        id="specialize"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
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

          <img src={sky} alt="sky" className="object-cover w-full h-48" />
          <img src={logo} alt="Logo" className="w-20 h-20 mx-auto -mt-10 rounded-full" />
            <span className="text-xl font-bold text-blue-900">John Doe</span>
            
            <div className="mt-1 text-center">
              <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
                <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div className='flex items-center justify-center mt-2'>
                <IconComponent />
              </div>
              <div className="mt-8 mb-2 italic fas fa-briefcase text- text-blueGray-600">
                Solution Manager - Creative Team Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="mr-2 text-lg fas fa-university text-blueGray-400"></i>
                University of Computer Science
              </div>
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