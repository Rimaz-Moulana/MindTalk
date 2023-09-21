import React, { useState } from 'react';

function ProfileDetails() {
  // State for controlling the visibility of settings dropdown
  const [openSettings, setOpenSettings] = useState(false);

  return (
    
      <>
        
        
        {/* Profile Header */}
        <div className="relative h-48 bg-center bg-cover rounded-t-lg" style={{ backgroundImage: 'url("profile-background.jpg")' }}>
          <div className="absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <img className="absolute bottom-0 w-40 h-40 transform translate-y-1/2 rounded-full left-4" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="User's Profile" />
          <div className="mt-2 ml-20">
            <h1 className="text-3xl font-semibold text-gray-800">John Doe</h1>
            <p className="text-gray-500">Software Engineer</p>
            <p className="text-gray-500">San Francisco, CA</p>
            <p className="text-blue-500">Verified</p>
          </div>
        </div>
        {/* Profile Actions */}
        
        {/* Personal Info */}
        <div className="px-8 mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Personal Info</h2>
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="text-gray-800">John Doe</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Birthday</p>
              <p className="text-gray-800">January 1, 1980</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Join Date</p>
              <p className="text-gray-800">January 15, 2010</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Mobile Number</p>
              <p className="text-gray-800">+1 (123) 456-7890</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-gray-800">johndoe@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-gray-800">San Francisco, CA</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Languages Spoken</p>
              <p className="text-gray-800">English, Spanish</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Social Profiles</p>
              <div className="space-y-2">
                <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                <a href="#" className="text-blue-500 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        {/* Activity Log */}
        <div className="mt-6">
          <h2 className="px-8 text-xl font-semibold text-gray-800">Activity Log</h2>
          <div className="px-8 mt-4">
            {/* Timeline entries */}
            <div className="flex space-x-4">
              <div className="flex-none">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 4a2 2 0 012-2h5a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4 10a2 2 0 100 4h5a2 2 0 100-4H4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 10a2 2 0 100 4h6a2 2 0 100-4h-6z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 2a2 2 0 100 4h6a2 2 0 100-4h-6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800">
                  Updated profile picture
                </p>
                <p className="text-sm text-gray-600">
                  2 hours ago
                </p>
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <div className="flex-none">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 4a2 2 0 012-2h5a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4 10a2 2 0 100 4h5a2 2 0 100-4H4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 10a2 2 0 100 4h6a2 2 0 100-4h-6z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 2a2 2 0 100 4h6a2 2 0 100-4h-6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800">
                  Wrote a new blog post
                </p>
                <p className="text-sm text-gray-600">
                  1 day ago
                </p>
              </div>
            </div>
            {/* More timeline entries go here */}
          </div>
        </div>
      </>
  );
}

export default ProfileDetails;
