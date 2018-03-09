using System;
using System.Collections.Generic;

namespace DarkSoulsReact.Models
{
    public partial class WeaponUpgrades
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double PhysicsAtkRate { get; set; }
        public double MagicAtkRate { get; set; }
        public double FireAtkRate { get; set; }
        public double ThunderAtkRate { get; set; }
        public double StaminaAtkRate { get; set; }
        public double SaWeaponAtkRate { get; set; }
        public double SaDurabilityRate { get; set; }
        public double CorrectStrengthRate { get; set; }
        public double CorrectAgilityRate { get; set; }
        public double CorrectMagicRate { get; set; }
        public double CorrectFaithRate { get; set; }
        public double PhysicsGuardCutRate { get; set; }
        public double MagicGuardCutRate { get; set; }
        public double FireGuardCutRate { get; set; }
        public double ThunderGuardCutRate { get; set; }
        public double PoisonGuardResistRate { get; set; }
        public double DiseaseGuardResistRate { get; set; }
        public double BloodGuardResistRate { get; set; }
        public double CurseGuardResistRate { get; set; }
        public double StaminaGuardDefRate { get; set; }
        public double SpEffectId1 { get; set; }
        public double SpEffectId2 { get; set; }
        public double SpEffectId3 { get; set; }
        public double ResidentSpEffectId1 { get; set; }
        public double ResidentSpEffectId2 { get; set; }
        public double ResidentSpEffectId3 { get; set; }
        public double MaterialSetId { get; set; }
    }
}
