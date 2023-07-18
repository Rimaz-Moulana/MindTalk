import React from 'react';
// import sky from '../assets/sky.jpg';
// import logo from '../assets/logo.png';
// import { FiClipboard } from 'react-icons/fi';

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full gap-4 md:grid-cols-4">
      
      <div className="bg-white rounded-xl md:col-span-3 ">
        {/* <div className="grid px-6 py-5 mx-auto max-w-7xl gap-x-8 lg:px-8">

          <form>
            <div className="">

              <div className="pb-12 border-b border-gray-900/10">
                <h1 className="text-lg font-bold text-gray-900">Personal Information</h1>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

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
                    <label htmlFor="birthday" className="block text-sm font-medium leading-6 text-gray-900">
                      Birthday
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        autoComplete='birthday'
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                      Gender
                    </label>
                    <div className="mt-2">
                      <select
                        id="gender"
                        name="gender"
                        autoComplete="gender"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
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

                  <div className="col-span-full">
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                      Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                      District
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="district"
                        id="district"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                      ZIP
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-5 pb-12 border-b border-gray-900/10">
                <h1 className="text-lg font-bold text-gray-900">Emergency Contact 1</h1>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="name1" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name1"
                        id="name1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone1" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phone1"
                        id="phone1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

              </div>

              <div className="pt-5 pb-12 border-b border-gray-900/10">
                <h1 className="text-lg font-bold text-gray-900">Emergency Contact 2</h1>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="name2" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name2"
                        id="name2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone2" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phone2"
                        id="phone2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

              </div>

              <div className="pt-5 pb-12 border-b border-gray-900/10">
                <h1 className="text-lg font-bold text-gray-900">Emergency Contact 3</h1>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="name3" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name3"
                        id="name3"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone3" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phone3"
                        id="phone3"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

              </div>
              

            </div>

            <div className="flex items-center justify-end mt-6 gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm font-semibold text-white bg-blue-900 rounded-lg shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
            
          </form>

        </div> */}
      </div>

      <div className="flex flex-col gap-4 ">

        <div className="overflow-hidden text-center bg-white shadow-md rounded-xl h-80">
          {/* <img src={sky} alt="sky" className="object-cover w-full h-32 sm:h-48" />
          <div className="justify-between">
            <img src={logo} alt="Logo" className="w-20 h-20 rounded-full justify-content" />
          </div>
          <span className="text-xl font-bold text-blue-900">John Doe</span> */}

        </div>

        <div className="p-5 overflow-hidden text-center bg-white shadow-md rounded-xl h-80">
          {/* <span className="text-lg text-blue-900 ">Let us get to know about you. Upload your previous medical files if any.  </span>
          <div className="flex justify-center px-6 m-2 border border-dashed rounded-lg border-gray-900/25 py-53">
                <div className="text-center">
                  <FiClipboard className="w-12 h-12 mx-auto mt-2 text-gray-300" aria-hidden="true" />
                  <div className="flex mt-2 text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative font-semibold text-blue-700 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-700 focus-within:ring-offset-2 hover:text-blue-900"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PDF, DOC</p>
                </div>
              </div> */}
        </div>

      </div>

    </div>
  );
}
