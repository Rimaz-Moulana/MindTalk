import React from 'react'
import { Outlet } from 'react-router-dom'
import ModeratorSidebar from './ModeratorSidebar';
import ModeratorHeader from './ModeratorHeader';

export default function Layout() {
  return (
    <div className='flex flex-row bg-slate-100 h-screen w-screen overflow-hidden'>
      <ModeratorSidebar />
      <div className='flex-1 h-screen flex flex-col'>
        <ModeratorHeader />
        <div className='p-4 min-h-0 overflow-auto'>
          {<Outlet/>}
        </div>
      </div>
    </div>
  )
}
