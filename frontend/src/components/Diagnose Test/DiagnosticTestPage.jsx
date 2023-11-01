import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cloudImage from './cloud.png';

function DiagnosticTestPage() {
  const navigate = useNavigate();

  const handleAnswerClick = () => {
    navigate('/test-questions');
  };

  const handleAnswerClickBack = () => {
    navigate('/client');
  };

  return (
    <div className="h-screen bg-white sky">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute z-10 text-center text-blue-500 transform -translate-x-1/2 -translate-y-1/2 content top-1/2 left-1/2">
          <h1 className="mb-8 text-3xl font-bold">Over the last two weeks, how often have you been bothered by any of the following problems?</h1>
          <div className="space-x-4 buttons">
            <button className="h-12 px-4 text-lg text-black bg-white border border-blue-500 rounded-md cursor-pointer hover:bg-gray-200" onClick={handleAnswerClickBack}>Go Back</button>
            <button className="h-12 px-4 text-lg text-black bg-white border border-blue-500 rounded-md cursor-pointer hover:bg-gray-200" onClick={handleAnswerClick}>Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticTestPage;
