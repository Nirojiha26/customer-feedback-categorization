using CustomerFeedback.Application.Interfaces;
using CustomerFeedback.Domain.Entities;

namespace CustomerFeedback.Infrastructure.Persistence.InMemory;

public class InMemoryFeedbackRepository : IFeedbackRepository
{
    private readonly List<Feedback> _feedbacks = new();

    public Task AddAsync(Feedback feedback)
    {
        _feedbacks.Add(feedback);
        return Task.CompletedTask;
    }

    public Task<IEnumerable<Feedback>> GetAllAsync()
    {
        return Task.FromResult<IEnumerable<Feedback>>(_feedbacks);
    }
}
