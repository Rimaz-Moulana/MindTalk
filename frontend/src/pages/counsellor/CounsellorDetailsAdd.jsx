// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function CounsellorDetailsAdd() {
  return (
    <div>
        <section className="h-screen">
          <div className="h-full">
            {/* <!-- Left column container with background--> */}
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
    
              {/* <!-- Right column container --> */}
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 flex flex-col">
              <h1 className='text-2xl font-bold mb-4'>Add Your Details</h1>
              <form >
      <div className='mb-4'>
      <label htmlFor='firstName' className='block text-sm font-medium mb-1'>First Name</label>
      <input
        type='text'
        id='firstName'
        name='firstname'
        className='lg:w-[400px] px-3 py-2 border border-slate-500 rounded-md focus:outline-none focus:ring focus:border-blue-300'

      />
      </div>
      <div className='mb-4'>
      <label htmlFor='lastName' className='block text-sm font-medium mb-1'>Last Name</label>
      <input
        type='text'
        id='lastName'
        name='lastname'
        className='lg:w-[400px] px-3 py-2 border border-slate-500 rounded-md focus:outline-none focus:ring focus:border-blue-300'

      />
      </div>
      <div className='mb-4'>
      <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        className='lg:w-[400px] px-3 py-2 border border-slate-500 rounded-md focus:outline-none focus:ring focus:border-blue-300'
      />
      </div>
      <div className='mb-4'>
      <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        className='lg:w-[400px] px-3 py-2 border border-slate-500 rounded-md focus:outline-none focus:ring focus:border-blue-300'
      />
      </div>
      <div className='mb-4'>
      <label htmlFor='licenceNo' className='block text-sm font-medium mb-1'>License Number</label>
      <input
        type='text'
        id='licenseNo'
        name='licenseNo'
        className='lg:w-[400px] px-3 py-2 border border-slate-500 rounded-md focus:outline-none focus:ring focus:border-blue-300'
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
            className="px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className='lg:w-96'>
        <button
          type="submit"
          className="bg-blue-500 lg:w-[400px] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </div>
    </form>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
