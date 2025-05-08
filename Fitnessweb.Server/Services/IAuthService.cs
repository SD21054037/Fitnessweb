using Fitnessweb.Server.Models;

namespace Fitnessweb.Server.Services
{
    public interface IAuthService
    {
        Task<string> RegisterAsync(User user, string password);
        Task<string> LoginAsync(string email, string password);
    }
}
