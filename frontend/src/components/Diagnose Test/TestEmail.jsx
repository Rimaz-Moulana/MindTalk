import React from "react";
import { useNavigate } from 'react-router-dom';

const testEmail = () => {
  // Component logic here
  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-8">


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-3xl text-blue-500 font-semibold text-center" >THANK YOU</h1>
          <p className="block mt-10 text-center text-lg">
            We are working on  your test results<br />
            Please provide the email here.
            We would sent you the result email as soon as possible<br />
            Thanks for taking the test...
          </p>

          <form className="space-y-6" action="#" method="POST">
            <div className="mt-8">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Enter Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Results
              </button>
            </div>
          </form>


        </div>
      </div>
    </>
  );
};

export default testEmail;
