import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DiagnosticTestPage.css';
import cloudImage from './cloud.png';

function DiagnosticTestPage() {
  const navigate = useNavigate();



    const handleAnswerClick = () => {
      navigate('/test-questions');
    };
  
    return (
      <div className="sky">
        <div className="clouds"></div>
        <div className="content">
          <h1>Over the last two weeks, how often have you been bothered by any of the following problems?</h1>
          <div className="buttons">
            <button>Go Back</button>
            <button onClick={handleAnswerClick}>Answer</button>
          </div>
        </div>
      </div>
    );
  }

export default DiagnosticTestPage;