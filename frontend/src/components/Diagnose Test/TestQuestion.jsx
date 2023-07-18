import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="sky bg-white h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-500 z-10">
          <h1 className="text-3xl font-bold mb-8">{question}</h1>
          <div className="buttons space-x-4">
            {answers.map((answer, index) => (
              <button
                key={index}
                className="h-12 px-4 text-lg bg-white text-black border border-blue-500 rounded-md cursor-pointer hover:bg-gray-200"
                onClick={handleAnswerClick}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestQuestion;
