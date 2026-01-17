namespace CustomerFeedback.Domain.Rules;

public static class FeedbackRules
{
    public static bool IsValidMessage(string message)
    {
        return !string.IsNullOrWhiteSpace(message);
    }
}
