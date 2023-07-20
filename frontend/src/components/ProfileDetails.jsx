import React from 'react'

const ProfileDetails = () => {
  return (
    < >
      <div className='px-5 '>
        <div >
          <h3 class="text-3xl font-bold mt-4 mb-4">General Information</h3>
            <ul class="list-none list-inside">
              <li><span class="font-bold">Name:</span> John Doe</li>
              <li><span class="font-bold">Address:</span> 123 Main Street, City, Country</li>
              <li><span class="font-bold">Mobile Phone:</span> 123-456-7890</li>
              <li><span class="font-bold">Fixed Phone:</span> 987-654-3210</li>
              <li><span class="font-bold">Email:</span> john.doe@example.com</li>
              <li><span class="font-bold">District:</span> ABC District</li>
            </ul>
        </div>

        <div>
          <h3 class="text-3xl font-bold mt-4 mb-4">Professional Information</h3>
            <ul class="list-none list-inside">
              <li><span class="font-bold">Years of Experience:</span> 5</li>
              <li><span class="font-bold">Degree/Diploma:</span> Bachelor's Degree in Computer Science</li>
              <li><span class="font-bold">Current Workplace:</span> ABC Company</li>
            </ul>
        </div>

        <div>
           <h3 class="text-2xl font-bold mt-4 mb-4">Contact</h3>
            <ul class="list-none list-inside">
              <li><span class="font-bold">Email:</span> john.doe@example.com</li>
              <li><span class="font-bold">Phone:</span> 123-456-7890</li>
              <li><span class="font-bold">Website:</span> www.example.com</li>
            </ul>
        </div>
      </div>   
    </>
  )
}

export default ProfileDetails
