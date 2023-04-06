using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Server_users.Models;
using System.Text.Json;
using System;

namespace Server_users.Controllers
{
    [Route("api/users")]
    [ApiController]

    public class UserController : ControllerBase
    {
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] JsonElement data) {

            UserModel newUser = new UserModel {
                Id = 1,
                Name = data.GetProperty("name").GetString(),
                Email = data.GetProperty("email").GetString(),
                Password = data.GetProperty("password").GetString()
            };

            await Task.Delay(0);
            return Ok(newUser);
        }

        [HttpGet("login")]
        public IEnumerable<UserModel> Get() {
            Console.WriteLine("Hello, world!");
            List<UserModel> userOne = new List<UserModel>() {
                new UserModel() {Id=1, Name="Chamith", Email="Hiii", Password="gone"}
            };

            return userOne;
        }
    }
}