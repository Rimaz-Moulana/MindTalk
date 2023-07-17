import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TestQuestion.css';
import cloudImage from './cloud.png';
import questionsData from './questions.json';

function TestQuestion() {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(questionsData);
    }, []);

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
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            navigate('/test-questions');
        }
    };

    if (questions.length === 0) {
        return <div>Loading...</div>; // Add a loading state if needed
    }

    const { question, answers } = questions[currentQuestion];

    return (
        <div className="sky">
            <div className="clouds"></div>
            <div className="content">
                <h1>{question}</h1>
                <div className="buttons">
                    <button onClick={handleAnswerClick}>Not at all</button>
                    <button onClick={handleAnswerClick}>Several days</button>
                    <button onClick={handleAnswerClick}>More than half the days</button>
                    <button onClick={handleAnswerClick}>Nearly every day</button>
                </div>
            </div>
        </div>
    );
}

export default TestQuestion;
