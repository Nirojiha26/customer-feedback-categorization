using CustomerFeedback.Domain.Entities;

namespace CustomerFeedback.Application.Interfaces
{
    public interface IFeedbackRepository
    {
        Task AddAsync(Feedback feedback);
        Task<List<Feedback>> GetAllAsync();
    }
}
