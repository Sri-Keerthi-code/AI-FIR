import firData from "../data/firData";
import { useEffect, useState } from "react";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import { speakText } from "../services/ttsService";

type InterviewPageProps = {
  onFinish: () => void;
};

function InterviewPage({ onFinish }: InterviewPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
  speakText(questions[currentQuestion]);
}, [currentQuestion]);

  const sampleAnswers = [
    "రాము",
    "9876543210",
    "అనంతపురం",
    "నిన్న సాయంత్రం",
    "మొబైల్ దొంగతనం",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        paddingTop: "30px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "30px",
        }}
      >
        <img
          src="/ap-police-logo.png"
          alt="Logo"
          style={{ width: "70px" }}
        />
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: "40px",
          marginTop: "20px",
        }}
      >
        AI-FIR Assistant
      </h1>

      {/* Question Section */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#fbbf24",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          ప్రశ్న {currentQuestion + 1} / {questions.length}
        </p>

        <QuestionCard question={questions[currentQuestion]} />
      </div>

      {/* Mic */}
      <div
        style={{
          fontSize: "90px",
          marginTop: "30px",
        }}
      >
        🎤
      </div>

      {/* Answer Box */}
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "15px 25px",
          borderRadius: "12px",
          textAlign: "center",
          minWidth: "300px",
        }}
      >
        <p
          style={{
            color: "#fbbf24",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          నమోదు చేసిన సమాధానం
        </p>

        <p
          style={{
            color: "white",
            fontSize: "18px",
          }}
        >
          {sampleAnswers[currentQuestion]}
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={() => {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            firData.name = sampleAnswers[0];
            firData.phone = sampleAnswers[1];
            firData.location = sampleAnswers[2];
            firData.date = sampleAnswers[3];
            firData.crimeType = sampleAnswers[4];

            onFinish();
          }
        }}
        style={{
          marginTop: "25px",
          backgroundColor: "#fbbf24",
          color: "#0f172a",
          border: "none",
          padding: "12px 30px",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        సమాధానం ఇచ్చాను
      </button>
    </div>
  );
}

export default InterviewPage;