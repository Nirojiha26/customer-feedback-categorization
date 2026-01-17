using CustomerFeedback.Application.DTOs;
using CustomerFeedback.Application.Interfaces;
using CustomerFeedback.Domain.Entities;
using CustomerFeedback.Domain.Enums;
using CustomerFeedback.Domain.Rules;

namespace CustomerFeedback.Application.Services;

public class FeedbackService
{
    private readonly IFeedbackRepository _repository;

    public FeedbackService(IFeedbackRepository repository)
    {
        _repository = repository;
    }

    public async Task<Feedback> CreateFeedbackAsync(CreateFeedbackDto dto)
    {
        if (!FeedbackRules.IsValidMessage(dto.Message))
            throw new ArgumentException("Message cannot be empty.");

        var category = dto.Message.ToLower().Contains("good")
            ? FeedbackCategory.Positive
            : dto.Message.ToLower().Contains("bad")
                ? FeedbackCategory.Negative
                : FeedbackCategory.Suggestion;

        var feedback = new Feedback
        {
            Id = Guid.NewGuid(),
            Message = dto.Message,
            Category = category,
            CreatedAt = DateTime.UtcNow
        };

        await _repository.AddAsync(feedback);
        return feedback;
    }

    public async Task<IEnumerable<Feedback>> GetAllAsync()
    {
        return await _repository.GetAllAsync();
    }
}
