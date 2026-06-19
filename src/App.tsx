import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import ListeningPage from "./pages/ListeningPage";
import InterviewPage from "./pages/InterviewPage";
import ReviewPage from "./pages/ReviewPage";
import DownloadPage from "./pages/DownloadPage";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  if (currentPage === "welcome") {
    return (
      <WelcomePage
        onStart={() => setCurrentPage("listening")}
      />
    );
  }

  if (currentPage === "listening") {
    return (
      <ListeningPage
        onSpeak={() => setCurrentPage("interview")}
      />
    );
  }

  if (currentPage === "interview") {
    return (
      <InterviewPage
        onFinish={() => setCurrentPage("review")}
      />
    );
  }

  if (currentPage === "review") {
    return (
      <ReviewPage
        onGenerate={() => setCurrentPage("download")}
      />
    );
  }

  return <DownloadPage />;
}

export default App;