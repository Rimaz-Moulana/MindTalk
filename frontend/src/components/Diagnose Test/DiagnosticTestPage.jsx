import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DiagnosticTestPage.css';
import cloudImage from './cloud.png';

function DiagnosticTestPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const createClouds = () => {
      const sky = document.querySelector('.clouds');
      const existingClouds = document.querySelectorAll('.cloud');

      // Limit the maximum number of clouds
      const maxClouds = 5;

      if (existingClouds.length < maxClouds) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';

        const cloudSize = Math.floor(Math.random() * 100) + 100;
        const cloudPosition = Math.floor(Math.random() * 80) + 10; // Adjust the range to control the vertical position of clouds
        const cloudAnimationDuration = Math.floor(Math.random() * 40) + 20; // Range: 20 to 60 seconds

        cloud.style.width = `${cloudSize}px`;
        cloud.style.height = `${cloudSize}px`;
        cloud.style.left = `${-cloudSize}px`;
        cloud.style.top = `${cloudPosition}vh`; // Adjust the vertical position of clouds
        cloud.style.animationDuration = `${cloudAnimationDuration}s`;

        sky.appendChild(cloud);

        cloud.addEventListener('animationend', () => {
          cloud.remove();
        });
      }
    };

    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const startAnimation = async () => {
      try {
        await preloadImage(cloudImage);
        createClouds();
        setInterval(createClouds, 3000);
      } catch (error) {
        console.error('Failed to load cloud image:', error);
      }
    };

    startAnimation();
  }, []);


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