using CustomerFeedback.Application.Interfaces;
using CustomerFeedback.Domain.Entities;

namespace CustomerFeedback.Infrastructure.Persistence.CosmosDb
{
    public class CosmosFeedbackRepository : IFeedbackRepository
    {
        public Task AddAsync(Feedback feedback)
        {
            throw new NotImplementedException("Cosmos DB integration placeholder");
        }

        public Task<List<Feedback>> GetAllAsync()
        {
            throw new NotImplementedException("Cosmos DB integration placeholder");
        }
    }
}
