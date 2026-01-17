import { Feedback } from "../types/Feedback";

const categoryMap: Record<number, string> = {
  0: "Negative",
  1: "Positive",
  2: "Neutral",
};

const getCategoryColor = (category: number): string => {
  switch (category) {
    case 0:
      return "#dc3545"; // Red for negative
    case 1:
      return "#28a745"; // Green for positive
    case 2:
      return "#ffc107"; // Yellow for neutral
    default:
      return "#6c757d"; // Gray for unknown
  }
};

export const FeedbackList = ({ feedbacks }: { feedbacks: Feedback[] }) => {
  if (feedbacks.length === 0) {
    return (
      <p
        style={{
          marginTop: "20px",
          color: "#666",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        No feedback yet. Be the first to share your thoughts!
      </p>
    );
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h3
        style={{
          color: "#2e8b57",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Customer Feedback ({feedbacks.length})
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {feedbacks.map((fb) => (
          <div
            key={fb.id}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e0",
              width: "100%",
              maxWidth: "600px",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ marginBottom: "15px" }}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.5",
                  color: "#333",
                  margin: "0",
                  fontWeight: "500",
                }}
              >
                "{fb.message}"
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: getCategoryColor(fb.category),
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {categoryMap[fb.category]}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                {new Date(fb.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
