import axios from 'axios';
import { default as React, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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


    
  return (
        // <div className='w-3/4 m-auto'>
        //     <div className='mt-2'>
            <Carousel showArrows={true} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                {sessions.map((d,i) => (
                    <div key={i}  className='bg-white h-[270px] rounded-xl'>
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
                </Carousel>
        //     </div>
        // </div>
  )
}

