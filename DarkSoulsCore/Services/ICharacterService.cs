using DarkSoulsCore.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsCore.Services
{
    public interface ICharacterService
    {
        Task<IEnumerable<DTO.StartingClass>> GetStartingClassesAsync();
    }
}
