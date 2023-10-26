import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { FiClipboard } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProfilePhoto from './ClientProfilePhoto';
import FileUpload from './ClientProfileFIle';


const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    fname: '',
    lname: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '', 
    zip: '',
    emName1: '', 
    emPhone1: '',
    emName2: '',
    emPhone2: '',
    emName3: '',
    emPhone3: ''
  });

  const [updateSuccess, setUpdateSuccess] = useState(false); // New state for update success

  // useEffect(() => {
  //   // Show alert when updateSuccess becomes true
  //   if (updateSuccess) {
  //     alert('User information updated successfully!');
  //   }
  // }, [updateSuccess]);

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

        const response = await axios.get(`http://localhost:8080/api/v1/client/${id}`, config);

        if (response.status === 200) {
            const userData = response.data;
            setUser({
              fname: userData.fname,
              lname: userData.lname ,
              dob: userData.dob,
              gender: userData.gender,
              email: userData.email,
              phone: userData.phone,
              address: userData.address,
              city: userData.city,
              district: userData.district,
              zip: userData.zip,
              //emergency contacts
              emName1: userData.emName1,
              emName2: userData.emName2,
              emName3: userData.emName3,
              emPhone1: userData.emPhone1,
              emPhone2: userData.emPhone2,
              emPhone3: userData.emPhone3
            });
        }
      }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
  };

  const saveUser = async (e) =>{
    e.preventDefault();
    const updatedUser = {
      fname: user.fname,
      lname: user.lname ,
      dob: user.dob,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      district: user.district,
      zip: user.zip,
      emName1: user.emName1,
      emName2: user.emName2,
      emName3: user.emName3,
      emPhone1: user.emPhone1,
      emPhone2: user.emPhone2,
      emPhone3: user.emPhone3
    };
    console.log(updatedUser);

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
        `http://localhost:8080/api/v1/client/${id}`,
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
          `http://localhost:8080/api/v1/client/${id}/updateProfilePhoto`,
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
  

  const pdfData = [
    {
      id: 1,
      title:'abc.pdf',
      date: '07/07/2023'
    },
    {
      id: 2,
      title:'xyz.pdf',
      date: '10/07/2023'
    },
    {
      id: 3,
      title:'msg.doc',
      date: '17/07/2023'
    },
  ];

  return (
    <div className="flex grid flex-col-reverse w-full gap-4 md:grid-cols-4">

      <div className="bg-white rounded-xl md:col-span-3 ">
        <div className="grid px-6 py-5 mx-auto max-w-7xl gap-x-8 lg:px-8">

          <form>
            <div className="">

              <div className="pb-12 border-b border-gray-900/10">
                <h1 className="text-lg font-bold text-gray-900">Personal Information</h1>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        name="fname"
                        id="fname"
                        autoComplete="given-name"
                        value={user.fname}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        autoComplete="family-name"
                        value={user.lname}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                      Birthday
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        autoComplete='birthday'
                        value={user.dob}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                      Gender
                    </label>
                    <div className="mt-2">
                      <select
                        id="gender"
                        name="gender"
                        autoComplete="gender"
                        value={user.gender}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      >
                        <option disabled selected></option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
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
                        value={user.email}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone 
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="phone"
                        value = {user.phone}
                        onClick={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                      Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        value={user.address}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        value={user.city}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                      District
                    </label>
                    <div className="mt-2">
                      {/* <input
                        type="text"
                        name="district"
                        id="district"
                        autoComplete="address-level1"
                        value={user.district}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      /> */}
                      <select
                        name="district"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                        value={user.district}
                        onChange={handleInputChange}
                      >
                        <option value="district" disabled selected>Select District</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Gampaha">Gampaha</option>
                        <option value="Kalutara">Kalutara</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Matale">Matale</option>
                        <option value="Nuwara Eliya">Nuwara Eliya</option>
                        <option value="Galle">Galle</option>
                        <option value="Matara">Matara</option>
                        <option value="Hambantota">Hambantota</option>
                        <option value="Jaffna">Jaffna</option>
                        <option value="Kilinochchi">Kilinochchi</option>
                        <option value="Mannar">Mannar</option>
                        <option value="Vavuniya">Vavuniya</option>
                        <option value="Mullaitivu">Mullaitivu</option>
                        <option value="Batticaloa">Batticaloa</option>
                        <option value="Ampara">Ampara</option>
                        <option value="Trincomalee">Trincomalee</option>
                        <option value="Kurunegala">Kurunegala</option>
                        <option value="Puttalam">Puttalam</option>
                        <option value="Anuradhapura">Anuradhapura</option>
                        <option value="Polonnaruwa">Polonnaruwa</option>
                        <option value="Badulla">Badulla</option>
                        <option value="Moneragala">Moneragala</option>
                        <option value="Ratnapura">Ratnapura</option>
                        <option value="Kegalle">Kegalle</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="zip" className="block text-sm font-medium leading-6 text-gray-900">
                      ZIP
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        autoComplete="postal-code"
                        value={user.zip}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-5 pb-12 border-b border-gray-900/10">
                <h1 className="text-lg font-bold text-gray-900">Emergency Contact 1</h1>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="emName1" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="emName1"
                        id="emName1"
                        value={user.emName1}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="emPhone1" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="emPhone1"
                        id="emPhone1"
                        value={user.emPhone1}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

              </div>

              <div className="pt-5 pb-12 border-b border-gray-900/10">
                <h1 className="text-lg font-bold text-gray-900">Emergency Contact 2</h1>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="emName2" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="emName2"
                        id="emName2"
                        value = { user.emName2 }
                        onChange= { handleInputChange }
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="emPhone2" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="emPhone2"
                        id="emPhone2"
                        value ={ user.emPhone2 }
                        onChange= { handleInputChange }
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

              </div>

              <div className="pt-5 pb-12 border-b border-gray-900/10">
                <h1 className="text-lg font-bold text-gray-900">Emergency Contact 3</h1>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="emName3" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="emName3"
                        id="emName3"
                        value={user.emName3}
                        onChange= {handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="emPhone3" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="emPhone3"
                        id="emPhone3"
                        value ={ user.emPhone3 }
                        onChange= { handleInputChange }
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
      </div>

      <div className="flex flex-col gap-4 ">

        <ProfilePhoto 
          handleProfilePhotoChange={handleProfilePhotoChange}
          uploadProfilePhoto={uploadProfilePhoto}
        />
        <FileUpload />
        
      </div>

    </div>
  );
}

export default Profile;