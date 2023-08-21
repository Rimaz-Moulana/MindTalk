import React from 'react'
import ClientProfileCard from '../../components/ClientDetails/ClientProfileCard'
import ClientProfileHistory from '../../components/ClientDetails/ClientProfileHistory'

function CounsellorClientProfile() {
  return (
    <div className='grid grid-cols-4 gap-5'>

      <div className='bg-white rounded-xl'>
        <ClientProfileCard />
      </div>

      <div className='col-span-3 bg-white rounded-xl'>
        <ClientProfileHistory />
      </div>

    </div>
  )
}

export default CounsellorClientProfile
