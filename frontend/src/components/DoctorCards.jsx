import React from 'react';

const DoctorCards = ({ doctorList }) => {
  doctorList && console.log(doctorList);

  return (
    <>
      {doctorList?.map((doctor, index) => (
        <figure key={index} className='bg-white rounded-lg shadow-md pt-7 pb-7'>
          <img
            alt="user"
            className='w-32 h-32 rounded-full mx-auto'
            src={doctor.picture.large}
          />
          <figcaption className='text-center mt-5 flex-wrap'>
            <p className='text-gray-700 font-semibold text-xl mb-2'>
              Dr. {doctor.name.first} {doctor.name.last}
            </p>
            <p className='text-gray-500 truncate'>
              {doctor.email}
            </p>
            <p className='text-gray-500'>
              {doctor.cell} 
            </p>
            <p className='text-gray-500'>
              {doctor.location.city}
            </p>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default DoctorCards;
