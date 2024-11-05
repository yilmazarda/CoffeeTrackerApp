using CoffeeAPI.Controllers;
using CoffeeAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// CORS ayarlarını ekle
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Veritabanı bağlantısı
builder.Services.AddDbContext<CoffeeContext>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<ICoffeeRepository, CoffeeRepository>();
builder.Services.AddControllers();

var app = builder.Build();

// CORS politikasını uygula
app.UseCors("AllowAllOrigins");

app.MapControllers();

app.MapGet("/", () => "Hello World!");

app.Run();
