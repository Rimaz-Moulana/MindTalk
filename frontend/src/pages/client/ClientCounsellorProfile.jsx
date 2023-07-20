import React from 'react'
import ProfileCard from '../../components/ProfileCard'
import ProfileDetails from '../../components/ProfileDetails'

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function ClientCounsellorProfile() {
  
  return (
    <>
      <div className='flex grid flex-col w-full gap-4 md:grid-cols-4'>
        <div className='overflow-y-auto bg-white rounded-xl'>
          <ProfileCard/>
        </div>
        <div className='overflow-hidden bg-white md:col-span-3 rounded-xl'>
          <ProfileDetails />
        </div>
      </div>
    </>
  )
}
