import firData from "../data/firData";

type ReviewPageProps = {
  onGenerate: () => void;
};

function ReviewPage({ onGenerate }: ReviewPageProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
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
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        FIR సమీక్ష
      </h1>

      <div
        style={{
          backgroundColor: "white",
          color: "#0f172a",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "30px",
          borderRadius: "16px",
        }}
      >
        <p><strong>పేరు:</strong> {firData.name}</p>
        <br />

        <p><strong>ఫోన్ నంబర్:</strong> {firData.phone}</p>
        <br />

        <p><strong>చిరునామా:</strong> {firData.address}</p>
        <br />

        <p><strong>సంఘటన జరిగిన స్థలం:</strong> {firData.location}</p>
        <br />

        <p><strong>సంఘటన జరిగిన సమయం:</strong> {firData.date}</p>
        <br />

        <p><strong>సంఘటన వివరాలు:</strong> {firData.incidentDetails}</p>
        <br />

        <p><strong>సంబంధిత వ్యక్తులు:</strong> {firData.peopleInvolved}</p>
        <br />

        <p><strong>సాక్షులు:</strong> {firData.witnesses}</p>
        <br />

        <p><strong>నష్టం / ప్రభావం:</strong> {firData.damage}</p>
        <br />

        <p><strong>అదనపు సమాచారం:</strong> {firData.additionalInfo}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={onGenerate}
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
          FIR రూపొందించండి
        </button>
      </div>
    </div>
  );
}

export default ReviewPage;