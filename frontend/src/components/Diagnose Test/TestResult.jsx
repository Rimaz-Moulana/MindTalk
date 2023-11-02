import React from "react";
import { Link, useLocation } from 'react-router-dom';

const getStatus = (score) => {
  if (score >= 0 && score <= 4) {
    return "None-minimal";
  } else if (score >= 5 && score <= 9) {
    return "Mild";
  } else if (score >= 10 && score <= 14) {
    return "Moderate";
  } else if (score >= 15 && score <= 19) {
    return "Moderately severe";
  } else if (score >= 20 && score <= 27) {
    return "Severe";
  } else {
    return "Invalid score";
  }
};

const getAction = (depressionLevel) => {
  switch (depressionLevel) {
    case "None-minimal":
      return "You might not need depression treatments. If you feel the need, you can connect with counselors for guidance.";
    case "Mild":
      return "It's a good idea to use clinical judgment about treatment, based on your duration of symptoms and functional impairment. Connecting with counselors can help guide you.";
    case "Moderate":
      return "It's advisable to use clinical judgment about treatment, based on your duration of symptoms and functional impairment. Counselors can provide guidance in this regard.";
    case "Moderately severe":
      return "Treatment options include antidepressants, psychotherapy, or a combination of both. Connecting with counselors can help you decide the best approach.";
    case "Severe":
      return "Considering treatment options like antidepressants with or without psychotherapy is recommended. Counselors can provide valuable insights and support.";
    default:
      return "Invalid depression level.";
  }
};


const TestResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get("score"));
  const depressionLevel = getStatus(score);
  const action = getAction(depressionLevel);

  // Component logic here
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-3xl text-blue-500 font-semibold text-center">THANK YOU</h1>
        <p className="block mt-10 text-center text-lg">
          We have sent the results to your email.<br />
          Check your email.
        </p>
        <p className="text-xl font-semibold mt-4 text-center">Your score is: {score}/28</p>
        <p className="text-center mt-2">
          <span className="text-xl font-bold text-blue-500">Depression level: {depressionLevel}</span><br />
          <br>
          </br>
          <span className="text-m font-semibold ">{action}</span>
        </p>
        <br />
        <div className="text-center">
          <Link to="/diagnostictest" className="h-12 px-4 text-lg bg-white text-black border border-blue-500 rounded-md cursor-pointer hover:bg-gray-200">
            Go Back
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TestResult;
