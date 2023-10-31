import axios from 'axios';
import { default as React, default as React, useEffect, useState } from 'react';

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
              const sessionData = result.data;
              console.log(result.data)
              
              // setSession({
              //   date: sessionData.date,
              //   time: session.time,
              //   counsellor: session.counsellor,
              //   typeOfSession: session.typeOfSession,
              //   link: session.link,
              // });
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
    <>
        <div className='w-3/4 m-auto'>
            <div className='mt-20'>
                {sessions.map((d) => (
                    <div className='bg-white h-[450px] text-black rounded-xl'>
                        <div className='h-56 rounded-t-xl bg-indigo-500 flex flex-col items-center gap-4 p-4'>
                            <p className='text-xl font-semibold'>{d.sessionType}</p>
                            <p>{d.time}</p>
                            <p>{d.date}</p>
                            <p>{d.counsellors}</p>
                            <p>{d.link}</p>
                            <button className='bg-indogo-500'>Reserve</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    </>
  )
}
