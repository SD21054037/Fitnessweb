﻿namespace Fitnessweb.Server.DTO_s
{
    public class UserProfileDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int? Age { get; set; }
        public float? Height { get; set; }
        public float? Weight { get; set; }
        public string? Gender { get; set; }
        public string? ProfileGoal { get; set; }
        public string? AvatarUrl { get; set; }
    }

}