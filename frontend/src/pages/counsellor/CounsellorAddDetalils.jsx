// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function CounsellorAddDetalils() {
  return (
    <div className="max-w-md mx-auto p-6">
    <h1 className='text-2xl font-bold mb-4'>Add Your Details</h1>
    <form >
      <div className='mb-4'>
      <label htmlFor='firstName' className='block text-sm font-medium mb-1'>First Name</label>
      <input
        type='text'
        id='firstName'
        name='firstname'
        className='w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300'

      />
      </div>
      <div className='mb-4'>
      <label htmlFor='lastName' className='block text-sm font-medium mb-1'>Last Name</label>
      <input
        type='text'
        id='lastName'
        name='lastname'
        className='w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300'

      />
      </div>
      <div className='mb-4'>
      <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        className='w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300'
      />
      </div>
      <div className='mb-4'>
      <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        className='w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300'
      />
      </div>
      <div className='mb-4'>
      <label htmlFor='licenceNo' className='block text-sm font-medium mb-1'>License Number</label>
      <input
        type='text'
        id='licenseNo'
        name='licenseNo'
        className='w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300'
      />
      </div>
      <div className="mb-4">
          <label htmlFor="licenseImage" className="block text-sm font-medium mb-1">
            License Image
          </label>
          <input
            type="file"
            id="licenseImage"
            name="licenseImage"
            accept="image/*"
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className='w-full'>
        <button
          type="submit"
          className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </div>
    </form>

    </div>
  )
}
