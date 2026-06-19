type QuestionCardProps = {
  question: string;
};

function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "#0f172a",
        padding: "25px",
        borderRadius: "16px",
        width: "600px",
        maxWidth: "90%",
        textAlign: "center",
        fontSize: "28px",
        fontWeight: "bold",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
      }}
    >
      {question}
    </div>
  );
}

export default QuestionCard;