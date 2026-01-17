import { useEffect, useState } from "react";
import { getFeedbacks } from "../api/feedbackApi";
import { Feedback } from "../types/Feedback";
import { FeedbackForm } from "../components/FeedbackForm";
import { FeedbackList } from "../components/FeedbackList";
import NavBar from "../components/NavBar";

const Home = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  const fetchFeedbacks = async () => {
    const data = await getFeedbacks();
    setFeedbacks(data);
  };

  useEffect(() => {
    if (showFeedbacks) {
      fetchFeedbacks();
    }
  }, [showFeedbacks]);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <NavBar />
      <div
        style={{
          maxWidth: "800px",
          margin: "80px auto 40px auto",
          padding: "30px",
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            color: "#2e8b57",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Share Your Feedback
        </h2>

        <FeedbackForm onCreated={fetchFeedbacks} />

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#2e8b57",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s",
          }}
          onClick={() => setShowFeedbacks(!showFeedbacks)}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#228b22")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#2e8b57")
          }
        >
          {showFeedbacks ? "Hide Feedbacks" : "View Feedbacks"}
        </button>

        {showFeedbacks && <FeedbackList feedbacks={feedbacks} />}
      </div>
    </div>
  );
};

export default Home;
