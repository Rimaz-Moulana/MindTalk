import React from "react";
import { useNavigate } from 'react-router-dom';

const TestResult = () => {
  // Component logic here
  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-8">


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-3xl text-blue-500 font-semibold text-center" >THANK YOU</h1>
          <p className="block mt-10 text-center text-lg">
            We have send the results to you email<br />
            Check your email
            
          </p>

          


        </div>
      </div>
    </>
  );
};

export default TestResult;
