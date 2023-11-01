import axios from 'axios';
import { default as React, useEffect, useState } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ClientTherapySessionSuggestion() {
    const [sessions, setSessions] = useState([])

    const loadSession= async ()=>{
        try{
          console.log("Fetching session Details...");
          const authData = localStorage.getItem('authData');
          console.log(authData)
          if(authData){
            const {accessToken} = JSON.parse(authData);
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


    const settings = {
      dots: true, // Display navigation dots
      infinite: true, // Loop the carousel
      speed: 500, // Transition speed in milliseconds
      slidesToShow: 2, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at a time
      autoplay: true, // Enable autoplay
      autoplaySpeed: 1000,
    };
    
  return (
        <div className='w-3/4 m-auto'>
            <div className='mt-2'>
            <Slider {...settings}>
                {sessions.map((d) => (
                    <div  className='bg-white h-[270px] rounded-xl'>
                        <div  className=' text-black rounded-t-xl flex flex-col justify-center items-center'>
                            <p className='text-xl font-semibold'>Session Type:{d.sessionType}</p>
                            <p>Session Time:{d.time}</p>
                            <p>Session Date:{d.date}</p>
                            <p>Counsellor:{d.counsellors}</p>
                            <a className='text-blue-500' href={d.link}>Call Link</a>
                            <button className='bg-blue-700 w-[200px] rounded-xl p-2 text-white font-semibold flex flex-col items-center'>Reserve</button>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
  )
}

