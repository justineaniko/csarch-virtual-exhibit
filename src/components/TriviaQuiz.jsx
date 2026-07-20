import { useState } from "react";

const questions = [
  {
    question:
      "Which East Asian country is known for helping popularize compact discs, PlayStation consoles, and many consumer electronics?",
    choices: ["China", "Japan", "South Korea", "Taiwan"],
    answer: "Japan",
  },
  {
    question:
      "Which country is strongly connected to semiconductor manufacturing through companies like TSMC?",
    choices: ["Taiwan", "Japan", "Mongolia", "North Korea"],
    answer: "Taiwan",
  },
  {
    question:
      "Which East Asian country became globally known for companies such as Samsung and LG?",
    choices: ["China", "South Korea", "Taiwan", "Japan"],
    answer: "South Korea",
  },
];

export default function TriviaQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  function handleAnswer(questionIndex, choice) {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: choice,
    });
  }

  return (
    <section className="mia-trivia-panel">
      <h3>Quick Trivia: East Asia in Computing</h3>

      <p>
        Test your knowledge about East Asia’s contributions to computing and
        technology.
      </p>

      {questions.map((item, index) => {
        const selected = selectedAnswers[index];
        const hasAnswered = selected !== undefined;

        return (
          <div className="mia-trivia-card" key={index}>
            <h4>Question {index + 1}</h4>
            <p>{item.question}</p>

            <div className="mia-options">
              {item.choices.map((choice) => {
                let buttonClass = "";

                if (hasAnswered && choice === item.answer) {
                  buttonClass = "correct";
                } else if (hasAnswered && choice === selected) {
                  buttonClass = "wrong";
                }

                return (
                  <button
                    key={choice}
                    className={buttonClass}
                    onClick={() => handleAnswer(index, choice)}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            {hasAnswered && (
              <p className="mia-result">
                {selected === item.answer
                  ? "Correct!"
                  : `Incorrect. The correct answer is ${item.answer}.`}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
}
