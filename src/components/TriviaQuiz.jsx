import { useState } from "react";

const questions = [
  {
    question:
      "In 1971, Masatoshi Shima co-designed a chip that shifted computing from multi-chip systems to single-chip logic. What was it?",
    answer: "Intel 4004",
    choices: [
      { text: "Intel 8080", info: "This followed in 1974." },
      { text: "Intel 4004", info: "This was the world's first commercial microprocessor, built for a Japanese calculator." },
      { text: "Zilog Z80", info: "This chip came from Zilog, a firm Shima later helped found after leaving Intel." },
      { text: "MOS 6502", info: "This powered machines like the Apple II, but is not related to Shima's work at Intel." },
    ],
  },
  {
    question:
      "TSMC's 'pure-play foundry' model let companies like Apple and Nvidia design chips without owning a factory. Which country pioneered this?",
    answer: "Taiwan",
    choices: [
      { text: "Taiwan", info: "TSMC separated chip design from chip manufacturing, letting the companies design silicon without a factory." },
      { text: "South Korea", info: "Better at making memory chips; for example, Samsung and SK Hynix are leaders with DRAM and NAND." },
      { text: "Japan", info: "Inventions like the NAND flash and the Intel 4004, not the foundry model" },
      { text: "China", info: "Focused on building independence from Western chips like the Sunway TaihuLight processors." },
    ],
  },
  {
    question: "China's Sunway TaihuLight supercomputer made headlines for a specific reason. What was it?",
    answer: "It ran entirely on homegrown SW26010 processors, not Intel or AMD",
    choices: [
      { text: "It ran entirely on homegrown SW26010 processors, not Intel or AMD", info: "The SW26010 processors were built domestically, breaking China's reliance on Western chipmakers." },
      { text: "It was the first liquid-cooled supercomputer", info: "Liquid cooling isn't what made TaihuLight famous — its homegrown SW26010 processors were the real story." },
      { text: "It was built entirely from recycled hardware", info: "TaihuLight wasn't built from recycled parts — it made news for using entirely domestic processors." },
      { text: "It ran the first version of Linux ever released", info: "TaihuLight didn't debut Linux — its significance was proving China could build many-core processors independently." },
    ],
  },
];

export default function TriviaQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const totalQuestions = questions.length;
  const isCompleted = currentIndex === totalQuestions;

  function handleAnswer(questionIndex, choiceText) {
    // Prevent changing the answer once selected
    if (selectedAnswers[questionIndex] !== undefined) return;

    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: choiceText,
    });
  }

  function handleNext() {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  }

  function handleReset() {
    setSelectedAnswers({});
    setCurrentIndex(0);
  }

  // Calculate final score
  const correctAnswersCount = questions.reduce((score, item, index) => {
    return selectedAnswers[index] === item.answer ? score + 1 : score;
  }, 0);

  return (
    <section className="mia-trivia-panel">
      <h3>Quick Trivia: East Asia in Computing</h3>

      <p>
        Test your knowledge about East Asia’s contributions to computing and
        technology.
      </p>

      {!isCompleted ? (
        <div className="mia-trivia-card">
          <h4>
            Question {currentIndex + 1} of {totalQuestions}
          </h4>
          <p>{questions[currentIndex].question}</p>

          <div className="mia-options">
            {questions[currentIndex].choices.map((choice) => {
              const selected = selectedAnswers[currentIndex];
              const hasAnswered = selected !== undefined;
              let buttonClass = "";

              if (hasAnswered && choice.text === questions[currentIndex].answer) {
                buttonClass = "correct";
              } else if (hasAnswered && choice.text === selected) {
                buttonClass = "wrong";
              }

              return (
                <button
                  key={choice.text}
                  className={buttonClass}
                  disabled={hasAnswered}
                  onClick={() => handleAnswer(currentIndex, choice.text)}
                >
                  {choice.text}
                </button>
              );
            })}
          </div>

          {selectedAnswers[currentIndex] !== undefined && (
            <p className="mia-result">
              {selectedAnswers[currentIndex] === questions[currentIndex].answer
                ? "Correct!"
                : "Wrong answer."}{" "}
              {
                questions[currentIndex].choices.find(
                  (c) => c.text === selectedAnswers[currentIndex]
                )?.info
              }
            </p>
          )}

          <div className="mia-carousel-controls" style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentIndex] === undefined}
            >
              {currentIndex === totalQuestions - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="mia-trivia-results">
          <h4>Quiz Completed!</h4>
          <p>
            You scored {correctAnswersCount} out of {totalQuestions}.
          </p>
          <button onClick={handleReset}>Restart Quiz</button>
        </div>
      )}
    </section>
  );
}