import React, { useState } from "react";

const QuizApp = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: "Paris",
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: "Berlin",
    },
  ];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState("");
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answer = formData.get("answer");
    
    if (answer === currentQuestion.correct) {
      setAnswerFeedback("Correct!");
      setCorrectAnswer((prev) => prev + 1);
    } else {
      setAnswerFeedback("Incorrect!");
    }
    
    if (currentQuestionIndex === questions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div id="question">{currentQuestion.question}</div>
      <div id="options">
        <ul>
          {currentQuestion.options.map((option, index) => {
            return (
              <li key={`${option}${index}`}>
                <div className="flex">
                  <input type="radio" name="answer" id={`${option}${index}`} value={option} />
                  {option}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button id="submitBtn" className="border-2 px-2">Submit</button>
      <div id="feedback">{isFinished ? `Quiz complete! You scored ${correctAnswer} of 2!` : answerFeedback }</div>
    </form>
  );
};

export default QuizApp;
