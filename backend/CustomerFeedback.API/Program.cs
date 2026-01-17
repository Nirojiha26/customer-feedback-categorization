using CustomerFeedback.Application.Services;
using CustomerFeedback.Application.Interfaces;
using CustomerFeedback.Infrastructure.Persistence.InMemory;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Dependency Injection
builder.Services.AddScoped<IFeedbackRepository, InMemoryFeedbackRepository>();
builder.Services.AddScoped<FeedbackService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.MapControllers();
app.Run();
