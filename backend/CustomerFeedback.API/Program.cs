using CustomerFeedback.Application.Interfaces;
using CustomerFeedback.Application.Services;
using CustomerFeedback.Infrastructure.Persistence.InMemory;

var builder = WebApplication.CreateBuilder(args);

// ✅ Register services FIRST
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ✅ CORS must be added BEFORE builder.Build()
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy
            .WithOrigins("http://localhost:3000", "http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// ✅ Dependency Injection
builder.Services.AddScoped<IFeedbackRepository, InMemoryFeedbackRepository>();
builder.Services.AddScoped<FeedbackService>();

var app = builder.Build();

// ✅ Middleware AFTER build
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");

app.UseAuthorization();
app.MapControllers();
app.Run();
