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

  const [client, setClient] = useState({
      fname: '',
      lname:'',
      email :'',
      phone: ''
  });

  useEffect(() => {
    fetchClientProfileData();
  }, [id]);

  const fetchClientProfileData = async () => {
    try{
      console.log("Fetching client profile...");
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
              const clientData = response.data;
              setClient({
                  fname: clientData.fname,
                  lname: clientData.lname ,
                  email: clientData.email,
                  phone: clientData.phone
              });
          }
      }
    } catch (error) {
        console.error('Error fetching client profile:', error);
    }
  };

  return (
    <div className='grid grid-cols-4 gap-5'>

      <div className='bg-white rounded-xl'>
        <ClientProfileCard clientData={client} />
      </div>

      <div className='col-span-3 bg-white rounded-xl'>
        <ClientProfileHistory />
      </div>

    </div>
  )
}

export default CounsellorClientProfile;
