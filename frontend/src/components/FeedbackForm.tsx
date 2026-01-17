import { useState } from "react";
import { createFeedback } from "../api/feedbackApi";

export const FeedbackForm = ({ onCreated }: { onCreated: () => void }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    try {
      await createFeedback({ message });
      setMessage("");
      onCreated(); // refresh the list
    } catch (error) {
      console.error(error);
      alert("Failed to submit feedback");
    }
  };

  return (
   <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
  <input
    type="text"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Enter feedback"
    style={{
      flex: 1,
      padding: "8px",
      fontSize: "16px",
    }}
  />
  <button
    type="submit"
    style={{
      padding: "8px 16px",
      fontSize: "16px",
      cursor: "pointer",
    }}
  >
    Submit
  </button>
</form>

  );
};
