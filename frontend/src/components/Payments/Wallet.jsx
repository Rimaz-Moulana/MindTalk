import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Wallet() {
  const navigate = useNavigate();

  const handleAnswerClick = () => {
    navigate('/');
  };

  const handleAnswerClickBack = () => {
    navigate('/');
  };

  return (
    <div className="sky bg-white h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-500 z-10">
          <h1 className="text-3xl font-bold mb-8">wallet</h1>
        
        </div>
      </div>
    </div>
  );
}

export default Wallet;
