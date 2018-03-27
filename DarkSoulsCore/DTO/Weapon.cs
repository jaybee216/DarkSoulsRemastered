using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DarkSoulsCore.DTO
{
    public class Weapon
    {
        public string DisplayName {get;set;}
        public int Id { get; set; }
        public int BaseWeaponId { get; set; }
        public int InfusionId { get; set; }
        public double CorrectStrength { get; set; }
        public double CorrectAgility { get; set; }
        public double CorrectMagic { get; set; }
        public double CorrectFaith { get; set; }
        public double PhysicalDamage { get; set; }
        public double MagicDamage { get; set; }
        public double FireDamage { get; set; }
        public double LightningDamage { get; set; }
        public double RequiredStrength { get; set; }
        public double RequiredAgility { get; set; }
        public double RequiredMagic { get; set; }
        public double RequiredFaith { get; set; }
        public CorrectionBreakpoints CorrectionBreakpoints { get; set; }

        public double OccultBonus { get; set; }
        public double DivineBonus { get; set; }

        public double Weight { get; set; }
        public double Durability { get; set; }
        public double Critical { get; set; }
    }
}
