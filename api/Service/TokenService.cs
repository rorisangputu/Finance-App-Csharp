using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;

namespace api.Service
{
    public class TokenService : ITokenService
    {
        public TokenService(IConfiguration config)
        {

        }
        public string CreateToken(AppUser user)
        {
            throw new NotImplementedException();
        }
    }
}