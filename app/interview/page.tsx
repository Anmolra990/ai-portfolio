"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Question = {
  question: string;
  answer: string;
};

export default function InterviewPage() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [scores, setScores] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // 🔝 NEW STATE FOR BUTTON
  const [showTopButton, setShowTopButton] = useState(false);

  // 🔝 SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 🔝 SHOW BUTTON ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generateQuestions = async () => {
    if (!role) {
      alert("Please select a role first!");
      return;
    }

    const res = await fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    });

    const data = await res.json();

    setQuestions(data.questions);
    setUserAnswers([]);
    setScores([]);
    setSubmitted(false);
  };

  const calculateScore = (userAnswer: string, actualAnswer: string) => {
    if (!userAnswer.trim()) return 0;

    const userWords = userAnswer.toLowerCase().split(" ").filter(Boolean);
    const actualWords = actualAnswer.toLowerCase().split(" ").filter(Boolean);

    let matches = 0;

    actualWords.forEach((word) => {
      if (userWords.includes(word)) matches++;
    });

    return Math.min(10, Math.round((matches / actualWords.length) * 10));
  };

  const submitInterview = () => {
    const resultScores = questions.map((q, index) =>
      calculateScore(userAnswers[index] || "", q.answer)
    );

    setScores(resultScores);
    setSubmitted(true);
  };

  const totalScore = scores.reduce((acc, score) => acc + score, 0);

  const percentage =
    questions.length > 0
      ? Math.round((totalScore / (questions.length * 10)) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-3 text-gray-800"
        >
          Interview Practice
        </motion.h1>

        <p className="text-center text-gray-500 mb-8">
          Practice Frontend, React, and Next.js interview questions.
        </p>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-600 p-3 w-full text-gray-700 rounded-lg mb-6"
        >
          <option value="">Select Role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="React Developer">React Developer</option>
          <option value="Next.js Developer">Next.js Developer</option>
        </select>

        <div className="flex flex-wrap gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateQuestions}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow"
          >
            Generate Questions
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setQuestions([]);
              setUserAnswers([]);
              setScores([]);
              setSubmitted(false);
            }}
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow"
          >
            Clear Questions
          </motion.button>

          {questions.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={submitInterview}
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow"
            >
              Submit Interview
            </motion.button>
          )}
        </div>

        {questions.length > 0 && (
          <div className="mb-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              {questions.length} Questions Loaded
            </span>
          </div>
        )}

        {submitted && (
          <div className="bg-green-100 p-5 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Interview Result
            </h2>

            <p className="text-black">
              Total Score: {totalScore} / {questions.length * 10}
            </p>

            <p className="text-black">Percentage: {percentage}%</p>

            <p className="font-semibold mt-2 text-black">
              {percentage >= 90
                ? "⭐⭐⭐⭐⭐ Excellent"
                : percentage >= 70
                ? "⭐⭐⭐⭐ Good"
                : percentage >= 50
                ? "⭐⭐⭐ Average"
                : "⭐⭐ Needs Practice"}
            </p>
          </div>
        )}

        <div>
          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-5 mb-5"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                {index + 1}. {item.question}
              </h3>

              <textarea
                rows={4}
                placeholder="Write your answer..."
                value={userAnswers[index] || ""}
                onChange={(e) => {
                  const updated = [...userAnswers];
                  updated[index] = e.target.value;
                  setUserAnswers(updated);
                }}
                className="w-full border text-gray-700 border-gray-300 rounded-lg p-3 mb-3"
              />

              <details>
                <summary className="cursor-pointer text-blue-600 font-medium">
                  Show Answer
                </summary>

                <p className="mt-3 text-gray-700">{item.answer}</p>
              </details>

              {submitted && (
                <div className="mt-4">
                  <p
                    className={`font-bold ${
                      scores[index] >= 8
                        ? "text-green-600"
                        : scores[index] >= 5
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    Score: {scores[index]}/10
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

       
        {showTopButton && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg z-50"
          >
            ↑ Top
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}