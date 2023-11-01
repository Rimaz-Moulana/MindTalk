/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

export default function AddTherapySession() {
  const navigate = useNavigate();

  const [session, setSession] = useState({
    date:"",
    time:"",
    counsellors:"",
    sessionType:"",
    link:"",
  });

  const [sessions, setSessions] = useState([])
  const [getCounsellor, setGetCounsellor] = useState([])
  const [selectedOption, setSelectedOption] = useState('');

  const selectCounsellor = Object.values(getCounsellor)
  console.log(selectCounsellor[0])

  const handleChange = (e) => {
    const {name,value} = e.target;
    setSession({...session, [name] : value});
  }

const handleChange2 = (e) =>{
  setSelectedOption(e.target.value);
}


  const onSubmit=async (e) =>{
    e.preventDefault();
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
        console.log(session)
        const response  = await axios.post("http://localhost:8080/api/moderator/addtherapySession",session,config);
        console.log('session add successfully:',response.data)
        // navigate("/moderator/addtherapysession");
        loadSession()
      }
    }catch(error)
    {
      console.error("there error occured",error);
    }

  }
  
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

const getCounsellorname = async () =>{

  try{
    const authdata = localStorage.getItem('authData');
    if(authdata){
      const {accessToken} = JSON.parse(authdata);

      const config = {
        headers: {
          'Content-Type' : 'application/json' ,
          Authorization : `Bearer ${accessToken}`,
        },
        withCredentials : true,
      }
      console.log(config);

      const result = await axios.get(`http://localhost:8080/api/counsellor/details/all`,config);

      if(result.status === 200){
        console.log(result.data)
        setGetCounsellor(result.data)
      }
    }
  }catch(error){
    console.error("this is the get error:",error);
  }
}

useEffect(()=>{
  getCounsellorname()
},[])


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
        name="date"
        value={session.date}
        onChange={(e)=>{handleChange(e)}}
        className="w-full px-4 py-2 border rounded-md"
      />
    </div>

    <div className="flex flex-col mb-6">
      <label className="text-lg font-medium">Time</label>
      <input
        type="time"
        id="time"
        name="time"
        value={session.time}
        onChange={(e)=>handleChange(e)}
        className="w-full px-4 py-2 border rounded-md"
      />
    </div>

    <div className="flex flex-col mb-6">
  <label className="text-lg font-medium">Counsellors</label>
  <select
    id="counsellors"
    value={selectedOption}
    name="counsellors"
    onChange={handleChange2}
    className="w-full px-4 py-2 border rounded-md"
  >
    <option value="">Select a Counsellor</option>
    {getCounsellor.map((counselor, index) => (
      <option key={index} value={counselor.firstname + " " + counselor.lastname}>
        {counselor.firstname + " " + counselor.lastname}
      </option>
    ))}
  </select>
</div>

    <div className="flex flex-col mb-6">
      <label  className="text-lg font-medium">Type of the Therapy Session</label>
      <select
        id="sessionType"
        name="sessionType"
        value={session.sessionType}
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
        name="link"
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
                  <th scope="col" className=" px-6 py-4">Time</th>
                  <th scope="col" className=" px-6 py-4">Counsellor</th>
                  <th scope="col" className=" px-6 py-4">Type of therapy session</th>
                  <th scope="col" className=" px-6 py-4">Link</th>
                </tr>
              </thead>
              <tbody>
              {sessions.map((item, index) => (
               
                <tr key={index} className="border-b dark:border-neutral-500">
                {/* {console.log(item.date)} */}
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">{item.date}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{item.time}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{item.counsellors}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{item.sessionType}</td>
                  <td className="whitespace-nowrap  px-6 py-4">{item.link}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</>
);

}