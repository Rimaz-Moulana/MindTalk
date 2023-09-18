import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { FiClipboard } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    fname: '',
    lname:'',
    email :'',
    phone: '',
    city: '',
    emName1: '',
    emName2: '',
    emName3: '',
    emPhone1: '',
    emPhone2: '',
    emPhone3: ''
  });

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
              email: userData.email,
              phone: userData.phone,
              city: userData.city,
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
      email: user.email,
      phone: user.phone,
      city: user.city,
      //emergency contacts
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
      }
    } catch (error) {
      console.error('Error saving user:', error);
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
      }
    } catch (error) {
        console.error('An error occurred:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
        ...prevUser,
        [name]: value
    }));
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
    <div className="flex flex-col-reverse gap-4 w-full grid md:grid-cols-4">

      <div className="bg-white rounded-xl md:col-span-3 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 px-6 lg:px-8 py-5">

          <form>
            <div className="">

              <div className="border-b border-gray-900/10 pb-12">
                <h1 className="text-lg font-bold text-gray-900">Personal Information</h1>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="birthday" className="block text-sm font-medium leading-6 text-gray-900">
                      Birthday
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        autoComplete='birthday'
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                      District
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="district"
                        id="district"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                      ZIP
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

              </div>

              <div className="border-b border-gray-900/10 pb-12 pt-5">
                <h1 className="text-lg font-bold text-gray-900">Emergency Contact 1</h1>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="name1" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name1"
                        id="name1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone1" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phone1"
                        id="phone1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

              </div>

              <div className="border-b border-gray-900/10 pb-12 pt-5">
                <h1 className="text-lg font-bold text-gray-900">Emergency Contact 2</h1>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="name2" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name2"
                        id="name2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone2" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phone2"
                        id="phone2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

              </div>

              <div className="border-b border-gray-900/10 pb-12 pt-5">
                <h1 className="text-lg font-bold text-gray-900">Emergency Contact 3</h1>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="name3" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name3"
                        id="name3"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone3" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phone3"
                        id="phone3"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

              </div>
              

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
            
          </form>

        </div>
      </div>

      <div className="flex flex-col gap-4 ">

        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center pb-5">

          {/* <img src={sky} alt="sky" className="w-full h-48 object-cover" /> */}
          <div className='h-48 w-full bg-sky-500 bg-cover bg-no-repeat bg-center' 
            style={{background: 'url("https://source.unsplash.com/650x200?sky")'}}>
          </div>
          <img src={logo} alt="Logo" className="rounded-full h-20 w-20 mx-auto -mt-10" />
          <span className="font-bold text-xl text-blue-900">John Doe</span>

        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden p-5 ">

          <div className='pb-5 text-center '>
            <span className="text-lg text-blue-900 ">Let us get to know about you. Upload your previous medical files if any.  </span>
            <div className="m-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-53">
              <div className="text-center">
                <FiClipboard className="mt-2 mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-2 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-700 focus-within:ring-offset-2 hover:text-blue-900"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PDF, DOC</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden pb-5 ">
            <table className="min-w-full text-black text-sm font-light">
              <tbody>
                {
                  pdfData.map((item) => (
                    <tr
                      key={ item.id }
                      className="border-b border-gray-200 transition duration-300 ease-in-out hover:bg-neutral-100 hover:bg-neutral-300"
                    >
                      <td className="whitespace-nowrap text-left px-6 py-4">{item.title}</td>
                      <td className="whitespace-nowrap text-right px-6 py-4">{item.date}</td>
                    </tr>
                  ) )
                }
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;