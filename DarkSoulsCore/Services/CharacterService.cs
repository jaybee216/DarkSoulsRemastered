using DarkSoulsCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO = DarkSoulsCore.DTO;

namespace DarkSoulsCore.Services
{
    public class CharacterService : ICharacterService
    {
        private readonly DarkSoulsDbContext _context;

        public CharacterService(DarkSoulsDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<DTO.StartingClass>> GetStartingClassesAsync()
        {
            return await _context.StartingClass.Select(c => new DTO.StartingClass
            {
                Id = c.Id,
                Name = c.Name,
                Strength = c.Strength,
                Dexterity = c.Dexterity,
                Intelligence = c.Intelligence,
                Faith = c.Faith
            }).ToListAsync();
        }
    }
}
