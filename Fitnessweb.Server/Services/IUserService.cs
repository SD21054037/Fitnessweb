using Fitnessweb.Server.DTO_s;


namespace Fitnessweb.Server.Services
{
    public interface IUserService
    {
        Task<UserProfileDto> GetProfileAsync(string userId);
        Task<bool> UpdateProfileAsync(string userId, UpdateProfileDto dto);
    }
}
