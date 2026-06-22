import { generatePDF } from "../services/pdfService";
import { generateFirSummary } from "../services/firGenerator";
import firData from "../data/firData";
//import { generatePDF } from "../services/pdfService";
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

      <div
        style={{
          backgroundColor: "white",
          color: "#0f172a",
          marginTop: "40px",
          padding: "30px",
          borderRadius: "16px",
          width: "700px",
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

        <p><strong>FIR సంఖ్య:</strong> AP-AI-2026-001</p>

        <p><strong>పేరు:</strong> {firData.name}</p>

        <p><strong>ఫోన్ నంబర్:</strong> {firData.phone}</p>

        <p><strong>చిరునామా:</strong> {firData.address}</p>

        <p><strong>సంఘటన జరిగిన స్థలం:</strong> {firData.location}</p>

        <p><strong>సంఘటన జరిగిన సమయం:</strong> {firData.date}</p>

        <p><strong>సంఘటన వివరాలు:</strong> {firData.incidentDetails}</p>

        <p><strong>సంబంధిత వ్యక్తులు:</strong> {firData.peopleInvolved}</p>

        <p><strong>సాక్షులు:</strong> {firData.witnesses}</p>

        <p><strong>నష్టం / ప్రభావం:</strong> {firData.damage}</p>

        <p><strong>అదనపు సమాచారం:</strong> {firData.additionalInfo}</p>

        <p><strong>స్థితి:</strong> సిద్ధంగా ఉంది</p>
      </div>

      <button
  onClick={async () => {
    const summary = await generateFirSummary();

    console.log(summary);

    generatePDF(summary);
  }}
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