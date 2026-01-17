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
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your feedback here..."
        style={{
          flex: 1,
          padding: "12px",
          fontSize: "16px",
          border: "2px solid #2e8b57",
          borderRadius: "4px",
          outline: "none",
          transition: "border-color 0.3s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#228b22")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#2e8b57")}
      />
      <button
        type="submit"
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#2e8b57",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#228b22")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2e8b57")}
      >
        Submit Feedback
      </button>
    </form>
  );
};
