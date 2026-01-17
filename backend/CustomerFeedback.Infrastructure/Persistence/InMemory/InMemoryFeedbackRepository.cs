using CustomerFeedback.Application.Interfaces;
using CustomerFeedback.Domain.Entities;

namespace CustomerFeedback.Infrastructure.Persistence.InMemory
{
    public class InMemoryFeedbackRepository : IFeedbackRepository
    {
        private static readonly List<Feedback> _feedbacks = new();

        public Task AddAsync(Feedback feedback)
        {
            _feedbacks.Add(feedback);
            return Task.CompletedTask;
        }

        public Task<List<Feedback>> GetAllAsync()
        {
            return Task.FromResult(_feedbacks.ToList());
        }
    }
}
