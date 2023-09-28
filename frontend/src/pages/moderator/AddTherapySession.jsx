/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

export default function AddTherapySession() {
  const navigate = useNavigate();

  const [session, setSession] = useState({
    date:"",
    time:"",
    counsellor:"",
    typeOfSession:"",
    link:""

  },[])

  const handleChange = (e) => {
    const {name,value} = e.target;
    setSession(...session, [name] , value);
  }
  
  useEffect(()=>{
    loadSession();
  }, [])

  const onSubmit=async () =>{
    // e.preventDefault();
    try{
      console.log("fetching session details..");
      const authData = localStorage.getItem('authData');
      console.log(authData)
      if(authData){
        const {accessToken} = JSON.parse(authData);
        console.log(accessToken);
        const config = {
          headers : {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
          },
          withCredentials: true,
        };
        await axios.post("http://localhost:8080/api/moderator/addtherapySession",session,config);
        navigate("/moderator/addtherapysession");
      }


    }catch(error)
    {
      console.error("there error occured",error);
    }

  }
  
  
  const loadSession=async ()=>{
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
        const result = await axios.get(`http://localhost:8080/api/moderator/getSession`, config)

        if(result.status === 200 ){
          const sessionData = result.data;
          setSession({
            date:sessionData.data,
            time:session.time,
            counsellor:session.counsellor,
            typeOfSession:session.typeOfSession,
            link:session.link,
          });
          // 3
          // setData(result.data);
          // console.log(session)
        }
      }
    }catch(error){
      console.error("this is the get error:",error)
    }
};
  return (
    <>
    <div><h1 className='text-lg font-bold'>Add New Therapy Session</h1></div>
        <div className="w-full max-w-sm mx-auto mt-0">
  <form onSubmit={(e)=>onSubmit(e)}>
    <div className="flex flex-col mb-6">
      <label className="text-lg font-medium">Date</label>
      <input
        type="date"
        id="date"
        value={session.date}
        onChange={(e)=>handleChange(e)}
        className="w-full px-4 py-2 border rounded-md"
      />
    </div>

    <div className="flex flex-col mb-6">
      <label className="text-lg font-medium">Time</label>
      <input
        type="time"
        id="time"
        value={session.time}
        onChange={(e)=>handleChange(e)}
        className="w-full px-4 py-2 border rounded-md"
      />
    </div>

    <div className="flex flex-col mb-6">
      <label className="text-lg font-medium">Counselors</label>
      <select
        id="counselors"
        value={session.counsellor}
        onChange={(e)=>handleChange(e)}
        className="w-full px-4 py-2 border rounded-md"
      >
        <option value="counselor1">Counselor 1</option>
        <option value="counselor2">Counselor 2</option>
        <option value="counselor3">Counselor 3</option>
      </select>
    </div>

    <div className="flex flex-col mb-6">
      <label  className="text-lg font-medium">Type of the Therapy Session</label>
      <select
        id="therapySession"
        value={session.typeOfSession}
        onChange={(e)=>handleChange(e)}
        className="w-full px-4 py-2 border rounded-md"
      >
        <option value="individual">Individual</option>
        <option value="couples">Couples</option>
        <option value="group">Group</option>
      </select>
    </div>

    <div className="flex flex-col mb-6">
      <label className="text-lg font-medium">Add Zoom Link</label>
      <input
        type={'text'}
        id="link"
        value={session.link}
        onChange={(e)=>handleChange(e)}
        className="w-full px-4 py-2 border rounded-md"
      />
    </div>

    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md" >Submit</button>
  </form>
</div>
<div ><h1  className='text-lg font-bold'>Upcoming Therapy Session</h1></div>
<div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-[100%] py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead
                className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className=" px-6 py-4">Date</th>
                  <th scope="col" className=" px-6 py-4">Type of therapy session</th>
                  <th scope="col" className=" px-6 py-4">Time</th>
                  <th scope="col" className=" px-6 py-4">Link</th>
                </tr>
              </thead>
              <tbody>
              {/* {session.map((index,item) => ( */}
                <tr className="border-b dark:border-neutral-500">
                  {/* <td className="whitespace-nowrap  px-6 py-4 font-medium">{item.date}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{item.time}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{item.counsellor}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{item.typeOfSession}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{item.link}</td> */}
                </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</>
);

}