import {
  startRecording,
  stopRecording,
  blobToFile,
  transcribeAudio,
} from "../services/sttService";
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
const [currentAnswer, setCurrentAnswer] = useState("");
const [isRecording, setIsRecording] = useState(false);

const [answers, setAnswers] = useState<string[]>(
  Array(questions.length).fill("")
);
  

  useEffect(() => {
    speakText(questions[currentQuestion]);
  }, [currentQuestion]);

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
      <button
        onClick={async () => {
          if (!isRecording) {
            await startRecording();
            setIsRecording(true);
          } else {
            const audioBlob = await stopRecording();

            const file = blobToFile(audioBlob);

            const transcript = await transcribeAudio(file);

            setCurrentAnswer(transcript);

            setIsRecording(false);
          }
        }}
        style={{
          fontSize: "60px",
          marginTop: "30px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isRecording ? "🔴" : "🎤"}
      </button>

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
          {currentAnswer}
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={() => {
          const updatedAnswers = [...answers];
updatedAnswers[currentQuestion] = currentAnswer;

setAnswers(updatedAnswers);

if (currentQuestion < questions.length - 1) {
  setCurrentQuestion(currentQuestion + 1);
  setCurrentAnswer("");
} else {
  firData.name = updatedAnswers[0];
firData.phone = updatedAnswers[1];
firData.address = updatedAnswers[2];
firData.location = updatedAnswers[3];
firData.date = updatedAnswers[4];
firData.incidentDetails = updatedAnswers[5];
firData.peopleInvolved = updatedAnswers[6];
firData.witnesses = updatedAnswers[7];
firData.damage = updatedAnswers[8];
firData.additionalInfo = updatedAnswers[9];

  console.log(firData);

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