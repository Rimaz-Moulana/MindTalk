import React from 'react';
import logo from '../../assets/logo.png';
import { FiClipboard } from 'react-icons/fi';

export default function AddUser() {
  return (
    <div className="flex flex-col-reverse gap-4 w-full grid md:grid-cols-4">

      <div className="bg-white rounded-xl md:col-span-3 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 px-6 lg:px-8 py-5">

          <form>
            <div className="">

              <div className="border-b border-gray-900/10 pb-12">
                <h1 className="text-lg font-bold text-gray-900">Moderator Information</h1>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                

                  <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone 
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="phone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

             

               
             
               
                </div>

              </div>

          
         

              

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
            
          </form>

        </div>
      </div>

      <div className="flex flex-col gap-4 ">

        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center pb-5">

          {/* <img src={sky} alt="sky" className="w-full h-48 object-cover" /> */}
          <div className='h-48 w-full bg-sky-500 bg-cover bg-no-repeat bg-center' 
            style={{background: 'url("https://source.unsplash.com/650x200?sky")'}}>
          </div>
          <img src={logo} alt="Logo" className="rounded-full h-20 w-20 mx-auto -mt-10" />
          <span className="font-bold text-xl text-blue-900">John Doe</span>

        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden p-5 ">

          <div className='pb-5 text-center '>
            <span className="text-lg text-blue-900 ">Let us get to know about you. Upload your previous medical files if any.  </span>
            <div className="m-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-53">
              <div className="text-center">
                <FiClipboard className="mt-2 mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-2 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-700 focus-within:ring-offset-2 hover:text-blue-900"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PDF, DOC</p>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-900/10 pt-3 pb-3'>
            <span className='text-gray-400'>abc.pdf</span>
            <span className='text-gray-400 float-right'>07/07/2023</span>
          </div>
          <div className='border-t border-gray-900/10 pt-3 pb-3'>
            <span className='text-gray-400 '>abc.pdf</span>
            <span className='text-gray-400 float-right'>07/07/2023</span>
          </div>
          <div className='border-t border-gray-900/10 pt-3 pb-3'>
            <span className='text-gray-400 '>abc.pdf</span>
            <span className='text-gray-400 float-right'>07/07/2023</span>
          </div>

        </div>

      </div>

    </div>
  );
}
