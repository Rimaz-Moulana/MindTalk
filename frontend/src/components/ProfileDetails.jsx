import React from 'react'

const ProfileDetails = () => {
  return (
    < >
      
      <div className='w-full bg-top bg-no-repeat bg-cover h-60 rounded-t-xl bg-sky-500 max-md:hidden' 
                                style={{background: 'url("https://source.unsplash.com/1500x250?mountain")'}}>
      </div>

      <div className=''>
        <div className='grid grid-cols-2 gap-5'>
           <div className='z-50 p-5 mt-5 ml-5 transition-transform bg-blue-50 drop-shadow-lg rounded-xl'>
                <h3 class="max-sm:2xl text-3xl font-bold mt-4 mb-4">General Information</h3>
                <ul class="list-none list-inside mt-10">
                    <li className='grid grid-cols-3'><span className="text-xl font-bold ">Name   :</span> <span className='col-span-2 ml-5 text-lg'> John Doe</span></li>
                    <li className='grid grid-cols-3'><span className="text-xl font-bold ">Address   :</span> <span className='col-span-2 ml-5 text-lg'>123 Main Street, City, Country</span></li>
                    <li className='grid grid-cols-3'><span className="text-xl font-bold ">Mobile Phone   :</span> <span className='col-span-2 ml-5 text-lg'>123-456-7890</span></li>
                    <li className='grid grid-cols-3'><span className="text-xl font-bold ">Fixed Phone   :</span> <span className='col-span-2 ml-5 text-lg'>987-654-3210</span></li>
                    <li className='grid grid-cols-3'><span className="text-xl font-bold ">Email   :</span> <span className='col-span-2 ml-5 text-lg'>john.doe@example.com</span></li>
                    <li className='grid grid-cols-3'><span className="text-xl font-bold ">District   :</span> <span className='col-span-2 ml-5 text-lg'>ABC District</span></li>
                </ul>
            </div>

        <div className='p-5 mt-5 mr-5 transition-transform bg-blue-50 drop-shadow-lg rounded-xl '>
          <h3 class="max-sm:2xl text-3xl font-bold mt-4 mb-4">Professional Information</h3>
            <ul class="list-none list-inside mt-10">
              <li className='grid grid-cols-5'><span className="col-span-2 text-xl font-bold">Years of Experience   :</span> <span className='col-span-3 ml-5 text-lg'>5</span></li>
              <li className='grid grid-cols-5'><span className="col-span-2 text-xl font-bold">Degree/Diploma   :</span> <span className='col-span-3 ml-5 text-lg'>Bachelor's Degree in Computer Science</span></li>
              <li className='grid grid-cols-5'><span className="col-span-2 text-xl font-bold">Current Workplace   :</span> <span className='col-span-3 ml-5 text-lg'>ABC Company</span></li>
            </ul>
            </div>
        </div>

       
      <div className='grid grid-cols-2 gap-5'>
        <div className='p-5 mt-5 ml-5 mr-5 transition-transform bg-blue-50 drop-shadow-lg rounded-xl'>
           <h3 class="max-sm:2xl text-3xl font-bold mt-4 mb-4">Contact</h3>
            <ul class="list-none list-inside">
              <li><span className="text-xl font-bold">Email   :</span> <span className='ml-5 text-lg'>john.doe@example.com</span></li>
              <li><span className="text-xl font-bold">Phone   :</span> <span className='ml-5 text-lg'>123-456-7890</span></li>
              <li><span className="text-xl font-bold">Website   :</span> <span className='ml-5 text-lg'>www.example.com</span></li>
            </ul>
        </div>

        <div>
          
        </div>
      </div>
      </div>   
    </>
  )
}

export default ProfileDetails
