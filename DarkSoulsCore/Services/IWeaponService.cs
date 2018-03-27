using DarkSoulsCore.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsCore.Services
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
