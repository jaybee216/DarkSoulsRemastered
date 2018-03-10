using DarkSoulsReact.Models;
using DarkSoulsReact.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsReact.Services
{
    public class WeaponService:IWeaponService
    {
        private readonly DarkSoulsDbContext _context;

        public WeaponService(DarkSoulsDbContext context)
        {
            _context = context;
        }

        public IEnumerable<BaseWeapon> GetBaseWeapons()
        {
            return _context.BaseWeapons
                .ToList()
                .Select(i => new BaseWeapon { BaseWeaponId = i.Id, Name = i.Name }); ;
        }

        public IEnumerable<Infusion> GetInfusionsForBaseWeapon(int baseWeaponId)
        {
            IEnumerable<int> infusionIds = _context.Weapons.Where(w => w.BaseWeaponId == baseWeaponId)
                                                   .ToList()
                                                   .Select(w => w.InfusionId);

            return _context.Infusions.Where(i => infusionIds.Contains(i.Id))
                                     .ToList()
                                     .Select(i => new Infusion { InfusionId = i.Id, Name = i.Name });
        }

        public IEnumerable<WeaponUpgrade> GetWeaponUpgrades(int infusionId)
        {
            return _context.WeaponUpgrades.Where(u => u.InfusionId == infusionId)
                                          .ToList()
                                          .Select(u => new WeaponUpgrade
                                          {
                                              WeaponUpgradeId = u.Id,
                                              InfusionId = u.InfusionId,
                                              Name = u.Name,
                                              PhysicsAtkRate = u.PhysicsAtkRate,
                                              MagicAtkRate = u.MagicAtkRate,
                                              FireAtkRate = u.FireAtkRate,
                                              ThunderAtkRate = u.ThunderAtkRate,
                                              CorrectStrengthRate = u.CorrectStrengthRate,
                                              CorrectAgilityRate = u.CorrectAgilityRate,
                                              CorrectMagicRate = u.CorrectMagicRate,
                                              CorrectFaithRate = u.CorrectFaithRate
                                          });
        }

        public Weapon GetWeapon(int baseWeaponId, int infusionId)
        {
            var weapon = _context.Weapons.FirstOrDefault(w => w.BaseWeaponId == baseWeaponId && w.InfusionId == infusionId);
            if (weapon == null)
            {
                throw new ArgumentException($"No Weapon found with BaseWeaponId {baseWeaponId}, InfusionId {infusionId}.");
            }
            return new Weapon
            {
                BaseWeaponId = weapon.BaseWeaponId,
                InfusionId = weapon.InfusionId,
                WeaponId = weapon.Id,
                PhysicalDamage = weapon.PhysicalDamage,
                MagicDamage = weapon.MagicDamage,
                FireDamage = weapon.FireDamage,
                LightningDamage = weapon.LightningDamage,
                CorrectStrength = weapon.CorrectStrength,
                CorrectAgility = weapon.CorrectAgility,
                CorrectMagic = weapon.CorrectMagic,
                CorrectFaith = weapon.CorrectFaith,
                RequiredStrength = weapon.RequiredStrength,
                RequiredAgility = weapon.RequiredAgility,
                RequiredMagic = weapon.RequiredMagic,
                RequiredFaith = weapon.RequiredFaith,
                CorrectionBreakpoints = GetCorrectionBreakpoints(weapon.CorrectType)
            };
        }

        public CorrectionBreakpoints GetCorrectionBreakpoints(int correctionId)
        {
            Corrections corrections = _context.Corrections.FirstOrDefault(c => c.Id == correctionId);
            if (corrections == null)
            {
                throw new ArgumentException($"No Corrections found with Id {correctionId}.");
            }
            return new CorrectionBreakpoints
            {
                CorrectionType = corrections.Id,
                StageMaxGrowVal0 = corrections.StageMaxGrowVal0,
                StageMaxGrowVal1 = corrections.StageMaxGrowVal1,
                StageMaxGrowVal2 = corrections.StageMaxGrowVal2,
                StageMaxGrowVal3 = corrections.StageMaxGrowVal3,
                StageMaxGrowVal4 = corrections.StageMaxGrowVal4,
                StageMaxVal0 = corrections.StageMaxVal0,
                StageMaxVal1 = corrections.StageMaxVal1,
                StageMaxVal2 = corrections.StageMaxVal2,
                StageMaxVal3 = corrections.StageMaxVal3,
                StageMaxVal4 = corrections.StageMaxVal4
            };
        }
    }
}
