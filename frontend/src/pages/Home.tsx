import { useEffect, useState } from "react";
import { getFeedbacks } from "../api/feedbackApi";
import { Feedback } from "../types/Feedback";
import { FeedbackForm } from "../components/FeedbackForm";
import { FeedbackList } from "../components/FeedbackList";

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
    <div style={{ maxWidth: "800px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Customer Feedback</h1>

      <FeedbackForm onCreated={fetchFeedbacks} />

      <button
        style={{ marginTop: "20px" }}
        onClick={() => setShowFeedbacks(!showFeedbacks)}
      >
        {showFeedbacks ? "Hide Feedbacks" : "View Feedbacks"}
      </button>

      {showFeedbacks && <FeedbackList feedbacks={feedbacks} />}
    </div>
  );
};

export default Home;
