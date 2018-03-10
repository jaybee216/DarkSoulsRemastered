using DarkSoulsReact.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsReact.Services
{
    public interface IWeaponService
    {
        Task<IEnumerable<BaseWeapon>> GetBaseWeaponsAsync();
        Task<IEnumerable<Infusion>> GetInfusionsForBaseWeaponAsync(int baseWeaponId);
        Task<IEnumerable<WeaponUpgrade>> GetWeaponUpgradesAsync(int infusionId);
        Task<Weapon> GetWeaponAsync(int baseWeaponId, int infusionId);
        Task<CorrectionBreakpoints> GetCorrectionBreakpointsAsync(int correctionId);
    }
}
