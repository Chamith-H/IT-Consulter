using Microsoft.AspNetCore.Mvc;
using System.Text.Json;


namespace Server_users.Controllers
{
    [Route("api/users")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] JsonElement data) {

            // UserModel newUser = new UserModel {
            //     Id = 1,
            //     Name = data.GetProperty("name").GetString(),
            //     Email = data.GetProperty("email").GetString(),
            //     Password = data.GetProperty("password").GetString()
            // };

            await Task.Delay(0);
            return Ok();
        }
    }
}