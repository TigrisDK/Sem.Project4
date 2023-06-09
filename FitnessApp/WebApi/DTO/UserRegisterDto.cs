﻿using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;

namespace WebApi.DTO
{
    public class UserRegisterDto : UserDatasDto
    {
        public string Email { get; set; }// = string.Empty;
        public string Password { get; set; }// = string.Empty;
        public string FirstName { get; set; }// = string.Empty;
        public string LastName { get; set; }// = string.Empty;
        public string Gender { get; set; }
        public float Height { get; set; }
        public float Weight { get; set; }
    }
}
