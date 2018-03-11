using DarkSoulsReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsReact.Services
{
    public class CorrectionService : ICorrectionService
    {
        private readonly DarkSoulsDbContext _context;

        public CorrectionService(DarkSoulsDbContext context)
        {
            _context = context;
        }
    }
}
