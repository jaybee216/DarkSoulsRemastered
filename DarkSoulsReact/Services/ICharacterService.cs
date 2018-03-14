using DarkSoulsReact.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsReact.Services
{
    public interface ICharacterService
    {
        Task<IEnumerable<DTO.StartingClass>> GetStartingClassesAsync();
    }
}
