import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cloudImage from './cloud.png';

function DiagnosticTestPage() {
  const navigate = useNavigate();

  const handleAnswerClick = () => {
    navigate('/test-questions');
  };

  const handleAnswerClickBack = () => {
    navigate('/');
  };

  return (
    <div className="sky bg-white h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-500 z-10">
          <h1 className="text-3xl font-bold mb-8">Over the last two weeks, how often have you been bothered by any of the following problems?</h1>
          <div className="buttons space-x-4">
            <button className="h-12 px-4 text-lg bg-white text-black border border-blue-500 rounded-md cursor-pointer hover:bg-gray-200" onClick={handleAnswerClickBack}>Go Back</button>
            <button className="h-12 px-4 text-lg bg-white text-black border border-blue-500 rounded-md cursor-pointer hover:bg-gray-200" onClick={handleAnswerClick}>Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticTestPage;
