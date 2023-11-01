import React, { useState } from 'react';
import './Dash.css'; // Import the CSS file for additional styling (if needed)
import videoCallPNG from '../../assets/videocall.png'
import Profile from '../../pages/client/Feedback';


const Dash = () => {
    const ShareLink = () => {
        navigator.share({title:"check this out", url:"https://mindtalkcounsellingsession.netlify.app/"})
    }
    
    const [meetingUrls, setMeetingUrls] = useState({
        meeting01: window.location.origin + "/meeting/01/counsellor/" + new Date().toISOString(),
        meeting02: window.location.origin + "/meeting/01/patient/" + new Date().toISOString(),
        meeting03: window.location.origin + "/meeting/02/counsellor/" + new Date().toISOString(),
        meeting04: window.location.origin + "/meeting/02/patient/" + new Date().toISOString(),

        
    });

    const dummyContent = [
        {
          title: 'Kaveesha',
          description: 'The appointment is scheduled at 9:30am.',
        },
        {
          title: 'Michelle',
          description: 'The appointment is scheduled at 9:30am.',
        },
        {
          title: 'Nikeetha',
          description: 'The appointment is scheduled at 9:30am.',
        },
      ];

      const filterMeditationBySearch = (keyword) => {
        setSearchKeyword(keyword);
      };

      const filterMeditationByCategory = (category) => {
        setSelectedCategory(category);
      };

       // Filter the meditation based on selected category and search keyword
//   const filteredMeditation = meditation
//   .filter((item) => {
//     return (
//       (selectedCategory === 'all' || item.category === selectedCategory) &&
//       item.status &&
//       (searchKeyword === '' || item.description.toLowerCase().includes(searchKeyword.toLowerCase()))
//     );
//   });










    //const handleMeetingClick = (meetingKey) => {
     //   window.location.href = meetingUrls[meetingKey];
    //};

    return (
      <>
        <div className="dashboard-container flex justify-center items-start h-screen bg-gray-100 py-2 w-full">
             
      <div className="text-center">
            <h1 className="text-4xl font-bold  ">Video Conference</h1>
            {/* <p className="text-lg mb-6">Upcoming Appointments</p> */}
            <div className="flex flex-wrap gap-4 pl-5 pr-5 pb-2">
          {/* <div >
            <label className="pr-2">Filter by Appointment:</label>
            <select
              value={selectedCategory}
              onChange={(e) => filterMeditationByCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            >
              <option value="all">All</option>
              <option value="Mindfulness">Mindfulness</option>
              <option value="Breathing Exercises">Breathing Exercises</option>
              <option value="Guided Meditation">Guided Meditation</option>
              <option value="Sleep Meditation">Sleep Meditation</option>
              <option value="Stress Relief">Stress Relief</option>
            </select>
        </div> */}

        <div className='ml-8'>
            <label className="pr-2 flex my-3 ml-8">Search by Description:</label>
            <input
              type="text"
            //   value={searchKeyword}
            //   onChange={(e) => filterMeditationBySearch(e.target.value)}
              className="w-40 border border-gray-300 rounded-md py-1 px-3"
              placeholder="Search..."
            />
          </div>
        </div>



            <div className="">
                <img
                src={videoCallPNG}
                alt="Meeting Image"
             className="mx-auto rounded-full w-[30%] h-[20%]"
                />

            </div>
        
        {/* <p className="text-lg mb-6">Only you and counsellor will join the meeting</p> */}
        {dummyContent.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-lg mb-4 w-full">
            <h2 className="text-2xl font-semibold">{card.title}</h2>
            <p className="text-lg pb-5">{card.description}</p>
            <a
              href={'https://mindtalkcounsellingsession.netlify.app/'}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => ShareLink()}
            >
              Join Meeting
            </a>
          </div>
        ))}
     
      </div>
    </div>
    <div className='flex justify-center '>
    <Profile/>

    </div>
   
    </>
        
    );
}

export default Dash;
