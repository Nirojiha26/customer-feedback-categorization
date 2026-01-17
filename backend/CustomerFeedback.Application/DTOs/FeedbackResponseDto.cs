namespace CustomerFeedback.Application.DTOs
{
    public class FeedbackResponseDto
    {
        public Guid Id { get; set; }
        public string Message { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }
}
