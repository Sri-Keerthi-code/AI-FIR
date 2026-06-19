import { useEffect } from "react";
import { speakText } from "../services/ttsService";
type ListeningPageProps = {
  onSpeak: () => void;
};

function ListeningPage({ onSpeak }: ListeningPageProps) {
  useEffect(() => {
  speakText("నమస్కారం");
}, []);
  useEffect(() => {
  const message = new SpeechSynthesisUtterance(
    "నమస్కారం. దయచేసి జరిగిన సంఘటనను వివరించండి."
  );

  message.lang = "te-IN";
  message.rate = 0.9;

  window.speechSynthesis.speak(message);
}, []);
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

      <h1
        style={{
          marginTop: "20px",
          fontSize: "42px",
        }}
      >
        AI-FIR Assistant
      </h1>

      <div
        style={{
          marginTop: "80px",
          fontSize: "120px",
        }}
      >
        🎤
      </div>

      <h2
        style={{
          color: "#fbbf24",
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        నమస్కారం
      </h2>

      <p
        style={{
          fontSize: "22px",
          textAlign: "center",
          maxWidth: "700px",
          lineHeight: "1.8",
        }}
      >
        దయచేసి జరిగిన సంఘటనను వివరించండి
      </p>

      <p
        style={{
          marginTop: "30px",
          color: "#cbd5e1",
          fontSize: "18px",
        }}
      >
        Listening...
      </p>

      <button
        onClick={onSpeak}
        style={{
          marginTop: "40px",
          backgroundColor: "#fbbf24",
          color: "#0f172a",
          border: "none",
          padding: "14px 40px",
          borderRadius: "12px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        మాట్లాడండి
      </button>
    </div>
  );
}

export default ListeningPage;