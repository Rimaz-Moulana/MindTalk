import {React, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import ProfileCard from '../../components/ProfileCard'
import ProfileDetails from '../../components/ProfileDetails'
import axios from 'axios';

// const people = [
//   {
//     name: 'Leslie Alexander',
//     role: 'Co-Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
// ]

export default function ClientCounsellorProfile() {

  const { id } = useParams();

  const [counsellor, setCounsellor] = useState({
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
    joinDate:'',
  });

  useEffect(() => {
    fetchCounsellorProfileData();
  }, [id]);

  const fetchCounsellorProfileData = async () => {
    try {
      console.log("Fetching counsellor profile...");
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        };

        const response = await axios.get(`http://localhost:8080/api/counsellor/details/getCounsellor/${id}`, config);

        if (response.status === 200) {
          const counsellorData = response.data;
          setCounsellor({
            firstname: counsellorData.firstname,
            lastname: counsellorData.lastname,
            about: counsellorData.about,
            email: counsellorData.email,
            city: counsellorData.city,
            address: counsellorData.address,
            phone: counsellorData.phone,
            jobRole: counsellorData.jobRole,
            degree: counsellorData.degree,
            workplace: counsellorData.workplace,
            coreServices: counsellorData.coreServices,
            scopeOfPractice: counsellorData.scopeOfPractice,
            experience: counsellorData.experience,
            ageGroup: counsellorData.ageGroup,
            language: counsellorData.language,
            joinDate: counsellorData.joinDate,
          });
        }
      }
    } catch (error) {
      console.error('Error fetching counsellor profile:', error);
    }
  };
  
  return (
    <>
      <div className='flex grid flex-col w-full gap-4 md:grid-cols-4'>
        {/* <div className='overflow-y-auto bg-white rounded-xl'>
          <ProfileCard/>
        </div> */}
        <div className='overflow-hidden bg-white md:col-span-4 rounded-xl'>
          <ProfileDetails counsellorData={counsellor}  />
        </div>
      </div>
    </>
  )
}
