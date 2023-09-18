import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ClientProfileCard from '../../components/ClientDetails/ClientProfileCard'
import ClientProfileHistory from '../../components/ClientDetails/ClientProfileHistory'

// function CounsellorClientProfile() {
//   return (
//     <div className='grid grid-cols-4 gap-5'>

//       <div className='bg-white rounded-xl'>
//         <ClientProfileCard />
//       </div>

//       <div className='col-span-3 bg-white rounded-xl'>
//         <ClientProfileHistory />
//       </div>

//     </div>
//   )
// }

// export default CounsellorClientProfile

const CounsellorClientProfile = () => {
  const { id } = useParams();

  return (
    <div className='grid grid-cols-4 gap-5'>

      <div className='bg-white rounded-xl'>
        <ClientProfileCard />
      </div>

      <div className='col-span-3 bg-white rounded-xl'>
        <ClientProfileHistory />
      </div>

    </div>
  )
}

export default CounsellorClientProfile;
