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
