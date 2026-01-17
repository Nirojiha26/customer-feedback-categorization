using CustomerFeedback.Application.Interfaces;
using CustomerFeedback.Domain.Entities;
using Microsoft.Azure.Cosmos;

namespace CustomerFeedback.Infrastructure.Persistence.CosmosDb;

public class CosmosFeedbackRepository : IFeedbackRepository
{
    private readonly Container _container;

    public CosmosFeedbackRepository(CosmosClient client)
    {
        _container = client.GetContainer("CustomerFeedbackDb", "Feedbacks");
    }

    public async Task AddAsync(Feedback feedback)
    {
        await _container.CreateItemAsync(feedback, new PartitionKey(feedback.Category.ToString()));
    }

    public async Task<IEnumerable<Feedback>> GetAllAsync()
    {
        var query = _container.GetItemQueryIterator<Feedback>("SELECT * FROM c");
        var results = new List<Feedback>();

        while (query.HasMoreResults)
        {
            var response = await query.ReadNextAsync();
            results.AddRange(response.ToList());
        }

        return results;
    }
}
