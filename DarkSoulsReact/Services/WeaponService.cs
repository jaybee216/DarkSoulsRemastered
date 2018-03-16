using DarkSoulsReact.Models;
using DarkSoulsReact.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DarkSoulsReact.Services
{
    public class WeaponService:IWeaponService
    {
        private readonly DarkSoulsDbContext _context;

        public WeaponService(DarkSoulsDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<BaseWeapon>> GetBaseWeaponsAsync()
        {
            return await _context.BaseWeapons
                .Where(w => !w.IsHidden)
                .OrderBy(w => w.Name)
                .Select(i => new BaseWeapon { Id = i.Id, Name = i.Name })
                .ToListAsync();
        }

        public async Task<IEnumerable<Infusion>> GetInfusionsForBaseWeaponAsync(int baseWeaponId)
        {
            IEnumerable<int> infusionIds = await _context.Weapons.Where(w => w.BaseWeaponId == baseWeaponId)
                                                   .Select(w => w.ReinforceTypeId)
                                                   .ToListAsync();

            return await _context.Infusions.Where(i => infusionIds.Contains(i.Id))
                                     .OrderBy(i => i.Id)
                                     .Select(i => new Infusion { Id = i.Id, Name = i.Name })
                                     .ToListAsync();
        }

        public async Task<IEnumerable<WeaponUpgrade>> GetWeaponUpgradesAsync(int infusionId)
        {
            return await _context.WeaponUpgrades.Where(u => u.InfusionId == infusionId)
                                          .Select(u => new WeaponUpgrade
                                          {
                                              Id = u.Id,
                                              InfusionId = u.InfusionId,
                                              Name = u.EnglishName,
                                              PhysicsAtkRate = u.PhysicsAtkRate,
                                              MagicAtkRate = u.MagicAtkRate,
                                              FireAtkRate = u.FireAtkRate,
                                              LightningAtkRate = u.ThunderAtkRate,
                                              CorrectStrengthRate = u.CorrectStrengthRate,
                                              CorrectAgilityRate = u.CorrectAgilityRate,
                                              CorrectMagicRate = u.CorrectMagicRate,
                                              CorrectFaithRate = u.CorrectFaithRate
                                          })
                                          .OrderByDescending(u => u.Id)
                                          .ToListAsync();
        }

        public async Task<Weapon> GetWeaponAsync(int baseWeaponId, int infusionId)
        {
            var weapon = await _context.Weapons.FirstOrDefaultAsync(w => w.BaseWeaponId == baseWeaponId && w.ReinforceTypeId == infusionId);
            if (weapon == null)
            {
                throw new ArgumentException($"No Weapon found with BaseWeaponId {baseWeaponId}, InfusionId {infusionId}.");
            }
            return new Weapon
            {
                DisplayName = weapon.EnglishName,
                BaseWeaponId = weapon.BaseWeaponId,
                InfusionId = weapon.ReinforceTypeId,
                Id = weapon.Id,
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
                CorrectionBreakpoints = await GetCorrectionBreakpointsAsync(weapon.CorrectType),
                OccultBonus = weapon.AntiDemonDamageRate,
                DivineBonus = weapon.AntSaintDamageRate,
                Weight = weapon.Weight,
                Durability = weapon.MaxDurability,
                Critical = weapon.OverStrength //TODO
            };
        }

        public async Task<CorrectionBreakpoints> GetCorrectionBreakpointsAsync(int correctionId)
        {
            Corrections corrections = await _context.Corrections.FirstOrDefaultAsync(c => c.Id == correctionId);
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
