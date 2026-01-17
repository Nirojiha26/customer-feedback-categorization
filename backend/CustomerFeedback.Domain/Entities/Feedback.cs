using CustomerFeedback.Domain.Enums;

namespace CustomerFeedback.Domain.Entities
{
    public class Feedback
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Message { get; set; } = string.Empty;
        public FeedbackCategory Category { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
