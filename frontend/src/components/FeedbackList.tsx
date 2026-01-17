import { Feedback } from "../types/Feedback";

const categoryMap: Record<number, string> = {
  0: "Negative",
  1: "Positive",
  2: "Neutral",
};

export const FeedbackList = ({ feedbacks }: { feedbacks: Feedback[] }) => {
  if (feedbacks.length === 0) {
    return <p style={{ marginTop: "20px" }}>No feedback yet.</p>;
  }

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f4f4f4" }}>
          <th style={thStyle}>Message</th>
          <th style={thStyle}>Category</th>
          <th style={thStyle}>Created At</th>
        </tr>
      </thead>
      <tbody>
        {feedbacks.map((fb) => (
          <tr key={fb.id}>
            <td style={tdStyle}>{fb.message}</td>
            <td style={tdStyle}>{categoryMap[fb.category]}</td>
            <td style={tdStyle}>
              {new Date(fb.createdAt).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left" as const,
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};
