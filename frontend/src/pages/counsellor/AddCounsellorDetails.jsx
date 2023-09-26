// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


const CounsellorDetailsAdd = () => {
  const [detailsData, setDetailsData] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [licenseNo, setLicenseNo] = useState('');
  const [licenseImage, setLicenseImage] = useState('');



  const handeleSubmit = (e) => {
    if(firstname && lastname && email && licenseNo && licenseImage){
      const newData = {id: idCounter, firstname, lastname,email,licenseNo,licenseImage};
      setIdCounter(idCounter+1);
      setDetailsData([...detailsData, newData]);
      
      //save data to localStorage
      localStorage.setItem('detailsData',JSON.stringify(detailsData));
      
        e.preventDefault();

        console.log(newData)
      }

      

        
  };

  return (
    <>
        <section className="h-screen">
          <div className="h-full">
            {/* <!-- Left column container with background--> */}
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="/src/assets/counsellorAddDetails.svg"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
    
              {/* <!-- Right column container --> */}
              <div className="mb-12 p-14 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 flex flex-col">
              <h1 className='text-2xl font-bold mb-4'>Add Your Details</h1>
              <form >
          <div className='mb-4'>
          <label htmlFor='firstName' className='block text-sm font-medium mb-1'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstname'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className='lg:w-[400px] px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-300'

          />
          </div>
          <div className='mb-4'>
          <label htmlFor='lastName' className='block text-sm font-medium mb-1'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastname'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className='lg:w-[400px] px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-300'

          />
          </div>
          <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='lg:w-[400px] px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
          </div>
          <div className='mb-4'>
          <label htmlFor='licenceNo' className='block text-sm font-medium mb-1'>License Number</label>
          <input
            type='text'
            id='licenseNo'
            name='licenseNo'
            value={licenseNo}
            onChange={(e) => setLicenseNo(e.target.value)}
            className='lg:w-[400px] px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
          </div>
          <div className="mb-4">
              <label htmlFor="licenseImage" className="block text-sm font-medium mb-1">
                License Image
              </label>
              <input
                type="file"
                id="licenseImage"
                name="licenseImage"
                accept="image/*"
                value={licenseImage}
                onChange={(e) => setLicenseImage(e.target.value)}
                className=""
              />
            </div>
            <div className='lg:w-96'>
            <button
              type="submit"
              className="bg-blue-500 lg:w-[400px] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={handeleSubmit}
            >
              Submit
            </button>
          </div>
    </form>
    {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>licenseNo</th>
            <th>licenseImage</th>
          </tr>
        </thead>
        <tbody>
          {detailsData.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.firstname}</td>
              <td>{entry.lastname}</td>
              <td>{entry.email}</td>
              <td>{entry.licenseNo}</td>
              <td>{entry.licenseImage}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
              </div>
            </div>
          </div>
        </section>
    </>
  )
}


export default CounsellorDetailsAdd;