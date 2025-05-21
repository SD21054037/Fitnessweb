using Fitnessweb.Server.Data;
using Fitnessweb.Server.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// ▓█████▄  ▒█████   ██▓ ▒█████   ███▄    █ ▓█████
// ▒██▀ ██▌▒██▒  ██▒▓██▒▒██▒  ██▒ ██ ▀█   █ ▓█   ▀
// ░██   █▌▒██░  ██▒▒██▒▒██░  ██▒▓██  ▀█ ██▒▒███  
// ░▓█▄   ▌▒██   ██░░██░▒██   ██░▓██▒  ▐▌██▒▒▓█  ▄
// ░▒████▓ ░ ████▓▒░░██░░ ████▓▒░▒██░   ▓██░░▒████▒
//  ▒▒▓  ▒ ░ ▒░▒░▒░ ░▓   ░ ▒░▒░▒░ ░ ▒░   ▒ ▒ ░░ ▒░ ░
//  ░ ▒  ▒   ░ ▒ ▒░  ▒ ░  ░ ▒ ▒░ ░ ░░   ░ ▒░ ░ ░  ░
//  ░ ░  ░ ░ ░ ░ ▒   ▒ ░░ ░ ░ ▒     ░   ░ ░    ░   
//    ░        ░ ░   ░      ░ ░           ░    ░  ░
//  ░                                            


//     :::     ::::    ::::  :::::::::: :::::::::  ::::::::::: ::::::::      :::         :::     ::::    ::: 
//  :+: :+:   +:+:+: :+:+:+ :+:        :+:    :+:     :+:    :+:    :+:   :+: :+:     :+: :+:   :+:+:   :+: 
// +#++:++#++: +#+  +:+  +#+ +#++:++#   +#++:++#:      +#+    +#+        +#++:++#++: +#++:++#++: +#+ +:+ +#+ 
// +#+     +#+ +#+       +#+ +#+        +#+    +#+     +#+    +#+        +#+     +#+ +#+     +#+ +#+  +#+#+# 
// #+#     #+# #+#       #+# #+#        #+#    #+#     #+#    #+#    #+# #+#     #+# #+#     #+# #+#   #+#+# 
// ###     ### ###       ### ########## ###    ### ########### ########  ###     ### ###     ### ###    #### 
// Database
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// JWT-authenticatie
var jwtKey = Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]);
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(jwtKey),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

// Dependency Injection (DI)
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", builder =>
    {
        builder.WithOrigins("https://localhost:54677")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});


// Controllers + Newtonsoft
builder.Services.AddControllers()
    .AddNewtonsoftJson();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Fitness API", Version = "v1" });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        Description = "Voer je JWT in: Bearer {token}"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Id = "Bearer",
                    Type = ReferenceType.SecurityScheme
                }
            },
            Array.Empty<string>()
        }
    });
});
//:::    ::: :::::::::: :::    ::: :::::::::: :::    ::: :::::::::: 
//:+:    :+: :+:        :+:    :+: :+:        :+:    :+: :+:        
//+:+    +:+ +:+        +:+    +:+ +:+        +:+    +:+ +:+
//+#++:++#++ +#++:++#   +#++:++#++ +#++:++#   +#++:++#++ +#++:++#   
//+#+    +#+ +#+        +#+    +#+ +#+        +#+    +#+ +#+        
//#+#    #+# #+#        #+#    #+# #+#        #+#    #+# #+#        
//###    ### ########## ###    ### ########## ###    ### ########## 
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowLocalhost");

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication(); // JWT: eerst authenticatie
app.UseAuthorization();

app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();
