using Fitnessweb.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace Fitnessweb.Server.Controllers
{
    [ApiController]
    [Route("api/test")]
    public class TestController : ControllerBase
    {
        private readonly IAuthService _auth;

        public TestController(IAuthService auth)
        {
            _auth = auth;
        }

        [HttpGet]
        public string Test() => "DI werkt!";
    }

}
