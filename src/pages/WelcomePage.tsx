type WelcomePageProps = {
  onStart: () => void;
};

function WelcomePage({ onStart }: WelcomePageProps) {
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
        overflow: "hidden",
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "15px",
          paddingRight: "30px",
        }}
      >
        <img
          src="/ap-police-logo.png"
          alt="AP Police Logo"
          style={{
            width: "70px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "-40px",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            color: "#ffffff",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          AI-FIR
        </h1>

        <h2
          style={{
            color: "#fbbf24",
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          ఏఐ ఎఫ్‌ఐఆర్‌కు స్వాగతం
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        >
          అనంతపురము జిల్లా పోలీస్
        </p>

        <img
          src="/welcome-officer.jpg"
          alt="Police Officer"
          style={{
            width: "420px",
            maxWidth: "90%",
            borderRadius: "20px",
            boxShadow: "0px 15px 40px rgba(0,0,0,0.35)",
            marginBottom: "25px",
          }}
        />

        <p
          style={{
            fontSize: "18px",
            color: "#e2e8f0",
            textAlign: "center",
            marginBottom: "25px",
            maxWidth: "600px",
          }}
        >
          మీ ఫిర్యాదును సులభంగా మరియు వేగంగా నమోదు చేయండి
        </p>

        <button
          onClick={onStart}
          style={{
            backgroundColor: "#fbbf24",
            color: "#0f172a",
            border: "none",
            padding: "14px 40px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
          }}
        >
          ప్రారంభించండి
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;