import axios from 'axios';
import { default as React, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CounsellorTherapy = () => {

  const [sessions, setSessions] = useState([])

  const loadSession= async ()=>{
      try{
        console.log("Fetching session Details...");
        const authData = localStorage.getItem('authData');
        console.log(authData)
        if(authData){
          const {accessToken , id } = JSON.parse(authData);
          console.log(accessToken)
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          };
          console.log("ok",config)
          const result = await axios.get(`http://localhost:8080/api/moderator/getSession`,config)
  
          if(result.status === 200 ){
            // const sessionData = result.data;
            console.log(result.data)
            
            setSessions(result.data)
          }
        }
      }catch(error){
        console.error("this is the get error:",error)
      }
  };
  
  useEffect(()=>{
    loadSession();
  },[ ])






console.log(sessions)
console.log(sessions.data)

  return (
    <Carousel showArrows={true}
    showStatus={true}
    showThumbs={true} // Disable the thumbnail navigation
    emulateTouch={true} // Enable touch-swipe emulation
    selectedItem={2} // Start with the second slide (optional)
    showIndicators = {true}
    infiniteLoop={true}
    dynamicHeight={false}
    width="100%" // Adjust the width of the carousel container
    renderThumbs={() => {}} // Disable thumb rendering
    autoPlay={true} >
      {sessions.map((d,i) => ( 
        <div key={i} className='bg-white h-[290px] rounded-xl border border-blue-500 border-2 border-dashed'>
        <p className='flex justify-end px-10 font-semibold'>Number of Upcoming sessions</p>
        <div  className=' text-black rounded-t-xl flex flex-col justify-center items-center pt-6'>
        <p className='text-xl font-semibold p-1'>Session Type: {d.sessionType}</p>
                            <p className='p-1 text-lg'>Session Time: {d.time}</p>
                            <p className='p-1 text-lg'>Session Date: {d.date}</p>
                            <p className='p-1 text-lg'>Counsellor: {d.counsellors}</p>
                            <a className='text-white bg-blue-500 p-2 rounded-lg w-[200px] ' href={d.link}>Call Link</a>
                            <p className='p-1 text-lg text-red-500'>Please start the session using <span className='text-blue-700'>call link</span> above mentioned time!!!</p>
        </div>
        </div>
        ) )}
      
      {/* Add more reviews as needed */}
    </Carousel>
  );
};

export default CounsellorTherapy;
