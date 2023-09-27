/* eslint-disable no-unused-vars */
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
 

export default function AddTherapySession() {
  const [session, setSession] = useState({
    date:"",
    time:"",
    counselor:"",
    typeOfSession:"",
    link:""

  }, [])

  const handleChange = (e) => {
    const {name,value} = e.target;
    setSession(...session, [name] , value);
  }

  useEffect(()=>{
    loadSession();
  })

  const onSubmit=async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8080/api/moderator/addtherapySession",session);
    navigate("/moderator/addtherapysession");
    loadSession();
  }
  
  const loadSession=async ()=>{
    const result = await axios.get(`http://localhost:8080/api/moderator/getSession`)
    setSession(result.data);
    loadSession();
  }

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
        value={session.counselor}
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
        type="text"
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
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">{session.date}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{session.typeOfSession}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{session.time}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{session.link}</td>
                </tr>
                {/* <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                  <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap  px-6 py-4">@fat</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td>
                  <td colSpan={2} className="whitespace-nowrap  px-6 py-4">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</>
);

}