import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function ProfileDetails({counsellorData}) {

  const { firstname, lastname, email, city, address, phone, jobRole, degree, workplace, coreServices, scopeOfPractice, experience, ageGroup, language, joinDate} = counsellorData
  

  return (
    <>
      <div className="relative h-64 bg-center bg-cover rounded-t-lg" style={{ backgroundImage: 'url("https://source.unsplash.com/1500x250?mountain")' }}>
        <div className="absolute top-2 right-2">
          {/* You can add an SVG or other content here */}
        </div>
        <img
          className="absolute w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 rounded-full mt-60 left-1/2"
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
          alt="User's Profile"
        />
      </div>

      <div className="relative flex justify-center mt-20 ">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">{firstname} {lastname}</h1>
          <p className="text-gray-500">{jobRole}</p>
          <p className="text-gray-500">{city}</p>
          <p className="text-blue-500">Verified</p>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-300" />

      {/* <div className="flex flex-col w-full 2xl:w-2/3"> */}
        <div className="flex-1 p-8 bg-white rounded-lg ">
          <h4 className="text-xl font-bold text-gray-900">About</h4>
        {/* <p className="my-2 text-gray-700">{about}</p> */}
         <p className="my-2 text-gray-700" dangerouslySetInnerHTML={{ __html: counsellorData.about }} />
        </div>

        <hr className="my-4 border-t border-gray-300" />

        {/* Personal Info */}
        <div className="px-8 mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 sm:grid-cols-1">
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="text-gray-800">{firstname} {lastname}</p>
          </div>

          <div>
              <p className="text-sm text-gray-600">Address</p>
              <p className="text-gray-800">{address}</p>
          </div>
          
          <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-gray-800">{email}</p>
          </div>
          
          <div>
              <p className="text-sm text-gray-600">Mobile Number</p>
              <p className="text-gray-800">{phone}</p>
          </div>

          <div>
              <p className="text-sm text-gray-600">Degree</p>
              <p className="text-gray-800">{degree}</p>
          </div>
          
          <div>
              <p className="text-sm text-gray-600">Current Workplace</p>
              <p className="text-gray-800">{workplace}</p>
          </div>
        </div>
        
        <hr className="my-4 border-t border-gray-300" />


         <div className='mt-8 '>
        <h2 className="col-span-2 mt-6 text-xl font-semibold text-gray-800">Professional Information</h2>
        <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 sm:grid-cols-1'>
          
            <div>
              <p className="text-sm text-gray-600">Core Services</p>
              <p className="text-gray-800">{coreServices}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Scope of Practices</p>
              <p className="text-gray-800">{scopeOfPractice}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Age Groups</p>
              <p className="text-gray-800">{ageGroup}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Languages Spoken</p>
              <p className="text-gray-800">{language}</p>
            </div>
            
            <div>
                <p className="text-sm text-gray-600">Years of Experience</p>
                <p className="text-gray-800">{experience}</p>
            </div>
            
            <div>
                <p className="text-sm text-gray-600">Join Date</p>
                <p className="text-gray-800">{joinDate}</p>
            </div>
          
          

            
            
            
          
            
            
            {/* <div>
              <p className="text-sm text-gray-600">Social Profiles</p>
              <div className="space-y-2">
                <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                <a href="#" className="text-blue-500 hover:underline">GitHub</a>
              </div>
            </div> */}
        </div> 
        </div>
        </div>

        <hr className="my-4 border-t border-gray-300" />

        {/* Activity Log */}
        <div className="mt-10">
          <h2 className="px-8 text-xl font-semibold text-gray-800">Activity Log</h2>
          <div className="px-8 mt-4">
            {/* Timeline entries */}
            <div className="flex space-x-4">
              <div className="flex-none">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 4a2 2 0 012-2h5a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4 10a2 2 0 100 4h5a2 2 0 100-4H4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 10a2 2 0 1000-4h6a2 2 0 100 4h-6z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 2a2 2 0 100 4h6a2 2 0 100-4h-6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800">Updated profile picture</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <div className="flex-none">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 4a2 2 0 012-2h5a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4 10a2 2 0 100 4h5a2 2 0 100-4H4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 10a2 2 0 1000-4h6a2 2 0 100 4h-6z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 2a2 2 0 100 4h6a2 2 0 100-4h-6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800">Wrote a new blog post</p>
                <p className="text-sm text-gray-600">1 day ago</p>
              </div>
            </div>
            {/* More timeline entries go here */}
          </div>
        </div>
    </>
  );
}

export default ProfileDetails;
