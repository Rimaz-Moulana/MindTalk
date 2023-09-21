import React from 'react';

function ProfileDetails() {
  return (
    <>
      <div className="relative bg-center bg-cover rounded-t-lg h-60" style={{ backgroundImage: 'url("https://source.unsplash.com/1500x250?mountain")' }}>
        <div className="absolute top-2 right-2">
          {/* You can add an SVG or other content here */}
        </div>
        <img
          className="absolute w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 rounded-full mt-60 left-1/2"
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
          alt="User's Profile"
        />
      </div>

      <div className="relative flex justify-center mt-28">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Pathum Lakshan Dissanayake</h1>
          <p className="text-gray-500">Software Engineer</p>
          <p className="text-gray-500">San Francisco, CA</p>
          <p className="text-blue-500">Verified</p>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-300" />

      {/* <div className="flex flex-col w-full 2xl:w-2/3"> */}
        <div className="flex-1 p-8 bg-white rounded-lg ">
          <h4 className="text-xl font-bold text-gray-900">About</h4>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!
          </p>
        </div>

        <hr className="my-4 border-t border-gray-300" />

        {/* Personal Info */}
        <div className="px-8 mt-10">
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

        <hr className="my-4 border-t border-gray-300" />

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
