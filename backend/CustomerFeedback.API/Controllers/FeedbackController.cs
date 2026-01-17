using CustomerFeedback.Application.DTOs;
using CustomerFeedback.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace CustomerFeedback.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FeedbackController : ControllerBase
{
    private readonly FeedbackService _service;

    public FeedbackController(FeedbackService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateFeedbackDto dto)
    {
        var feedback = await _service.CreateFeedbackAsync(dto);
        return Ok(feedback);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var feedbacks = await _service.GetAllAsync();
        return Ok(feedbacks);
    }
}
