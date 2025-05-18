using Fitnessweb.Server.Data;
using Fitnessweb.Server.DTO_s;


namespace Fitnessweb.Server.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<UserProfileDto> GetProfileAsync(string userId)
        {
            if (!int.TryParse(userId, out var id))
                throw new ArgumentException("Invalid user ID");

            var user = await _context.Users.FindAsync(id);

            if (user == null) throw new Exception("User not found");

            return new UserProfileDto
            {
                Name = user.Name,
                Email = user.Email,
                
               
                ProfileGoal = user.Goal,
               
            };
        }

        public async Task<bool> UpdateProfileAsync(string userId, UpdateProfileDto dto)
        {
            if (!int.TryParse(userId, out var id))
                throw new ArgumentException("Invalid user ID");

            var user = await _context.Users.FindAsync(id);
            if (user == null) return false;

            user.Name = dto.Name ?? user.Name;
        
            user.Goal = dto.ProfileGoal ?? user.Goal;
            

            _context.Users.Update(user);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
