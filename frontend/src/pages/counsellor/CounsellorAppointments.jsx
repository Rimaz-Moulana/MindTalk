import React from 'react'
import CounsellorAppointmentFullCalender from '../../components/CounsellorDashboard/CounsellorAppointmentFullCalender'
import CounsellorAvailability from './CounsellorAvailability'

function CounsellorAppointments() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <CounsellorAvailability />
      </div>
      <div className=''>
        <CounsellorAppointmentFullCalender />
      </div>
    </div>
  )
}

export default CounsellorAppointments
