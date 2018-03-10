using DarkSoulsReact.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsReact.Services
{
    public interface IWeaponService
    {
        IEnumerable<BaseWeapon> GetBaseWeapons();
        IEnumerable<Infusion> GetInfusionsForBaseWeapon(int baseWeaponId);
        IEnumerable<WeaponUpgrade> GetWeaponUpgrades(int infusionId);
        Weapon GetWeapon(int baseWeaponId, int infusionId);
        CorrectionBreakpoints GetCorrectionBreakpoints(int correctionId);
    }
}
