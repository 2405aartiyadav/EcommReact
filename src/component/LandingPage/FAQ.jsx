import React, { useState } from "react";

const FAQ = () => {
  const [questions, setQuestions] = useState([
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  // Function to handle adding a new question
  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion.trim()]);
      setNewQuestion("");
      setIsInputVisible(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl flex flex-col lg:flex-row p-8">
        {/* Left Side: FAQ Title and Button */}
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            saepe. Voluptatum expedita sapiente sed vel.
          </p>
          <button
            onClick={() => setIsInputVisible(!isInputVisible)}
            className="bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300 mb-4"
          >
            Ask a Question +
          </button>

          {isInputVisible && (
            <div className="mb-4">
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="w-full p-2 border rounded-lg mb-2 focus:outline-none  focus:border-green-500"
                placeholder="Type your question here..."
              />
              <button
                onClick={handleAddQuestion}
                className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300"
              >
                Submit Question
              </button>
            </div>
          )}
        </div>

        {/* Questions List */}
        <div className="flex-1">
          <div className="grid gap-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-lg shadow-md"
              >
                <h3 className="text-white font-semibold">{question}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
