import React from 'react';
import ReactModal from 'react-modal';

const RegisterClient = ({ closeModal }) => {

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    // You can use state to manage form data and send it to the server
    // Close the modal after successful submission
    closeModal();
  };

  return (
    <ReactModal
    isOpen={true} // isOpen should be managed from the parent component
    onRequestClose={closeModal}
    contentLabel="Add Client Modal"
    className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
    overlayClassName="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
  >
      <div className="bg-gradient-to-br from-blue-200 to-green-50 h-[51rem] rounded-2xl md:col-span-3 ">
        <div className="grid max-w-full px-6 py-5 mx-auto gap-x-8 lg:px-8">

          <form onSubmit={handleSubmit}>

              <div className="pb-2 ">
                <h1 className="ml-4 text-4xl font-bold text-gray-900"> Information</h1>

                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                      First Name
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
                                  
                  <div className="sm:col-span-3">
                    <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Last Name
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

                </div>

                <div className="flex justify-end mt-5 mr-6">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>

              </div>

          </form>

        </div>
      </div>
    </ReactModal>
      
  )
}

export default RegisterClient
