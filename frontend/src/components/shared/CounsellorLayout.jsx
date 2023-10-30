import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import CounsellorSidebar from './CounsellorSidebar';
// import Header from './Header';
import CounsellorHeader from './CounsellorHeader'

export default function Layout() {
  // Initialize the state to store the counsellor ID
    const [counsellorId, setCounsellorId] = useState(null);

    // useEffect to retrieve the counsellor ID from localStorage
    useEffect(() => {
        const authData = localStorage.getItem('authData');
        if (authData) {
            const { id } = JSON.parse(authData);
            setCounsellorId(id); // Set the counsellor ID in the state
        }
    }, []); // Empty dependency array, so it runs once when the component mounts

  return (
    <div className='flex flex-row w-screen h-screen overflow-hidden bg-slate-100'>
      <CounsellorSidebar />
      <div className='flex flex-col flex-1 h-screen'>
        < CounsellorHeader id={counsellorId } />
        <div className='min-h-0 p-4 overflow-auto'>
          {<Outlet/>}
        </div>
      </div>
    </div>
  )
}
