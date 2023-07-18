import React from 'react'
import sky from '../../assets/sky.jpg';
import logo from '../../assets/logo.png';
import IconComponent from '../../components/IconComponent';

const CounsellorProfile = () => {
  return (
    <>
      <div className="flex grid flex-col w-full gap-4 md:grid-cols-4">

      <div className="bg-white rounded-xl md:col-span-3 ">
        <div className="grid px-6 py-5 mx-auto max-w-7xl gap-x-8 lg:px-8">

          <form>
            <div className="">

              <div className="pb-4 ">
                <h1 className="text-2xl ml-8 font-bold text-gray-900">Personal Information</h1>

                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-6">
                    <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                      Home Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="mobilephone" className="block text-sm font-medium leading-6 text-gray-900">
                      Mobile Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="tel"
                        name="mobilephone"
                        id="mobilephone"
                        autoComplete='mobilephone'
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="fixedphone" className="block text-sm font-medium leading-6 text-gray-900">
                      Fixed Phone
                    </label>
                    <div className="mt-2">
                        <input
                        type="tel"
                        id="fixedphone"
                        name="fixedphone"
                        autoComplete="fixedphone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      >
                      </input>
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
                    <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                      District
                    </label>
                    <div className="mt-2">
                      <input
                        id="district"
                        name="district"
                        type="text"
                        autoComplete="district"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* <div className="col-span-full">
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
                  </div> */}

                  {/* <div className="sm:col-span-2 sm:col-start-1">
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
                  </div> */}

                  {/* <div className="sm:col-span-2">
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
                  </div> */}

                  {/* <div className="sm:col-span-2">
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
                  </div> */}
                </div>

              </div>

              <div className="pt-5 pb-12 border-b border-gray-900/10">
                <h1 className="text-2xl ml-10 font-bold text-gray-900">Professional Information</h1>

                <div className="grid grid-cols-1 mt-8 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="yearsofexperience" className="block text-sm font-medium leading-6 text-gray-900">
                      Years of Experience
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="yearsofexperience"
                        id="yearsofexperience"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
                      Degree / Diploma
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="degree"
                        id="degree"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="workplace" className="block text-sm font-medium leading-6 text-gray-900">
                      Current Workplace
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="workplace"
                        id="workplace"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="specialize" className="block text-sm font-medium leading-6 text-gray-900">
                      Specialized In
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="specialize"
                        id="specialize"
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

        </div>
      </div>

      <div className="flex flex-col gap-4  ">

        <div className="pb-5 overflow-hidden h-[52rem] text-center bg-white shadow-md rounded-xl">

          <img src={sky} alt="sky" className="object-cover w-full h-48" />
          <img src={logo} alt="Logo" className="rounded-full h-20 w-20 mx-auto -mt-10" />
            <span className="text-xl font-bold text-blue-900">John Doe</span>
            
            <div className="mt-1 text-center">
              <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
                <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div className='flex items-center justify-center mt-2'>
                <IconComponent />
              </div>
              <div className="mt-8 mb-2 italic fas fa-briefcase text- text-blueGray-600">
                {/* <i className="mr-2 text-lg fas fa-briefcase text-blueGray-400"></i> */}
                Solution Manager - Creative Team Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="mr-2 text-lg fas fa-university text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
            <div className="py-10 mt-10 text-center border-t border-blueGray-200">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-1 lg:w-9/12">
                  <p className="mb-4 text-lg leading-relaxed text-justify text-blueGray-700">
                    An artist of considerable range, Jenna the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy
                    writes, performs and records all of his own music,
                    giving it a warm, intimate feel with a solid groove
                    structure. An artist of considerable range.
                  </p>
                  <a href="javascript:void(0);" className="font-normal text-pink-500">
                    Show more
                  </a>
                </div>
              </div>
            </div>

        </div>

        {/* <div className="p-5 overflow-hidden text-center bg-white shadow-md rounded-xl ">
          <div className='pb-5 border-b border-gray-900/10'>
            <span className="text-lg text-blue-900 ">Let us get to know about you. Upload your previous medical files if any.  </span>
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
            </div>
          </div>
        </div> */}

      </div>

    </div>
    </>
  )
}

export default CounsellorProfile
