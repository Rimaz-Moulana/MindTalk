import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import questionsData from './questions.json';
import axios from 'axios';

const TestQuestion = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [scores, setScores] = useState(Array(questionsData.length).fill(0));

    useEffect(() => {
        setQuestions(questionsData);
    }, []);

    const handleAnswerClick = (score) => {
        const updatedScores = [...scores];
        updatedScores[currentQuestion] = score;
        setScores(updatedScores);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            const totalScore = updatedScores.reduce((total, score) => total + score, 0);
            sendTestResultsToBackend(totalScore);
        }
    };

    const handleBackClick = () => {
        const previousQuestion = currentQuestion - 1;
        if (previousQuestion >= 0) {
            setCurrentQuestion(previousQuestion);
        }
    };

    
    const sendTestResultsToBackend = async (totalScore) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/test/send-test-results', {
                userId: 123, 
                score: totalScore,
            }, {
                headers: {
                    'Content-Type': 'application/json', 
                },
            });
    
            console.log(response.data); 
            navigate(`/testresult?score=${totalScore}`);
        } catch (error) {
            console.error('Error sending test results:', error);
        }
    };
    

    if (questions.length === 0) {
        return <div>Loading...</div>; // Add a loading state if needed
    }

    const { question, answers } = questions[currentQuestion];
    const progress = ((currentQuestion) / 9) * 100;

    return (
        <div className="sky bg-white h-screen">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-500 z-10">
                    {currentQuestion > 0 && (
                        <div className="cursor-pointer flex items-center text-blue-500" onClick={handleBackClick}>
                            <BsArrowLeft size={30} className="mr-2 font-bold" />
                        </div>

                    )}

                    <div className="progress-bar w-280 h-2 bg-gray-200 rounded-full mb-6">
                        <div
                            className="progress bg-blue-500 h-full rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mx-auto">{question}</h1>
                    </div>

                    <div className="buttons space-x-4">
                        {answers.map((answer, index) => (
                            <button
                                key={index}
                                className="h-12 px-4 text-lg bg-white text-black border border-blue-500 rounded-md cursor-pointer hover:bg-gray-200"
                                onClick={() => handleAnswerClick(index)} 
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestQuestion;
