import firData from "../data/firData";

function DownloadPage() {
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

      {/* Success Heading */}
      <h1
        style={{
          marginTop: "50px",
          color: "#22c55e",
          fontSize: "42px",
          textAlign: "center",
        }}
      >
        ✅ FIR విజయవంతంగా రూపొందించబడింది
      </h1>

      {/* FIR Details Card */}
      <div
        style={{
          backgroundColor: "white",
          color: "#0f172a",
          marginTop: "40px",
          padding: "30px",
          borderRadius: "16px",
          width: "600px",
          maxWidth: "90%",
          textAlign: "left",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          FIR వివరాలు
        </h2>

        <p style={{ marginTop: "15px" }}>
          <strong>FIR సంఖ్య:</strong> AP-AI-2025-001
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>పేరు:</strong> {firData.name}
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>ఫోన్ నంబర్:</strong> {firData.phone}
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>స్థలం:</strong> {firData.location}
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>సమయం:</strong> {firData.date}
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>నేరం:</strong> {firData.crimeType}
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>స్థితి:</strong> సిద్ధంగా ఉంది
        </p>

        <p style={{ marginTop: "15px" }}>
          <strong>తేదీ:</strong> 20-06-2026
        </p>
      </div>

      {/* Download Button */}
      <button
        style={{
          marginTop: "30px",
          backgroundColor: "#fbbf24",
          color: "#0f172a",
          border: "none",
          padding: "14px 35px",
          borderRadius: "12px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        PDF డౌన్‌లోడ్ చేయండి
      </button>
    </div>
  );
}

export default DownloadPage;