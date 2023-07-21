import React from 'react'

function ClientMeditation() {
  return (
    <div className='flex-flex-row'>

      <div className="flex flex-col gap-4 w-full bg-white rounded-xl mb-5">
        <h1 className='text-xl font-bold pt-5 pl-5'>Meditation / Breathing Exercises</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-8 p-5 pt-0'>
            <iframe className='w-full aspect-[3/2]' src='https://www.youtube.com/embed/hAkgumAMOIg' title='video1'> </iframe>
            <iframe className='w-full aspect-[3/2]' src='https://www.youtube.com/embed/hAkgumAMOIg' title='video1'> </iframe>
            <iframe className='w-full aspect-[3/2]' src='https://www.youtube.com/embed/hAkgumAMOIg' title='video1'> </iframe>
            <iframe className='w-full aspect-[3/2]' src='https://www.youtube.com/embed/hAkgumAMOIg' title='video1'> </iframe>
            <iframe className='w-full aspect-[3/2]' src='https://www.youtube.com/embed/hAkgumAMOIg' title='video1'> </iframe>
            <iframe className='w-full aspect-[3/2]' src='https://www.youtube.com/embed/hAkgumAMOIg' title='video1'> </iframe>
        </div>
      </div>
  
    </div>
  )
}

export default ClientMeditation
