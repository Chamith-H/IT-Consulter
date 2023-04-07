using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using ServerDataMap.Data;
using System.Threading.Tasks;


namespace Server_users.Controllers
{
    [Route("api/users")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        public UsersController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(User data) {
            try
            {

                _dbContext.users.Add(data);

                await _dbContext.SaveChangesAsync();

                return Ok(data);
            }
            catch (DbUpdateException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Failed to save data to database");
            }
        }
    }
}